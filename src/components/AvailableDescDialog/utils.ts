const NORMAL_LIST = [
  'CD',
  'DA',
  'CC',
  'FS',
  'EV',
  'PW',
  'DR',
  'DW',
  'ET',
  'C',
  'S',
  'D',
  'R',
  'B',
  'E',
  'Ev',
  'T'
];

const PREFIX_LIST = ['CC'];

const SUFFIX_LIST = ['ET', 'E', 'B', 'D', 'T'];

function explainType(char: string, pos: ExplainItem['pos']) {
  if (char === 'C') {
    return '该宝可梦可以在游戏中捕获';
  }
  if (char === 'S') {
    return '该宝可梦仅在特定非固定时候能获取（例如大量出现、自豪的后院、大湿地等）；在 S/M/US/UM 中则表示可以通过岛屿扫描捕获';
  }
  if (char === 'D' && pos === 'normal') {
    return '在 SW/SH 中该宝可梦可以前往宝可梦巢穴进行极巨团体战中捕获；在 D/P/Pt 中该宝可梦可以通过双插槽模式联动后出现捕获';
  }
  if (char === 'R') {
    return '该宝可梦可以在游戏中从NPC中获取（例如初始宝可梦、复活化石、游戏内交换或者赠送等）';
  }
  if (char === 'E') {
    if (pos === 'suffix') {
      return '该宝可梦需要通过上述方式获得进化前阶段的宝可梦后，从而进化得到';
    } else {
      return '该宝可梦无法直接在游戏中捕获，但是可以获得进化前阶段的宝可梦，从而进化得到';
    }
  }
  if (char === 'B') {
    if (pos === 'suffix') {
      return '该宝可梦无法直接在游戏中捕获，但是可以通过上述方式获得进化后阶段的宝可梦，从而孵蛋培育获得该宝可梦';
    } else {
      return '该宝可梦无法直接在游戏中捕获，但是可以获得进化后阶段的宝可梦，从而孵蛋培育获得该宝可梦。这也包含了进化孵蛋出来的宝可梦';
    }
  }
  if (char === 'CD') {
    return '该宝可梦可以在游戏中捕获，但只能通过付费DLC中获得';
  }
  if (char === 'D' && pos === 'suffix') {
    return '该宝可梦仅在拥有付费DLC后，通过上述方式获得';
  }
  if (char === 'DA') {
    return '在 SW/SH 中该宝可梦只能在冠之雪原DLC内前往宝可梦巢穴极巨大冒险中的极巨团体战中捕获';
  }
  if (char === 'CC') {
    if (pos === 'prefix') {
      return '该宝可梦需要与其他游戏进行一些通信后，才能通过下述方式获得';
    } else {
      return '该宝可梦可以在游戏中获得，但是需要与其他游戏进行一些通信才能获得';
    }
  }
  if (char === 'FS') {
    return '在 X/Y 中该宝可梦只能通过朋友狩猎捕获';
  }
  if (char === 'EV') {
    return '该宝可梦可以在游戏中捕获，但只能通过使用活动配送的道具来获得（例如无限船票）';
  }
  if (char === 'PW') {
    return '该宝可梦可以在宝可梦计步器中获得，然后可以传送到 HG/SS 中';
  }
  if (char === 'DR') {
    return '该宝可梦可以在宝可梦AR搜寻器中获得，然后可以传送到 B2/W2 中';
  }
  if (char === 'DW') {
    return '该宝可梦可以在宝可梦梦境世界中获得，然后可以在服务关闭前传送到 B/W/B2/W2 中';
  }
  if (char === 'ET') {
    if (pos === 'suffix') {
      return '该宝可梦需要通过上述方式获得进化前阶段的宝可梦，然后通过连接交换后进化获得';
    } else {
      return '该宝可梦无法直接在游戏中捕获，但是可以获得进化前阶段的宝可梦，然后通过连接交换后进化获得';
    }
  }
  if (char === 'T' && pos === 'suffix') {
    return '该宝可梦需要通过上述方式获得进化前阶段的宝可梦，然后通过连接交换后进化获得';
  }
  if (char === 'Ev') {
    return '该宝可梦只能通过现实生活、宝可梦全球连接、宝可梦Home的各种推广活动以及各游戏相关的限定派送获得';
  }
  if (char === 'T' && pos === 'normal') {
    return '该宝可梦只能通过与其他游戏连接交换或者上一世代转移来获得';
  }
  return '';
}

const REG = new RegExp(
  `^(${PREFIX_LIST.join('|')})?(${NORMAL_LIST.join('|')})(${SUFFIX_LIST.join('|')})?$`
);

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
