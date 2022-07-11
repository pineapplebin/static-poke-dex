import { Types } from 'pokenode-ts';

export type TTypeInfo = {
  className: string;
  chs: string;
};

export const TYPES_MAP = {
  [Types.BUG]: { className: 'bug', chs: '虫' },
  [Types.DARK]: { className: 'dark', chs: '恶' },
  [Types.DRAGON]: { className: 'dragon', chs: '龙' },
  [Types.ELECTRIC]: { className: 'electric', chs: '电' },
  [Types.FAIRY]: { className: 'fairy', chs: '妖精' },
  [Types.FIGHTING]: { className: 'fighting', chs: '格斗' },
  [Types.FIRE]: { className: 'fire', chs: '火' },
  [Types.FLYING]: { className: 'flying', chs: '飞行' },
  [Types.GHOST]: { className: 'ghost', chs: '幽灵' },
  [Types.GRASS]: { className: 'grass', chs: '草' },
  [Types.GROUND]: { className: 'ground', chs: '地面' },
  [Types.ICE]: { className: 'ice', chs: '冰' },
  [Types.NORMAL]: { className: 'normal', chs: '一般' },
  [Types.POISON]: { className: 'poison', chs: '毒' },
  [Types.PSYCHIC]: { className: 'psychic', chs: '超能' },
  [Types.ROCK]: { className: 'rock', chs: '岩石' },
  [Types.STEEL]: { className: 'steel', chs: '钢' },
  [Types.WATER]: { className: 'water', chs: '水' }
} as const;

export const TYPES_NAME = Object.values(TYPES_MAP).reduce((acc, item) => {
  acc[item.className] = item.chs;
  return acc;
}, {} as Record<TGetTypeName<typeof TYPES_MAP>, string>);

export type TGetTypeName<R> = R extends Record<string, { className: infer S }> ? S : never;

export type TTypeNames = TGetTypeName<typeof TYPES_MAP>
