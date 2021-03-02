import { useMemo } from 'react';
import Icon from '../Icon/index';
import wrap from '@/wrap/hooks';
import * as RawInput from './combine';

export const identifiers = RawInput.identifiers || [];

const Input = wrap(RawInput);

Object.assign(Input, identifiers);

export default props => {
    const { prefix, suffix, action, ...other } = props;
    console.log(prefix);
    return (
        <Input {...other}>
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