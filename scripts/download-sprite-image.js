import nodePath from 'path';
import downloader from 'image-downloader';
import { fileURLToPath } from 'url';
import POKEMON_LIST from 'pokesprite-images/data/pokemon.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

function getWritePath(slug) {
  return nodePath.join(nodePath.dirname(__dirname), 'static', 'sprites', `${slug}.png`);
}

let count = 0;
const ERROR_LIST = [];

// https://img.pokemondb.net/sprites/home/normal/pikachu-alola-cap.png
async function downloadImage(slug, filename, no) {
  try {
    await downloader.image({
      url: `https://img.pokemondb.net/sprites/home/normal/${slug}.png`,
      dest: filename
    });
    count++;
    console.log(`[OK][${slug}][${no}] download done`);
  } catch (e) {
    console.log(`[ERROR][${slug}][${no}] download failed`);
    ERROR_LIST.push(`${slug}|${no}`);
  }
}

function transForms(forms, slug, no) {
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

      if (no === '025' && f === 'partner-cap') {
        // 皮卡丘 partner-cap
        _f = 'johto-cap';
      } else if (no === '201') {
        // 未知图腾
        if (f === 'question') {
          _f = 'qm';
        } else if (f === 'exclamation') {
          _f = 'em';
        }
      } else if (no === '555') {
        // 达摩狒狒
        if (f === 'galar') {
          _f = 'galarian-standard';
        } else if (f === 'galar-zen') {
          _f = 'galarian-zen';
        }
      } else if (no === '658' && f === 'battle-bond') {
        // 甲贺忍蛙
        _f = 'ash';
      } else if (no === '716') {
        // 哲尔尼亚斯
        if (f === '$') {
          _f = 'active';
        } else if (f === 'neutral') {
          _f = '$';
        }
      } else if (no === '774') {
        // 小陨星
        if (f !== '$') {
          _f = `${f}-core`;
        }
      } else if (no === '778' && f === 'disguised') {
        // 迷拟Q
        _f = '$';
      } else if (no === '800') {
        // 奈克洛兹玛
        if (f === 'dawn') {
          _f = 'dawn-wings';
        } else if (f === 'dusk') {
          _f = 'dusk-mane';
        }
      } else if (no === '849' && f === 'low-key-gmax') {
        // 颤弦蝾螈
        _f = 'gigantamax';
      } else if (no === '869' && /plain$/.test(f)) {
        // 霜奶仙
        _f = f.replace('plain', 'flower');
      } else if (no === '892') {
        // 武道熊师
        if (f === 'gmax' || f === 'single-strike-gmax') {
          _f = 'single-strike-gigantamax';
        } else if (f === 'rapid-strike-gmax') {
          _f = 'rapid-strike-gigantamax';
        }
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
    });
}

function fetchPoke(no) {
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

main();
