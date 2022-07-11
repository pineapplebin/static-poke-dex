import nodeFs from 'fs';
import nodePath from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

import POKEMON_LIST from 'pokesprite-images/data/pokemon.json' assert { type: 'json' };
import LIST from '../src/data/gen-8.json' assert { type: 'json' };

const WRITE_ROOT = nodePath.join(nodePath.dirname(__dirname), 'src', 'data', 'static-json');

function writeStaticJsonFile(data) {
  const content = JSON.stringify(data, null, 2);
  const filename = nodePath.join(WRITE_ROOT, `${data.no}${data.form ? `-${data.form}` : ''}.json`);

  nodeFs.writeFileSync(filename, content, { encoding: 'utf-8' });
  console.log(`write file: ${filename} done`);
}

function constructStaticJsonData(item, head) {
  const info = POKEMON_LIST[item.no];

  const data = {
    no: item.no,
    idx: +item.no,
    name: {
      jpn: info.name.jpn,
      chs: info.name.chs
    },
    form: item.form || '',
    slug: info.slug.eng,
    available: head.map((h, idx) => {
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
  };
  data.available = data.available.filter((item) => item !== null);

  return data;
}

function main(list) {
  const head = list.head;
  const body = list.body;

  body.forEach((item) => {
    const data = constructStaticJsonData(item, head);
    writeStaticJsonFile(data);
  });
}

main(LIST);
