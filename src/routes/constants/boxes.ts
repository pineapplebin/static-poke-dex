export const BOX_LIST = [
  { title: '关东 1', rule: '1-40' },
  { title: '关东 2', rule: '41-80' },
  { title: '关东 3', rule: '81-120' },
  { title: '关东 4', rule: '121-151' }
];

export function switchBox(idx: number, delta: number) {
  let targetIndex = idx;

  targetIndex += delta;

  if (targetIndex >= BOX_LIST.length) {
    targetIndex = 0;
  }
  if (targetIndex < 0) {
    targetIndex = BOX_LIST.length - 1;
  }

  return targetIndex;
}
