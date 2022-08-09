export type TBox = {
  title: string;
  rule: string;
};

const DELTA = 30;

export const BOX_LIST = [
  ...splitBoxByNo('Kanto', 1, 151),
  ...splitBoxByRule(
    'Cap Pikachu',
    ['original', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'partner', 'world']
      .map((s) => `25|${s}-cap`)
      .join(',')
  ),
  ...splitBoxByNo('Johto', 152, 251),
  ...splitBoxByRule(
    'Unown',
    [
      ...new Array(26).fill(0).map((_, i) => `201|${String.fromCharCode(97 + i)}`),
      '201|exclamation',
      '201|question'
    ].join(',')
  ),
  ...splitBoxByNo('Hoenn', 252, 386),
  { title: 'Hoenn Alternate', rule: '386|attack,386|defense,386|speed' },
  ...splitBoxByNo('Sinnoh', 387, 493),
  {
    title: 'Sinnoh Alternate',
    rule: '412|sandy,412|trash,413|sandy,413|trash,422|east,423|east,479|heat,479|wash,479|frost,479|fan,479|mow,492|sky'
  },
  ...splitBoxByNo('Unova', 494, 649),
  {
    title: 'Unova Alternate',
    rule:
      '521|female,550|blue-striped,585|summer,585|autumn,' +
      '585|winter,586|summer,586|autumn,586|winter,592|female,' +
      '593|female,641|therian,642|therian,645|therian,647|resolute'
  },
  ...splitBoxByNo('Kalos', 650, 721),
  ...splitBoxByRule(
    'Kalos Alternate',
    '658|ash,668|female,' +
      [669, 670, 671]
        .map((no) => ['yellow', 'orange', 'blue', 'white'].map((f) => `${no}|${f}`).join(','))
        .join(',') +
      ',' +
      ['heart', 'star', 'diamond', 'debutante', 'matron', 'dandy', 'la-reine', 'kabuki', 'pharaoh']
        .map((f) => `676|${f}`)
        .join(',') +
      ',678|female,' +
      [710, 711]
        .map((no) => ['small', 'large', 'super'].map((f) => `${no}|${f}`).join(','))
        .join(',') +
      ',718|50|power-construct,718|10,718|10|power-construct,720|unbound'
  ),
  {
    title: 'Vivillon Forms',
    rule: [
      'icy-snow',
      'polar',
      'tundra',
      'continental',
      'garden',
      'elegant',
      'meadow',
      'modern',
      'marine',
      'archipelago',
      'high-plains',
      'sandstorm',
      'river',
      'monsoon',
      'savanna',
      'sun',
      'ocean',
      'jungle',
      'fancy',
      'poke-ball'
    ]
      .map((f) => `666|${f}`)
      .join(',')
  },
  ...splitBoxByNo('Alola', 722, 807),
  ...splitBoxByRule(
    'Alola Alternate',
    '741|pom-pom,741|pau,741|sensu,744|own-tempo,745|midnight,745|dusk,' +
      ['orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].map((f) => `774|${f}`).join(',') +
      ',801|original'
  ),
  ...splitBoxByRule(
    'Alola Forms',
    [19, 20, 26, 27, 28, 37, 38, 50, 51, 52, 53, 74, 75, 76, 88, 89, 103, 105]
      .map((no) => `${no}|alola`)
      .join(',')
  ),
  {
    title: 'Pokemon GO',
    rule: '808-809'
  },
  ...splitBoxByNo('Galar', 810, 898),
  { title: 'Galar Alternate', rule: '849|low-key,854,855,876|female,892,893|dada' },
  {
    title: 'Galar Forms',
    rule: [52, 77, 78, 79, 80, 83, 110, 122, 144, 145, 146, 199, 222, 263, 264, 554, 555, 562, 618]
      .map((no) => `${no}|galar`)
      .join(',')
  },
  ...splitBoxByRule(
    'Galar Gigantamax',
    [
      3, 6, 9, 12, 25, 52, 68, 94, 99, 131, 143, 569, 809, 812, 815, 818, 823, 826, 834, 839, 841,
      842, 844, 849
    ]
      .map((no) => `${no}|gmax`)
      .concat(['849|low-key-gmax'])
      .concat([851, 858, 861, 869, 879, 884].map((no) => `${no}|gmax`))
      .concat(['892|single-strike-gmax', '892|rapid-strike-gmax'])
      .join(',')
  ),
  {
    title: 'Hisui 1',
    rule: '899-905,905|therian'
  },
  {
    title: 'Hisui Forms',
    rule: [58, 59, 100, 101, 157, 211, 215, 503, 549]
      .map((no) => `${no}|hisui`)
      .concat(['550|white-striped'])
      .concat([570, 571, 628, 705, 706, 713, 724].map((no) => `${no}|hisui`))
      .join(',')
  }
];

export function splitBoxByNo(title: string, start: number, end: number) {
  const result: TBox[] = [];

  let count = 1;
  let current = start;
  while (current <= end) {
    result.push({
      title: `${title} ${count}`,
      rule: `${current}-${Math.min(end, current + DELTA - 1)}`
    });
    count++;
    current += DELTA;
  }

  return result;
}

export function splitBoxByRule(title: string, rule: string) {
  const result: TBox[] = [];

  const list = rule.split(',');
  let count = 1;
  let current = 0;
  while (current <= list.length) {
    result.push({
      title: `${title} ${count}`,
      rule: list.slice(current, current + DELTA).join(',')
    });
    count++;
    current += DELTA;
  }

  return result;
}

export function switchBox(idx: number, delta: number, pageSize: number) {
  const length = Math.round(BOX_LIST.length / pageSize);
  let targetIndex = idx;

  targetIndex += delta;

  if (targetIndex >= length) {
    targetIndex = 0;
  }
  if (targetIndex < 0) {
    targetIndex = length - 1;
  }

  return targetIndex;
}
