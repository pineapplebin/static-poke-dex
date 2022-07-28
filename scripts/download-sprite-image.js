import nodePath from 'path';
import downloader from 'image-downloader';
import { fileURLToPath } from 'url';
import { fileUpload } from './tiny-png.mjs';
import POKEMON_LIST from 'pokesprite-images/data/pokemon.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

function getWritePath(slug) {
  return nodePath.join(nodePath.dirname(__dirname), 'static', 'sprites', `${slug}.png`);
}

let count = 0;
const ERROR_LIST = [];

/**
 * https://img.pokemondb.net/sprites/home/normal/pikachu-alola-cap.png
 *
 * @param {string} slug
 * @param {string} filename
 * @param {string} no
 * @returns {Promise<string | null>}
 */
async function downloadImage(slug, filename, no) {
  try {
    await downloader.image({
      url: `https://img.pokemondb.net/sprites/home/normal/${slug}.png`,
      dest: filename
    });
    count++;
    console.log(`[OK][${slug}][${no}] download done`);
    return filename;
  } catch (e) {
    console.log(`[ERROR][${slug}][${no}] download failed`);
    ERROR_LIST.push(`${slug}|${no}`);
  }
  return null;
}

const TRANS_MAP = {
  '025': ({ f }) => {
    // 皮卡丘 partner-cap
    if (f === 'partner-cap') {
      return 'johto-cap';
    }
  },
  201: ({ f }) => {
    // 未知图腾
    if (f === 'question') {
      return 'qm';
    } else if (f === 'exclamation') {
      return 'em';
    }
  },
  521: ({ f, slug, no }, extra) => {
    // 高傲雉鸡
    if (f === '$') {
      extra.push({ slug: `${slug}-f`, filename: getWritePath(`${no}-female`) });
    }
  },
  555: ({ f }) => {
    // 达摩狒狒
    if (f === 'galar') {
      return 'galarian-standard';
    } else if (f === 'galar-zen') {
      return 'galarian-zen';
    }
  },
  592: ({ f, slug, no }, extra) => {
    // 轻飘飘
    if (f === '$') {
      extra.push({ slug: `${slug}-f`, filename: getWritePath(`${no}-female`) });
    }
  },
  593: ({ f, slug, no }, extra) => {
    // 胖嘟嘟
    if (f === '$') {
      extra.push({ slug: `${slug}-f`, filename: getWritePath(`${no}-female`) });
    }
  },
  658: ({ f }) => {
    // 甲贺忍蛙
    if (f === 'battle-bond') {
      return 'ash';
    }
  },
  668: ({ f, slug, no }, extra) => {
    // 火炎狮
    if (f === '$') {
      extra.push({ slug: `${slug}-f`, filename: getWritePath(`${no}-female`) });
    }
  },
  678: ({ f, slug, no }, extra) => {
    // 超能妙喵
    if (f === '$') {
      extra.push({ slug: `${slug}-female`, filename: getWritePath(`${no}-female`) });
    }
  },
  716: ({ f }) => {
    // 哲尔尼亚斯
    if (f === '$') {
      return 'active';
    } else if (f === 'neutral') {
      return '$';
    }
  },
  718: ({ f, slug, no }, extra) => {
    // 基格尔德
    if (f === '10' || f === '50') {
      extra.push({ slug: `${slug}-${f}`, filename: getWritePath(`${no}-${f}-power-construct`) });
    }
  },
  774: ({ f }) => {
    // 小陨星
    if (f !== '$') {
      return `${f}-core`;
    }
  },
  778: ({ f }) => {
    // 迷拟Q
    if (f === 'disguised') {
      return '$';
    }
  },
  800: ({ f }) => {
    // 奈克洛兹玛
    if (f === 'dawn') {
      return 'dawn-wings';
    } else if (f === 'dusk') {
      return 'dusk-mane';
    }
  },
  842: ({ f, slug, no }, extra) => {
    // 丰蜜龙
    if (f === '$') {
      extra.push({ slug: `${slug}-gigantamax`, filename: getWritePath(`${no}-gmax`) });
    }
  },
  849: ({ f }) => {
    // 颤弦蝾螈
    if (f === 'low-key-gmax') {
      return 'gigantamax';
    }
  },
  869: ({ f }) => {
    // 霜奶仙
    if (/plain$/.test(f)) {
      return f.replace('plain', 'flower');
    }
  },
  876: ({ f, slug, no }, extra) => {
    // 爱管侍
    if (f === '$') {
      extra.push({ slug: `${slug}-female`, filename: getWritePath(`${no}-female`) });
    }
  },
  892: ({ f, slug, no }) => {
    // 武道熊师
    if (f === '$') {
      extra.push({
        slug: `${slug}-rapid-strike`,
        filename: getWritePath(`${no}-rapid-strike`)
      });
    } else if (f === 'gmax' || f === 'single-strike-gmax') {
      return 'single-strike-gigantamax';
    } else if (f === 'rapid-strike-gmax') {
      return 'rapid-strike-gigantamax';
    }
  },
  902: ({ f, slug, no }, extra) => {
    // 幽尾玄鱼
    if (f === '$') {
      extra.push({ slug: `${slug}-female`, filename: getWritePath(`${no}-female`) });
    }
  }
};

function transForms(forms, slug, no) {
  const extra = [];

  return forms
    .filter(
      (f) =>
        ![
          /^totem/.test(f),
          /noble$/.test(f),
          /gen7$/.test(f),
          no === '664' && f !== '$',
          no === '665' && f !== '$',
          no === '774' && /\-meteor$/.test(f)
        ].some((f) => f)
    )
    .map((f) => {
      let _f = f;

      if (no in TRANS_MAP && typeof TRANS_MAP[no] === 'function') {
        _f = TRANS_MAP[no]({ no, slug, f }, extra) ?? f;
      } else if (f === 'hero-of-many-battles') {
        // 苍响 & 藏玛然特 百战英雄
        _f = '$';
      } else if (f === 'gmax') {
        // 极巨化
        _f = 'gigantamax';
      } else if (f === 'alola') {
        // 阿罗拉
        _f = 'alolan';
      } else if (f === 'galar') {
        // 伽勒尔
        _f = 'galarian';
      } else if (f === 'hisui') {
        // 洗翠
        _f = 'hisuian';
      }

      return {
        slug: _f === '$' ? slug : `${slug}-${_f}`,
        filename: getWritePath(f === '$' ? no : `${no}-${f}`)
      };
    })
    .concat(extra);
}

/**
 *
 * @param {string} no
 * @returns {Promise<string | null>[]}
 */
async function fetchPoke(no) {
  const item = POKEMON_LIST[no];
  const slug = item.slug.eng;
  const forms = transForms(Object.keys(item['gen-8'].forms), slug, no);

  return Promise.all(forms.map(({ slug, filename }) => downloadImage(slug, filename, no)));
}

async function main() {
  const keys = Object.keys(POKEMON_LIST).sort();
  const BATCH = 100;
  let index = 0;

  while (index < keys.length) {
    await Promise.all(keys.slice(index, index + BATCH).map((no) => fetchPoke(no))).finally(() => {
      console.log(`\n[DONE] total count: ${count}\n[END] error list: ${ERROR_LIST.join(', ')}`);
    });
    index += BATCH;
  }

  process.exit();
}

async function downloadSpecific(no) {
  const res = await fetchPoke(no);
  console.log(`\n[DONE] total count: ${count}\n[END] error list: ${ERROR_LIST.join(', ')}`);
  console.log('\nstart compress image');
  await Promise.all(
    res
      .filter((file) => !!file)
      .map((file) => {
        console.log(`[COMPRESS] start ${file}`);
        return fileUpload(file);
      })
  );
}

// main();
downloadSpecific('718');
