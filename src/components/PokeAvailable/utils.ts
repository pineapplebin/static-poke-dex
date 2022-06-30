const CONST_CHECK = ['—', 'T', 'PW', 'DR', 'DW', 'ET', 'Ev'];

const REG_CHECK = CONST_CHECK.slice(2).map((str) => new RegExp(`^${str}`));

export function checkIsSolid(available: string): boolean {
  if (CONST_CHECK.includes(available)) {
    return false;
  }
  return !(REG_CHECK.some((reg) => reg.test(available)) || /T$/.test(available));
}
