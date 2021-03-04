import PropTypes from 'prop-types';
import React, { useMemo, useCallback, useContext } from 'react';
import { Form as AForm, Button } from 'antd';
import FormFieldsJSON from './FormFields.json';
import { IS_CONTAINER_COMPONENT } from '../../constant/index';
import { rewriteFormItemLayoutProps } from '../../utils';
import { isEmpty, pick, get, noop } from 'lodash';
import FormContext from '../../context/FormContext';
import GlobalContext from '../../context/GlobalContext';

const { Provider } = FormContext;
const { useForm } = AForm;

const FormProviderFields = [
    'prefixCls',
    'labelAlign',
    'labelCol',
    'wrapperCol',
    'inline',
    'size',
];

const Form = props => {
    console.log('Form-props', props);

    const [form] = useForm();
    const { uuid, children, ...other } = props;

    const { emitter } = useContext(GlobalContext);

    const { pickProviderValue, pickItem } = useMemo(() => {
        const FormFields = FormFieldsJSON.body.map(v => v.field);
        const pickItem = pick(other, FormFields);
        const pickProviderValue = rewriteFormItemLayoutProps(
            pick(other, FormProviderFields),
        );

        pickItem.layout = pickItem.inline
            ? 'inline'
            : pickItem.layout || 'horizontal';

        return {
            pickProviderValue: {
                ...pickProviderValue,
                form,
                labelCol: pickItem.labelCol,
                wrapperCol: pickItem.wrapperCol,
            },
            pickItem,
        };
    }, [props, form]);

    const handleGetValue = () => {
        console.log(form.getFieldsValue());
    };

    const onFinish = useCallback(value => {
        console.log(value);
    }, []);

    const onReset = useCallback(() => {
        const { resetFields } = form;
        resetFields();
    }, [form]);

    const onFinishFailed = useCallback(
        ({ values, errorFields, outOfDate }) => {
            console.log(values, errorFields, outOfDate);
        },
        [form],
    );

    const onValuesChange = useCallback(
        (changedValues, allValues) => {
            Object.keys(changedValues).forEach(key => {
                emitter.emit(key, [changedValues[key], allValues, form]);
            });
        },
        [emitter],
    );

    return (
        <Provider value={pickProviderValue}>
            <AForm
                {...pickItem}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onValuesChange={onValuesChange}
            >
                {children}
            </AForm>
            <Button onClick={handleGetValue}>点我获取值</Button>
        </Provider>
    );
};

Form.propTypes = {
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),
};

Form.defaultProps = {};

export default {
    type: IS_CONTAINER_COMPONENT,
    component: Form,
};
