/**
 *  通讯模块
 *
 *  observer 用于组件之间的数据传递
 */

import get from 'lodash/get';
import isFunction from 'lodash/isFunction';

export class Observer {
  constructor() {
    this.store = {};
    this.payload = {};
  }

  emit(type, payload) {
    const handle = get(this.store, type);
    if (!isFunction(handle)) return;
    handle(payload);
  }

  preEmit(type, payload) {
    if (!this.store[type]) {
      this.payload[type] = {
        payload,
      };
      return;
    }
    this.emit(type, payload);
  }

  on(type, callback) {
    if (!isFunction(callback)) return false;
    this.store[type] = callback;
    if (this.payload[type]) {
      const { payload } = this.payload[type];
      this.emit(type, payload);
      this.payload[type] = null;
    }
  }

  off(type) {
    if (!type || !this.store[type]) return false;
    this.store[type] = undefined;
    return true;
  }

  once(type, callback) {
    if (!type) return;
    const _this = this;
    const anonym = function anonym() {
      function fn(payload) {
        callback(payload);
        _this.off(type, fn);
      }
      return fn;
    };
  }
}

export default new Observer();
