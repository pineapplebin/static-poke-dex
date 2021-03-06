import nodeFs from 'fs';
import nodePath from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

import POKEMON_LIST from 'pokesprite-images/data/pokemon.json' assert { type: 'json' };

const WRITE_ROOT = nodePath.join(nodePath.dirname(__dirname), 'src', 'data', 'static-json');

function writeStaticJsonFile(data) {
  const content = JSON.stringify(data, null, 2);
  const filename = nodePath.join(WRITE_ROOT, `${data.no}.json`);

  nodeFs.writeFileSync(filename, content, { encoding: 'utf-8' });
  console.log(`write file: ${filename} done`);
}

function buildAvailable(item, head) {
  return head
    .map((h, idx) => {
      if (item.data[idx].some((c) => c !== '—')) {
        const games = [];
        const ava = item.data[idx].filter((c, idx) => {
          if (c !== '—') {
            games.push(h.games[idx]);
            return true;
          }
          return false;
        });

        return {
          generation: h.name,
          games: games,
          available: ava
        };
      }
      return null;
    })
    .filter((item) => item !== null);
}

function constructStaticJsonData(item, head, next) {
  const info = POKEMON_LIST[item.no];

  const data = {
    no: item.no,
    idx: +item.no,
    name: {
      jpn: info.name.jpn,
      chs: info.name.chs
    },
    slug: info.slug.eng,
    available: buildAvailable(item, head),
    forms: Object.keys(info['gen-8'].forms).filter((f) => f !== '$')
  };

  if (next && next.no === item.no) {
    data.formsAvailable = {
      [next.form]: buildAvailable(next, head)
    };
  }

  return data;
}

function main(list) {
  const head = list.head;
  const body = list.body;

  let skipNext = false;
  body.forEach((item, idx) => {
    if (skipNext) {
      skipNext = false;
      return;
    }
    const next = body[idx + 1];
    const data = constructStaticJsonData(item, head, next);
    if (data.formsAvailable) {
      skipNext = true;
    }
    writeStaticJsonFile(data);
  });
}

for (const name of ['1', '2', '3', '4', '5', '6', '7', '7-2', '8']) {
  const { default: list } = await import(`../src/data/gen-${name}.json`, {
    assert: { type: 'json' }
  });
  main(list);
}
