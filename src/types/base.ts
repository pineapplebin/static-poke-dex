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

export interface TCheckPokemon {
  no: string | number;
  form?: string;
}

export interface TStaticAvailable {
  generation: string;
  games: string[];
  available: string[];
}

export interface TStaticPokemon {
  no: string;
  idx: number;
  name: {
    jpn: string;
    chs: string;
  };
  form: string;
  slug: string;
  available: TStaticAvailable[];
}
