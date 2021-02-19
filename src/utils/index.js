const merge = (...rest) => {
  return Object.assign({}, ...rest);
};

const defaultFormItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
export const normalizeCol = function (col, defaultValue) {
  if (!col) {
    return defaultValue;
  } else {
    return typeof col === 'object' ? col : { span: Number(col) };
  }
};
/**
 * 改写 FormItem 的 labelCol 与 wrapperCol
 */
export const rewriteFormItemLayoutProps = (props) => {
  props.labelCol = normalizeCol(props.labelCol, defaultFormItemLayout.labelCol);
  props.wrapperCol = normalizeCol(
    props.wrapperCol,
    defaultFormItemLayout.wrapperCol,
  );
  return props;
};

import { cloneDeep } from 'lodash';
import { v1 as uuid } from 'uuid';

export const getRandom = (prefix) => {
  const str = Math.random().toString(16).slice(2) + Date.now().toString(16);
  return prefix ? `${prefix}_${str}` : str;
};

export const className = (...classNames) => {
  const classNameList = [];
  classNames.forEach((className) => {
    if (typeof className === 'string') {
      classNameList.push(className);
    } else if (typeof className === 'object') {
      Object.keys(className).forEach((key) => {
        if (className[key]) {
          classNameList.push(key);
        }
      });
    }
  });
  return classNameList.join(' ');
};

export const clone = (obj) => {
  return {
    ...obj,
    uuid: uuid(),
    config: cloneDeep(obj.config) || {},
  };
};

export const isFirstCapitalized = (str) => {
  return /[A-Z]/.test(str.slice(0, 1));
};
