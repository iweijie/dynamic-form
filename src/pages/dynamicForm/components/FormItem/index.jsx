import React, { useMemo, useContext, useEffect } from 'react';
import { Form as AForm } from 'antd';
import { forEach, isEmpty, every, map } from 'lodash';
import getFormItemProps from './getFormItemProps';
import FormContext from '../../context/FormContext';
import GlobalContext from '../../context/GlobalContext';
import * as actions from '../../constant/linkageActions';

const formatTemp = value => value;

const FormItem = props => {
    const { children, linkages, config, state, ...other } = props;

    const { name } = config;
    // console.log('other', other);

    const formContextValues = useContext(FormContext);
    const { emitter } = useContext(GlobalContext);
    useEffect(() => {
        if (isEmpty(linkages)) return;

        const handles = map(linkages, linkage => {
            const {
                field,
                action,
                expression,
                format = formatTemp,
                depends,
            } = linkage;

            const handle = ([value, values, form]) => {
                console.log('linkage', linkage);
                // 校验表达式 未通过返回
                if (expression && !expression(value, values, form)) return;

                // 依赖表达式 未通过返回
                if (
                    !isEmpty(depends) &&
                    !every(
                        map(depends, depend => {
                            const { field, expression } = depend;
                            if (!expression) return values[field] !== undefined;
                            return !!expression(value, values, form);
                        }),
                        Boolean,
                    )
                )
                    return;

                // TODO
                if (action === actions.LINKAGE_VALUE) {
                    form.setFieldsValue({
                        [field]: format(value),
                    });
                } else if (action === actions.LINKAGE_SHOW_HIDDEN) {
                    emitter.emit('field', 'show' || 'hide');
                } else if (action === actions.LINKAGE_OPTIONS) {
                    emitter.emit('field', 'show' || 'hide');
                } else if (action === actions.LINKAGE_COMMUNICATION) {
                    emitter.emit('field', 'show' || 'hide');
                }
            };

            emitter.on(name, handle);

            return () => {
                emitter.off(name, handle);
            };
        });

        return () => {
            forEach(handles, handle => handle());
        };
    }, [linkages, emitter]);

    const { pickFormItemProps, componentProps } = useMemo(() => {
        return getFormItemProps({
            ...formContextValues,
            ...config,
        });
    }, [formContextValues, config]);

    return (
        <AForm.Item {...pickFormItemProps}>
            {React.cloneElement(children, { ...componentProps })}
        </AForm.Item>
    );
};

export default FormItem;
