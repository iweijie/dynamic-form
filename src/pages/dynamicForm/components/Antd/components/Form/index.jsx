import React, {
    useRef,
    useMemo,
    createContext,
    useContext,
    useCallback,
    Children,
} from 'react';
import { Form as AForm } from 'antd';
import FormFieldsJSON from './FormFields.json';
import renderComponent from '../../../renderComponent';
import { rewriteFormItemLayoutProps } from '../utils';
import getContext from '@/context/index';
import { pick, map } from 'lodash';
const { useForm } = AForm;

const FormProviderFields = [
    'prefixCls',
    'labelAlign',
    'labelCol',
    'wrapperCol',
    'inline',
    'size',
];

const Form = topProps => {
    const [form] = useForm();
    const { type, uuid, actions, props, config, subCollection } = topProps;
    const { FormItemProvider } = getContext(uuid);
    const getValue = (window.getValue = () => {
        console.log(form);
        return form.getFieldsValue();
    });
    const { pickProviderItem, pickItem } = useMemo(() => {
        const FormFields = FormFieldsJSON.body.map(v => v.field);
        const mergeProps = Object.assign({}, config, props);
        const pickItem = pick(mergeProps, FormFields);
        const pickProviderItem = rewriteFormItemLayoutProps(
            pick(mergeProps, FormProviderFields),
        );

        pickItem.layout = pickItem.inline
            ? 'inline'
            : pickItem.layout || 'horizontal';

        return {
            pickProviderItem: {
                ...pickProviderItem,
                labelCol: pickItem.labelCol,
                wrapperCol: pickItem.wrapperCol,
            },
            pickItem,
        };
    }, [actions, props]);

    const onSubmit = e => {};
    const onReset = () => {};

    // const renderChildren = useCallback(subCollection => {
    //     return map(subCollection, sub => {
    //         return <MixLayoutItem key={sub.uuid} {...sub} />;
    //     });
    // }, []);

    return (
        <FormItemProvider {...pickProviderItem} form={form}>
            <AForm
                {...pickItem}
                form={form}
                onSubmit={onSubmit}
                onReset={onReset}
            >
                {map(subCollection, sub => {
                    return renderComponent(sub);
                })}
            </AForm>
        </FormItemProvider>
    );
};

export default Form;
