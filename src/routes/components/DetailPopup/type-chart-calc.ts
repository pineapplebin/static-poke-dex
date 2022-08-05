import { Types, type PokemonType } from 'pokenode-ts';
import {
  TYPES_ID_MAP,
  TYPES_MAP,
  type TTypeNames,
  type TTypeUseful
} from '@/components/TypeLogo/constants';

export interface TRelationItem {
  type: TTypeUseful;
  times: number;
}

export const ATTACK_RELATION_MAP: Record<TTypeUseful, TRelationItem[]> = {
  [Types.BUG]: [
    { type: Types.GRASS, times: 2 },
    { type: Types.PSYCHIC, times: 2 },
    { type: Types.DARK, times: 2 },
    { type: Types.POISON, times: 0.5 },
    { type: Types.FLYING, times: 0.5 },
    { type: Types.FIGHTING, times: 0.5 },
    { type: Types.FIRE, times: 0.5 },
    { type: Types.GHOST, times: 0.5 },
    { type: Types.STEEL, times: 0.5 },
    { type: Types.FAIRY, times: 0.5 }
  ],
  [Types.DARK]: [
    { type: Types.PSYCHIC, times: 2 },
    { type: Types.GHOST, times: 2 },
    { type: Types.FIGHTING, times: 0.5 },
    { type: Types.DARK, times: 0.5 },
    { type: Types.FAIRY, times: 0.5 }
  ],
  [Types.DRAGON]: [
    { type: Types.DRAGON, times: 2 },
    { type: Types.STEEL, times: 0.5 },
    { type: Types.FAIRY, times: 0 }
  ],
  [Types.ELECTRIC]: [
    { type: Types.FLYING, times: 2 },
    { type: Types.WATER, times: 2 },
    { type: Types.ELECTRIC, times: 0.5 },
    { type: Types.GRASS, times: 0.5 },
    { type: Types.DRAGON, times: 0.5 },
    { type: Types.GROUND, times: 0 }
  ],
  [Types.FAIRY]: [
    { type: Types.FIGHTING, times: 2 },
    { type: Types.DRAGON, times: 2 },
    { type: Types.DARK, times: 2 },
    { type: Types.POISON, times: 0.5 },
    { type: Types.FIRE, times: 0.5 },
    { type: Types.STEEL, times: 0.5 }
  ],
  [Types.FIGHTING]: [
    { type: Types.NORMAL, times: 2 },
    { type: Types.ROCK, times: 2 },
    { type: Types.ICE, times: 2 },
    { type: Types.STEEL, times: 2 },
    { type: Types.DARK, times: 2 },
    { type: Types.POISON, times: 0.5 },
    { type: Types.BUG, times: 0.5 },
    { type: Types.FLYING, times: 0.5 },
    { type: Types.PSYCHIC, times: 0.5 },
    { type: Types.FAIRY, times: 0.5 }
  ],
  [Types.FIRE]: [
    { type: Types.GRASS, times: 2 },
    { type: Types.ICE, times: 2 },
    { type: Types.BUG, times: 2 },
    { type: Types.STEEL, times: 2 },
    { type: Types.FIRE, times: 0.5 },
    { type: Types.WATER, times: 0.5 },
    { type: Types.ROCK, times: 0.5 },
    { type: Types.DRAGON, times: 0.5 }
  ],
  [Types.FLYING]: [
    { type: Types.BUG, times: 2 },
    { type: Types.FIGHTING, times: 2 },
    { type: Types.GRASS, times: 2 },
    { type: Types.ELECTRIC, times: 0.5 },
    { type: Types.ROCK, times: 0.5 },
    { type: Types.STEEL, times: 0.5 }
  ],
  [Types.GHOST]: [
    { type: Types.PSYCHIC, times: 2 },
    { type: Types.GHOST, times: 2 },
    { type: Types.DARK, times: 0.5 },
    { type: Types.NORMAL, times: 0 }
  ],
  [Types.GRASS]: [
    { type: Types.GROUND, times: 2 },
    { type: Types.WATER, times: 2 },
    { type: Types.ROCK, times: 2 },
    { type: Types.BUG, times: 0.5 },
    { type: Types.POISON, times: 0.5 },
    { type: Types.FLYING, times: 0.5 },
    { type: Types.FIRE, times: 0.5 },
    { type: Types.GRASS, times: 0.5 },
    { type: Types.DRAGON, times: 0.5 },
    { type: Types.STEEL, times: 0.5 }
  ],
  [Types.GROUND]: [
    { type: Types.POISON, times: 2 },
    { type: Types.FIRE, times: 2 },
    { type: Types.ELECTRIC, times: 2 },
    { type: Types.ROCK, times: 2 },
    { type: Types.STEEL, times: 2 },
    { type: Types.BUG, times: 0.5 },
    { type: Types.GRASS, times: 0.5 },
    { type: Types.FLYING, times: 0 }
  ],
  [Types.ICE]: [
    { type: Types.FLYING, times: 2 },
    { type: Types.GROUND, times: 2 },
    { type: Types.GRASS, times: 2 },
    { type: Types.DRAGON, times: 2 },
    { type: Types.FIRE, times: 0.5 },
    { type: Types.WATER, times: 0.5 },
    { type: Types.ICE, times: 0.5 },
    { type: Types.STEEL, times: 0.5 }
  ],
  [Types.NORMAL]: [
    { type: Types.ROCK, times: 0.5 },
    { type: Types.STEEL, times: 0.5 },
    { type: Types.GHOST, times: 0 }
  ],
  [Types.POISON]: [
    { type: Types.GRASS, times: 2 },
    { type: Types.FAIRY, times: 2 },
    { type: Types.POISON, times: 0.5 },
    { type: Types.GROUND, times: 0.5 },
    { type: Types.ROCK, times: 0.5 },
    { type: Types.GHOST, times: 0.5 },
    { type: Types.STEEL, times: 0 }
  ],
  [Types.PSYCHIC]: [
    { type: Types.POISON, times: 2 },
    { type: Types.FIGHTING, times: 2 },
    { type: Types.PSYCHIC, times: 0.5 },
    { type: Types.STEEL, times: 0.5 },
    { type: Types.DARK, times: 0 }
  ],
  [Types.ROCK]: [
    { type: Types.BUG, times: 2 },
    { type: Types.FLYING, times: 2 },
    { type: Types.FIRE, times: 2 },
    { type: Types.ICE, times: 2 },
    { type: Types.GROUND, times: 0.5 },
    { type: Types.FIGHTING, times: 0.5 },
    { type: Types.STEEL, times: 0.5 }
  ],
  [Types.STEEL]: [
    { type: Types.ICE, times: 2 },
    { type: Types.ROCK, times: 2 },
    { type: Types.FAIRY, times: 2 },
    { type: Types.WATER, times: 0.5 },
    { type: Types.FIRE, times: 0.5 },
    { type: Types.ELECTRIC, times: 0.5 },
    { type: Types.STEEL, times: 0.5 }
  ],
  [Types.WATER]: [
    { type: Types.GROUND, times: 2 },
    { type: Types.FIRE, times: 2 },
    { type: Types.ROCK, times: 2 },
    { type: Types.WATER, times: 0.5 },
    { type: Types.GRASS, times: 0.5 },
    { type: Types.DRAGON, times: 0.5 }
  ]
};

function calcDefenseRelation(type: TTypeUseful): TRelationItem[] {
  return Object.keys(ATTACK_RELATION_MAP).reduce((acc, target) => {
    const items: TRelationItem[] = ATTACK_RELATION_MAP[+target as TTypeUseful];
    return acc.concat(
      items
        .filter((item) => item.type === type)
        .map((item) => {
          if (item.times === 0) {
            return { type: +target, times: 0 };
          }
          return { type: +target, times: item.times };
        })
    );
  }, [] as TRelationItem[]);
}

const DEFENSE_RELATION_MAP: Record<TTypeUseful, TRelationItem[]> = Object.keys(
  ATTACK_RELATION_MAP
).reduce((acc, type) => {
  const _type = +type as TTypeUseful;
  acc[_type] = calcDefenseRelation(_type);
  return acc;
}, {} as Record<TTypeUseful, TRelationItem[]>);

type TRelationResult = {
  type: TTypeNames;
  times: number;
};

export interface TPokemonDefenseRelation {
  weakness: TRelationResult[];
  resistance: TRelationResult[];
}

/**
 * 获取防御面的关系
 */
export function getPokemonDefenseRelation(types: PokemonType[]): TPokemonDefenseRelation {
  const weakness: Record<number, number> = {};
  const resistance: Record<number, number> = {};

  types.forEach((type) => {
    const _type = TYPES_ID_MAP[type.type.name as TTypeNames];

    const relations = DEFENSE_RELATION_MAP[_type];
    relations.forEach((relation) => {
      const key = relation.type;
      if (relation.times < 1) {
        resistance[key] = (resistance[key] ?? 1) * relation.times;
      } else {
        weakness[key] = (weakness[key] ?? 1) * relation.times;
      }

      // 合并复合属性冲突
      if (key in resistance && key in weakness) {
        const merge = +(resistance[key] * weakness[key]).toPrecision(10);
        if (merge === 1) {
          delete resistance[key];
          delete weakness[key];
        } else if (merge > 1) {
          weakness[key] = merge;
          delete resistance[key];
        } else if (merge < 1) {
          resistance[key] = merge;
          delete weakness[key];
        }
      }
    });
  });

  return {
    weakness: Object.keys(weakness)
      .sort()
      .map((type) => ({
        type: TYPES_MAP[+type as TTypeUseful].className,
        times: weakness[+type]
      })),
    resistance: Object.keys(resistance)
      .sort()
      .map((type) => ({
        type: TYPES_MAP[+type as TTypeUseful].className,
        times: resistance[+type]
      }))
  };
}
