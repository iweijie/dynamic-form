import { useCallback, useMemo } from 'react';
import Input from './Input';
import Icon from '../Icon/index';
import { usePersistFn } from 'ahooks';

export default (props) => {
  const { prefix, suffix, onChange, ...other } = props;
  const handleChange = usePersistFn((_, e) => {
    onChange(e);
  });

  const onChangeCustom = useMemo(() => [handleChange, true], [handleChange]);

  return (
    <Input {...other} onChange={onChangeCustom}>
      {prefix ? (
        <Input.Prefix>
          <Icon type={prefix} />
        </Input.Prefix>
      ) : null}
      {suffix ? (
        <Input.Suffix>
          <Icon type={suffix} />
        </Input.Suffix>
      ) : null}
    </Input>
  );
};
