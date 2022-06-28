export interface TTableHead {
  name: string;
  span: number;
  start: number;
  end: number;
}

export type TGenData = string[]

export interface TTableRowData {
  no: number;
  name: string;
  data: TGenData[];
}
