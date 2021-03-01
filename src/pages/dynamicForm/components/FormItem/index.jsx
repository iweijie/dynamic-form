import React, { useMemo } from 'react';
import { Form as AForm } from 'antd';
import getFormItemProps from './getFormItemProps';
import FormContext from '../../context/FormContext';

const { Consumer } = FormContext;

const FormItem = props => {
    const { children, ...other } = props;

    return (
        <Consumer>
            {value => {
                const { pickFormItemProps, componentProps } = getFormItemProps({
                    ...value,
                    ...other,
                });
                return (
                    <AForm.Item {...pickFormItemProps}>
                        {React.cloneElement(children, { ...componentProps })}
                    </AForm.Item>
                );
            }}
        </Consumer>
    );
};

export default FormItem;
