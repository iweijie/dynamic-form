import { useCallback, useMemo, forwardRef } from 'react';
import { IS_FORM_COMPONENT } from '../../constant/index';
import { Input } from 'antd';

const Component = forwardRef((props, ref) => {
    const { onChange, ...other } = props;
    return <Input {...other} ref={ref} onChange={onChange} />;
});

export default {
    type: IS_FORM_COMPONENT,
    component: Component,
    // JSON 动态表单渲染，用于设置配置项，自洽！！
    configurable: {},
};
