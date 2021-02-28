import { useCallback, useMemo, forwardRef } from 'react';
import { IS_FORM_COMPONENT } from '../../constant/index';
import Input from './Input';
import Icon from '../Icon/index';

const Component = forwardRef((props, ref) => {
    const { prefix, suffix, onChange, ...other } = props;

    const onChangeCustom = useMemo(
        () => [
            (_, e) => {
                onChange(e);
            },
            true,
        ],
        [onChange],
    );

    return (
        <Input {...other} ref={ref} onChange={onChangeCustom}>
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
});

export default {
    type: IS_FORM_COMPONENT,
    component: Component,
    // JSON 动态表单渲染，用于设置配置项，自洽！！
    configurable: {},
};
