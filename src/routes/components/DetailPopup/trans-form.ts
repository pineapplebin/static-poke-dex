import type { TStaticPokemon } from '@/types/base';
import type { PokemonSpeciesVariety } from 'pokenode-ts';
import type { TFormData } from './fetch';

const HARD_MAPPING: Record<
  string,
  (varieties: TFormData[], staticInfo: TStaticPokemon) => TFormData[]
> = {};

export function transForm(
  no: string,
  staticInfo: TStaticPokemon,
  varieties: PokemonSpeciesVariety[]
): TFormData[] {
  const regexp = new RegExp(`^${staticInfo.slug}\\-?`);

  const _varieties = varieties
    .filter((item) => !/-totem$/.test(item.pokemon.name))
    .map((item) => {
      const form = item.pokemon.name.replace(regexp, '');
      return {
        form: item.is_default ? '$' : form || '$',
        url: item.pokemon.url
      };
    });

  if (no in HARD_MAPPING && typeof HARD_MAPPING[no] === 'function') {
    return HARD_MAPPING[no](_varieties, staticInfo);
  }

  return _varieties;
}

// 201 未知图腾
HARD_MAPPING['201'] = (varieties) => {
  const url = varieties[0].url;
  return varieties.concat(
    new Array(25).fill(null).map((_, idx) => ({ form: String.fromCharCode(98 + idx), url })),
    [
      { form: 'exclamation', url },
      { form: 'question', url }
    ]
  );
};

// 412 结草儿
HARD_MAPPING['412'] = (varieties) =>
  varieties.concat([
    { form: 'sandy', url: varieties[0].url },
    { form: 'trash', url: varieties[0].url }
  ]);

// 421 樱花儿
HARD_MAPPING['421'] = (varieties) =>
  varieties.concat([{ form: 'sunshine', url: varieties[0].url }]);

// 422 无壳海兔
// 423 海兔兽
HARD_MAPPING['422'] = HARD_MAPPING['423'] = (varieties) =>
  varieties.concat([{ form: 'east', url: varieties[0].url }]);

// 521 高傲雉鸡
HARD_MAPPING['521'] = (varieties) => varieties.concat([{ form: 'female', url: varieties[0].url }]);

// 555 达摩狒狒
HARD_MAPPING['555'] = (varieties) =>
  varieties.map((item) => {
    if (item.form === 'galar-standard') {
      item.form = 'galar';
    }
    return item;
  });

// 585 四季鹿
// 586 萌芽鹿
HARD_MAPPING['585'] = HARD_MAPPING['586'] = (varieties) =>
  varieties.concat(['summer', 'autumn', 'winter'].map((form) => ({ form, url: varieties[0].url })));

// 592 轻飘飘
// 593 胖嘟嘟
HARD_MAPPING['592'] = HARD_MAPPING['593'] = (varieties) =>
  varieties.concat([{ form: 'female', url: varieties[0].url }]);

HARD_MAPPING['666'] = (varieties) =>
  varieties.concat(
    [
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
    ].map((f) => ({ form: f, url: varieties[0].url }))
  );

// 668 火炎狮
HARD_MAPPING['668'] = (varieties) => varieties.concat([{ form: 'female', url: varieties[0].url }]);

// 669 花蓓蓓
// 670 花叶蒂
// 671 花洁夫人
HARD_MAPPING['669'] =
  HARD_MAPPING['670'] =
  HARD_MAPPING['671'] =
    (varieties) =>
      varieties.concat(
        ['yellow', 'orange', 'blue', 'white'].map((f) => ({ form: f, url: varieties[0].url }))
      );

// 676 多丽米亚
HARD_MAPPING['676'] = (varieties) =>
  varieties.concat(
    [
      'heart',
      'star',
      'diamond',
      'debutante',
      'matron',
      'dandy',
      'la-reine',
      'kabuki',
      'pharaoh'
    ].map((s) => ({ form: s, url: varieties[0].url }))
  );

// 718 基格尔德
HARD_MAPPING['718'] = (varieties) =>
  varieties.map((item) => {
    if (/power\-construct$/.test(item.form)) {
      return { ...item, icon: item.form.replace('-power-construct', '') };
    }
    return item;
  });

// 849 颤弦蝾螈
HARD_MAPPING['849'] = (varieties) =>
  varieties.map((item) => {
    if (item.form === 'amped-gmax') {
      item.form = 'gmax';
    }
    return item;
  });

// 898 蕾冠王
HARD_MAPPING['898'] = (varieties) =>
  varieties.map((item) => {
    if (item.form !== '$') {
      item.form += '-rider';
    }
    return item;
  });
