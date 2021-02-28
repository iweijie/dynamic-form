import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { map } from 'lodash';

const { Option } = Select;

export const defaultStateTypes = {
    value: PropTypes.string,
    onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    allowClear: PropTypes.bool,
    id: PropTypes.string,
    maxLength: PropTypes.number,
    maxTagCount: PropTypes.number,
    placeholder: PropTypes.string,
    showArrow: PropTypes.string,
    mode: PropTypes.oneOf(['multiple', 'tags']),
    size: PropTypes.oneOf(['large', 'middle', 'small']),
};

export const displayName = 'Input';

export const getDefaultState = () => ({
    value: undefined,
    disabled: false,
    allowClear: true,
    size: 'middle',
    mode: 'tags',
});

// export const identifiers = ['Prefix', 'Suffix'];

export const defaultListeners = {
    onSelect(_, e) {
        return {
            value: e.target.value,
        };
    },
};

export function render({ data, listeners }) {
    const { enums = [] } = data;
    return (
        <Select {...data} onSelect={listeners.onSelect}>
            {map(enums, option => {
                return (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                );
            })}
        </Select>
    );
}
