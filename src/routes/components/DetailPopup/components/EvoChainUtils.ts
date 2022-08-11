import type { EvolutionChain, ChainLink, EvolutionDetail } from 'pokenode-ts';
import { utilClient } from '../fetch';
import { fillNo } from '@/utils/functional';
import type { PromiseResolved } from '@/utils/type-utils';

interface TFetchEvoChainData {
  no: string | number | null;
  form: string | undefined;
  url?: string;
}

export interface TEvoChainNode {
  id: number;
  no: string | number;
  form?: string;
  root: boolean;
}

export interface TEvoChainEdge {
  from: number;
  to: number;
  detail: EvolutionDetail;
}

export async function fetchEvoChain(data: TFetchEvoChainData) {
  if (!data.url) {
    throw new Error('missing evolution chain resource url');
  }

  const res: EvolutionChain = await utilClient.getResourceByUrl(data.url);
  let idSeed = 0;
  const nodes: TEvoChainNode[] = [];
  const edges: TEvoChainEdge[] = [];

  const queue: [TEvoChainNode | null, ChainLink][] = [[null, res.chain]];
  do {
    const [before, current] = queue.shift()!;

    // 构建 node
    const no = extractNoFromResourceUrl(current.species.url);
    const node: TEvoChainNode = {
      no,
      root: before === null,
      id: idSeed++
    };
    nodes.push(node);

    // 构建 edge
    if (before && current.evolution_details.length) {
      const detail = current.evolution_details[0];
      const edge: TEvoChainEdge = {
        from: before.id,
        to: node.id,
        detail
      };
      edges.push(edge);
    }

    queue.push(...current.evolves_to.map((chain) => [node, chain] as [TEvoChainNode, ChainLink]));
  } while (queue.length);

  return { nodes, edges };
}

type TEvoChainData = PromiseResolved<ReturnType<typeof fetchEvoChain>>;

export type TEvoGraphNode = {
  detail: EvolutionDetail | null;
  node: TEvoChainNode;
  next?: TEvoGraphNode[];
};

export function constructEvoGraph(data: TEvoChainData): TEvoGraphNode {
  const root = data.nodes.find((n) => n.root);
  if (!root) {
    throw new Error('invalid target to build evolution graph');
  }

  const next: TEvoGraphNode[] = data.edges
    .filter((e) => e.from === root.id)
    .map((edge) => buildGraphNode(edge, data));

  return { detail: null, node: root, next };
}

function buildGraphNode(edge: TEvoChainEdge, data: TEvoChainData): TEvoGraphNode {
  const node = data.nodes.find((n) => n.id === edge.to);
  if (!node) {
    throw new Error('invalid target to build graph node');
  }
  const next = data.edges
    .filter((e) => e.from === node.id)
    .map((edge) => buildGraphNode(edge, data));
  return { node, detail: edge.detail, next: next.length ? next : undefined };
}

function extractNoFromResourceUrl(url: string) {
  // https://pokeapi.co/api/v2/pokemon-species/298/
  const result = url.match(/pokemon-species\/(\d+)\/?$/);
  if (!result) {
    throw new Error('invalid pokemon species resource url');
  }
  return fillNo(+result[1]);
}
