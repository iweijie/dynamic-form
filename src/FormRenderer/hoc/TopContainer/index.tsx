/**
 * 最上层的容器， 用于提供统一方法
 */
import { Children, useMemo } from 'react';
import { SyncHook, AsyncSeriesHook } from 'tapable';
import TopContext from '../../context/top';
/** 同步 
 * 
 * 
    const syncHook = new SyncHook(['syncObserver']);
    syncHook.tap('first', (name) => {
    console.log('first', name);
    });

    syncHook.tap('second', (name) => {
    console.log('second', name);
    });

    syncHook.tap({
    name: 'third',
    // 把 third 事件回调放到 second 之前执行
    before: 'second',
    
    // 默认 stage 是 0，会按注册顺序添加事件回调到队列尾部
    // 顺序提前，stage 可以置为负数（比零小）
    // 顺序提后，stage 可以置为正数（比零大）
    stage: 10,
    }, (name) => {
    console.log('third', name);
    });

    syncHook.call('call');

*/

/** 异步
 * 
 * 
 const { AsyncSeriesHook } = require('tapable');
const hook = new AsyncSeriesHook(['name']);

// 事件回调接收到 callback
hook.tapAsync('first', (name, callback) => {
  console.log('first', name, callback);
  callback();
});

// 最后一个传入参数是回调函数
hook.callAsync('callAsync', (error) => {
    console.log('callAsync', error);
});

 */
const asyncHook = new AsyncSeriesHook(['asyncObserver']);

interface ITopHOCProps {
  // 用于发布订阅， 使用tapable
  Observer: any;
}

const TopHOC: React.FC = ({ children }) => {
  const syncHook = useMemo(() => {
    return new SyncHook(['syncObserver']);
  }, []);

  const value = useMemo(() => {
    return {
      syncHook,
    };
  }, [syncHook]);

  return <TopContext.Provider value={value}>{children}</TopContext.Provider>;
};

export default TopHOC;
