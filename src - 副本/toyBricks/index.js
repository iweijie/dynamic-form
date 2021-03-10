import react, { forwardRef } from 'react';
import { IS_FORM_COMPONENT } from '../constant/index';
import getFormItemProps from './FormItem/getFormItemProps';
import OriginalLabel from './OriginalLabel';
import Input from './Input';
import Upload from './Upload';
import Select from './Select';

// require.context(directory, useSubdirectories, regExp)
import {
  AutoComplete,
  Checkbox,
  Cascader,
  DatePicker,
  InputNumber,
  Mentions,
  Rate,
  Radio,
  Switch,
  Slider,
  TreeSelect,
  Transfer,
  TimePicker,
  Button as AButton,
} from 'antd';
import { Form as AForm } from 'antd';
import Form from './Form/index';
import FormItem from './FormItem/index';

const components = { Form, FormItem, OriginalLabel };

const ATest = forwardRef((props, ref) => {
  const { id, value = '', onChange } = props;
  return (
    <input ref={ref} id={id} type="text" value={value} onChange={onChange} />
  );
});

const FormComponent = {
  // AutoComplete,
  // Checkbox,
  // Cascader,
  // DatePicker,
  // InputNumber,
  Input,
  // Mentions,
  // Rate,
  // Radio,
  // Switch,
  // Slider,
  Select,
  // TreeSelect,
  // Transfer,
  // TimePicker,
  Upload,
  ATest,
};

Object.keys(FormComponent).map((key) => {
  const Com = FormComponent[key];
  components[key] = (props) => {
    const { pickFormItemProps, componentProps, visible } = getFormItemProps(
      props,
    );
    if (!visible) return null;

    return (
      <AForm.Item {...pickFormItemProps} initialValue="test">
        <Com {...componentProps} />
      </AForm.Item>
    );
  };
  components[key][IS_FORM_COMPONENT] = true;
});

export default components;
