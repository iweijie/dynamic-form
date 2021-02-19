import { useMemo } from 'react';
import { Input } from 'antd';
import Icon from '../Icon/index';
import { render } from './combine';

export const config = [
  {
    title: '配置',
    list: [
      {
        field: 'label',
        name: 'Label名称',
        type: 'input',
      },
      {
        field: 'initialValue',
        name: '默认值',
        type: 'input',
      },
    ],
  },
];

export const render = (props) => {
  const { prefix, suffix, ...other } = props;

  const Prefix = useMemo(() => {
    return prefix ? <Icon type={prefix} /> : null;
  }, [prefix]);

  const Suffix = useMemo(() => {
    return suffix ? <Icon type={suffix} /> : null;
  }, [suffix]);

  return <Input prefix={Prefix} suffix={Suffix} {...other} />;
};
