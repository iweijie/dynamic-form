import { useMemo } from 'react';
import { Input } from 'antd';
import Icon from '../Icon/index';

export default (props) => {
  const { prefix, suffix, ...other } = props;

  const Prefix = useMemo(() => {
    return prefix ? <Icon type={prefix} /> : null;
  }, [prefix]);

  const Suffix = useMemo(() => {
    return suffix ? <Icon type={suffix} /> : null;
  }, [suffix]);

  return <Input prefix={Prefix} suffix={Suffix} {...other} />;
};
