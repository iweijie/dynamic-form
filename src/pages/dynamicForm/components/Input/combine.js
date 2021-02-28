import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

export const defaultStateTypes = {
    value: PropTypes.string,
    onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
    onPressEnter: PropTypes.func,
    disabled: PropTypes.bool,
    allowClear: PropTypes.bool,
    bordered: PropTypes.bool,
    id: PropTypes.string,
    maxLength: PropTypes.number,
    size: PropTypes.oneOf(['large', 'middle', 'small']),
};

export const displayName = 'Input';

export const getDefaultState = () => ({
    value: undefined,
    disabled: false,
    allowClear: true,
    bordered: true,
    size: 'middle',
});

export const identifiers = ['Prefix', 'Suffix'];

export const defaultListeners = {
    onChange(_, e) {
        return {
            value: e.target.value,
        };
    },
};

export function render({ data, listeners, identifiers }) {
    return (
        <Input
            {...data}
            onChange={listeners.onChange}
            prefix={identifiers?.Prefix}
            suffix={identifiers?.Suffix}
        />
    );
}
