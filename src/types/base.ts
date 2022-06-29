export interface TPokemonInfo {
  idx: string;
  name: {
    eng: string;
    chs: string;
    jpn: string;
  };
  slug: {
    eng: string;
  };
  'gen-8': {
    forms: {
      $: any;
      [p: string]: any;
    };
  };
}
