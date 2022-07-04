import type CSS from 'csstype';
import kebabCase from 'lodash/kebabCase.js';
import isNil from 'lodash/isNil.js';

/**
 * style 参数对象类型转换为字符串
 */
export function normalizeStyle(style: CSS.Properties) {
  return Object.entries(style)
    .filter(([, value]) => !isNil(value))
    .map(([key, value]) => {
      let _value = value;
      if (typeof _value === 'number') {
        _value = `${value}px`;
      }
      return `${kebabCase(key)}: ${_value};`;
    })
    .join();
}
