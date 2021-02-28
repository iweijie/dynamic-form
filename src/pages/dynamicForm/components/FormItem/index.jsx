import React, { useMemo } from 'react';
import { Form as AForm } from 'antd';
import getFormItemProps from './getFormItemProps';
const FormItem = props => {
    const { children, ...other } = props;
    const { pickFormItemProps, componentProps } = getFormItemProps(other);

    return (
        <AForm.Item {...pickFormItemProps}>
            {React.cloneElement(children, { ...componentProps })}
        </AForm.Item>
    );
};

export default FormItem;
