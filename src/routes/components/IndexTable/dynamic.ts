import type { TTableHead, TTableRowData } from '@/types/availability';
import { romanToInt } from '@/utils/functional';

interface TAvailableData {
  head: TTableHead[];
  body: TTableRowData[];
}

export async function dynamicImportData(generation: string): Promise<TAvailableData[]> {
  const name = `gen-${romanToInt(generation)}`;
  let promise;

  // gen 7 数据有两份
  if (generation === 'VII') {
    promise = [import(`../../../data/${name}.json`), import(`../../../data/${name}-2.json`)];
  } else {
    promise = [import(`../../../data/${name}.json`)];
  }

  return await Promise.all(promise);
}
