import zip from 'lodash/zip.js';

function html(strings: TemplateStringsArray, ...args: any[]) {
  return zip(Array.from(strings), args)
    .map((arr) => arr.join(''))
    .join('');
}

type TPos = [number, number];

function calcWidth(edge: number) {
  return Math.sqrt(3) * edge;
}

export function buildSvgString(edge: number, stats: number[]) {
  const width = calcWidth(edge);

  return html`<svg
    width="${width + 2}"
    height="${2 * edge + 2}"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${dragHexagon({ edge, width, fill: '#3e3e3e', stroke: '#3e3e3e' })}
    ${dragHexagon({ edge, width, fill: '#4d4d4d', strokeWidth: 0, scale: 0.8 })}
    ${dragHexagon({ edge, width, fill: '#6a6a6a', strokeWidth: 0, scale: 0.6 })}
    ${dragStatsEdge(stats, edge, width)}
  </svg>`;
}

interface TDragHexagon {
  width: number;
  edge: number;
  scale?: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
}

function fix(pos: TPos, deltaX = 0, deltaY = 0): TPos {
  return [pos[0] + deltaX + 1, pos[1] + deltaY + 1];
}

function fixWithScale(
  fn: (edge: number, width: number) => TPos,
  edge: number,
  width: number,
  scale: number
) {
  return fix(
    fn(edge * scale, width * scale),
    (width * (1 - scale)) / 2,
    (2 * edge * (1 - scale)) / 2
  );
}

function dragHexagon({
  edge,
  width,
  scale = 1,
  stroke = 'black',
  strokeWidth = 2,
  fill = 'transparent'
}: TDragHexagon) {
  const [p1, ...restP] = [
    calcPointX1,
    calcPointX2,
    calcPointX3,
    calcPointX4,
    calcPointX5,
    calcPointX6
  ].map((fn) => fixWithScale(fn, edge, width, scale));

  return html`<path
    d="M ${p1.join(' ')} ${restP.map((pos) => `L ${pos[0]} ${pos[1]}`).join(' ')} Z"
    fill="${fill}"
    stroke="${stroke}"
    stroke-width="${strokeWidth}"
  />`;
}

function dragStatsEdge(stats: number[], edge: number, width: number) {
  let ratio = 1;
  const max = Math.max(...stats);

  if (max < 60) {
    ratio = 0.3;
  } else if (max < 120) {
    ratio = 0.7;
  }

  const [p1, ...restP] = (
    [
      [calcPointX1, stats[0]],
      [calcPointX2, stats[2]],
      [calcPointX3, stats[4]],
      [calcPointX4, stats[5]],
      [calcPointX5, stats[3]],
      [calcPointX6, stats[1]]
    ] as const
  ).map(([fn, value]) => fixWithScale(fn, edge, width, (value / max) * ratio));

  return html`<path
    d="M ${p1.join(' ')} ${restP.map((pos) => `L ${pos[0]} ${pos[1]}`).join(' ')} Z"
    fill="rgba(255, 166, 21, 0.2)"
    stroke="#ffa615"
    stroke-width="2"
  />`;
}

function calcPointX1(edge: number, width: number): TPos {
  return [0.5 * width, 0];
}

function calcPointX2(edge: number, width: number): TPos {
  return [width, 0.5 * edge];
}

function calcPointX3(edge: number, width: number): TPos {
  return [width, 1.5 * edge];
}

function calcPointX4(edge: number, width: number): TPos {
  return [0.5 * width, 2 * edge];
}

function calcPointX5(edge: number): TPos {
  return [0, 1.5 * edge];
}

function calcPointX6(edge: number): TPos {
  return [0, 0.5 * edge];
}
