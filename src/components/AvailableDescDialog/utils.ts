const NORMAL_LIST = [
  'C',
  'S',
  'D',
  'R',
  'E',
  'CD',
  'DA',
  'CC',
  'FS',
  'EV',
  'PW',
  'DR',
  'DW',
  'ET',
  'Ev',
  'T'
];

const PREFIX_LIST = ['CC'];

const SUFFIX_LIST = ['E', 'B', 'D', 'T'];

function explainType(char: string, pos: ExplainItem['pos']) {
  if (char === 'CC') {
    return '该宝可梦可以在游戏中获得，但是需要与其他游戏进行一些通信才能获得';
  }
  if (char === 'C') {
    return '该宝可梦可以在游戏中捕获';
  }
  return '';
}

const REG = new RegExp(
  `^(${PREFIX_LIST.join('|')})?(${NORMAL_LIST.join('|')})(${SUFFIX_LIST.join('|')})?$`
);
console.log(REG);

export interface ExplainItem {
  pos: 'prefix' | 'normal' | 'suffix';
  char: string;
  desc: string;
}

export function explainAvailable(available: string): ExplainItem[] {
  if (available === '—') {
    return [{ pos: 'normal', char: available, desc: '该宝可梦在游戏中不可获得' }];
  }

  const matched = available.match(REG);
  if (!matched) {
    return [];
  }
  const [, prefix, normal, suffix] = matched;

  return (
    [
      { char: prefix, pos: 'prefix' },
      { char: normal, pos: 'normal' },
      { char: suffix, pos: 'suffix' }
    ] as const
  )
    .filter((item) => item.char)
    .map((item) => ({
      ...item,
      desc: explainType(item.char, item.pos)
    }));
}
