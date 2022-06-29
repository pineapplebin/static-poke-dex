const CONST_CHECK = ['—', 'T'];

const REG_CHECK = ['Ev'].map((str) => new RegExp(`^${str}`));

export function checkIsSolid(available: string): boolean {
  if (CONST_CHECK.includes(available)) {
    return false;
  }
  return !REG_CHECK.some((reg) => reg.test(available));
}
