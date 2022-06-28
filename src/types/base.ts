export interface TPokemonInfo {
  idx: string;
  name: {
    chs: string
    jpn: string
  };
  slug: {
    eng: string
  };
  'gen-8': {
    forms: {
      $: any
      [p: string]: any
    }
  };
}
