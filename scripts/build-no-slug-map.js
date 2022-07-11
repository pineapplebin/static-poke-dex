import nodeFs from 'fs';
import nodePath from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

import POKEMON_LIST from 'pokesprite-images/data/pokemon.json' assert { type: 'json' };

const WRITE_ROOT = nodePath.join(nodePath.dirname(__dirname), 'src', 'components', 'PokeIcon');

function main() {
  const mapping = Object.keys(POKEMON_LIST).reduce((acc, key) => {
    acc[key] = POKEMON_LIST[key].slug.eng;
    return acc;
  }, {});
  nodeFs.writeFileSync(nodePath.join(WRITE_ROOT, 'mapping.json'), JSON.stringify(mapping, null, 2));
}

main();
