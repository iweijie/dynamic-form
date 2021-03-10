import { useMemo } from 'react';
import Icon from '../Icon/index';
import wrap from '@/hoc/wrap/hooks';
import * as RawInput from './combine';

export const identifiers = RawInput.identifiers || [];

const Input = wrap(RawInput);

Object.assign(Input, identifiers);

export default (props) => {
  const { prefix, suffix, action, onChange, $listen, ...other } = props;

  const handleChange = useMemo(
    () => [
      (_, e) => {
        onChange(e);
      },
      true,
    ],
    [onChange],
  );

  return (
    <Input {...other} onChange={handleChange}>
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
