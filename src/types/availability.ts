export interface TTableHead {
  name: string;
  span: number;
  start: number;
  end: number;
  games: string[];
}

export type TGenData = string[];

export interface TTableRowData {
  no: string;
  name: string;
  data: TGenData[];
}
