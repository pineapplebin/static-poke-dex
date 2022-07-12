export const BOX_LIST = [
  { title: 'Kanto 1', rule: '1-40' },
  { title: 'Kanto 2', rule: '41-80' },
  { title: 'Kanto 3', rule: '81-120' },
  { title: 'Kanto 4', rule: '121-151' },
  {
    title: 'Cap Pikachu',
    rule: ['original', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'partner', 'world']
      .map((s) => `25|${s}-cap`)
      .join(',')
  },
  { title: 'Johto 1', rule: '152-191' },
  { title: 'Johto 2', rule: '192-231' },
  { title: 'Johto 3', rule: '232-251' },
  {
    title: 'Unown',
    rule: [
      ...new Array(26).fill(0).map((_, i) => `201|${String.fromCharCode(97 + i)}`),
      '201|exclamation',
      '201|question'
    ].join(',')
  },
  { title: 'Hoenn 1', rule: '252-291' },
  { title: 'Hoenn 2', rule: '292-331' },
  { title: 'Hoenn 3', rule: '332-371' },
  { title: 'Hoenn 4', rule: '372-386' },
  { title: 'Hoenn Alternate', rule: '386|attack,386|defense,386|speed' },
  { title: 'Sinnoh 1', rule: '387-426' },
  { title: 'Sinnoh 2', rule: '427-466' },
  { title: 'Sinnoh 3', rule: '467-493' },
  {
    title: 'Sinnoh Alternate',
    rule: '412|sandy,412|trash,413|sandy,413|trash,422|east,423|east,479|heat,479|wash,479|frost,479|fan,479|mow,492|sky'
  },
  {
    title: 'Gigantamax 1',
    rule: '3|gmax,6|gmax,9|gmax,12|gmax,25|gmax'
  }
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
