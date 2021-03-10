// import { useCallback, useMemo } from 'react';
// import Select from './Select';
// import { usePersistFn } from 'ahooks';

// export default (props, ref) => {
//   console.log('props', props);

//   const { action, $listen, $trigger, ...other } = props;

//   const handleChange = usePersistFn((_, value) => {
//     props.onChange(value);
//   });

//   const onSelect = useMemo(() => [handleChange, true], [handleChange]);

//   return <Select {...other} onSelect={onSelect} />;
// };

import { useMemo } from 'react';
import { Select } from 'antd';
import Icon from '../Icon/index';

export default (props) => {
  const { prefix, suffix, onChange, ...other } = props;

  const Prefix = useMemo(() => {
    return prefix ? <Icon type={prefix} /> : null;
  }, [prefix]);

  const Suffix = useMemo(() => {
    return suffix ? <Icon type={suffix} /> : null;
  }, [suffix]);

  return (
    <Select prefix={Prefix} suffix={Suffix} onSelect={onChange} {...other} />
  );
};
