export interface TParsedItem {
  no: number;
  form?: string;
}

/**
 * 解析盒子规则
 * eg:
 *    1-30
 *    表示编号 1 到编号 30
 * eg:
 *    1,2,3
 *    表示编号 1、2、3
 * eg:
 *    19|alola
 *    表示编号 19，阿罗拉形态
 */
export function parseRule(rule: string): TParsedItem[] {
  const parts = rule.split(',');
  const result: TParsedItem[] = [];

  parts.forEach((part) => {
    if (/^\d+\-\d+$/.test(part)) {
      // xx-xx 模式
      result.push(...parseRangeRule(part));
    }
  });

  return result;
}

function parseRangeRule(rule: string): TParsedItem[] {
  const [start, end] = rule.split('-').map((n) => +n);

  return new Array(end - start + 1).fill(null).map((_, idx) => {
    return { no: start + idx };
  });
}
