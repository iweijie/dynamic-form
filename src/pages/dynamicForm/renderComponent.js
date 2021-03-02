import {
    IS_FORM_COMPONENT,
    IS_CONTAINER_COMPONENT,
    IS_LAYOUT_COMPONENT,
} from './constant/index';

import Input from './components/Input/index';
import Select from './components/Select/index';
import DatePicker from './components/DatePicker/index';
import Form from './components/Form/index';
import FormItem from './components/FormItem/index';
import EmptyComponent from './components/EmptyComponent';
import { forEach, isEmpty, map } from 'lodash';
import { useEffect } from 'react';

const ComMap = {
    Form,
    Select,
    Input,
    DatePicker,
};

const RenderComponent = json => {
    const {
        type: componentName,
        uuid,
        styles,
        config,
        props,
        linkages,
        subCollection,
    } = json;
    if (!ComMap[componentName]) return EmptyComponent;
    const { type, component: Component } = ComMap[componentName];

    useEffect(() => {
        if (isEmpty(linkages)) return;
        forEach(linkages, linkage => {});
    }, [linkages]);

    if (type === IS_FORM_COMPONENT) {
        return (
            <FormItem key={uuid} {...config} {...props}>
                <Component />
            </FormItem>
        );
    }

    if (isEmpty(subCollection)) {
        if (type === IS_CONTAINER_COMPONENT || type === IS_LAYOUT_COMPONENT) {
            return <Component key={uuid} {...config} {...props} />;
        } else {
            throw new Error('类型错误');
        }
    }

    if (type === IS_CONTAINER_COMPONENT || type === IS_LAYOUT_COMPONENT) {
        return (
            <Component key={uuid} {...config} {...props}>
                {map(subCollection, sub => (
                    <RenderComponent key={sub.uuid} {...sub} />
                ))}
            </Component>
        );
    }

    throw new Error('类型错误');
};

export default RenderComponent;
