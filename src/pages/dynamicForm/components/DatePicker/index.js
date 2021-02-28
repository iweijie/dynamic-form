import React, { forwardRef, useMemo } from 'react';
import { IS_FORM_COMPONENT } from '../../constant/index';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Component = forwardRef((props, ref) => {
    const { range, ...other } = props;
    return range ? <RangePicker {...other} /> : <DatePicker {...other} />;
});

export default {
    type: IS_FORM_COMPONENT,
    component: Component,
    // JSON 动态表单渲染，用于设置配置项，自洽！！
    configurable: {},
};
