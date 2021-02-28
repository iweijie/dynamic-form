import React, { forwardRef, useMemo } from 'react';
import { IS_FORM_COMPONENT } from '../../constant/index';
import { Select } from 'antd';
import { map } from 'lodash';

const { Option } = Select;

const Component = forwardRef((props, ref) => {
    const { onChange, enums = [], ...other } = props;
    return (
        <Select ref={ref} {...other} onSelect={onChange}>
            {map(enums, option => {
                return (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                );
            })}
        </Select>
    );
});

export default {
    type: IS_FORM_COMPONENT,
    component: Component,
    // JSON 动态表单渲染，用于设置配置项，自洽！！
    configurable: {},
};
