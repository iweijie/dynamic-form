const importAll = (context) => {
  const map = {};
  for (const key of context.keys()) {
    const keyArr = key.split('/');

    const newKey = keyArr[keyArr.length - 2];

    if (!newKey) throw new Error('取值错误');
    if (/[^A-Z]/.test(newKey[0])) {
      console.warn(`${newKey} 名称需以大写字母开头`);
    }

    map[newKey] = context(key);
  }

  return map;
};

module.exports = importAll(
  require.context('./', true, /\.\/.+\/index\.(js|jsx|tsx)$/),
);
