function charToInt(c: string) {
  switch (c) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return -1;
  }
}

/**
 * 罗马数字字符串转成 number
 */
export function romanToInt(str1: string): number {
  if (str1 == null) return -1;
  let num = charToInt(str1.charAt(0));
  let pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = charToInt(str1.charAt(i));
    pre = charToInt(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

/**
 * 填充编号至 3 位字符串
 */
export function fillNo(no: string | number): string {
  return ('' + no).padStart(3, '0');
}

/**
 * like python range
 *
 * @param start
 * @param end
 * @param step
 */
export function range(start: number, end: number | undefined = undefined, step: number = 1) {
  let _start = end === undefined ? 0 : start;
  let _end = end === undefined ? start : end;

  if (_start > _end) {
    throw new Error('start can not larger than end');
  }

  return new Array(_end - _start).fill(null).map((_, idx) => _start + idx * step);
}
