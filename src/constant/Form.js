export const defaultFormItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
export const FormProviderFields = [
    'prefixCls',
    'labelAlign',
    'labelCol',
    'wrapperCol',
    'inline',
    'size',
];

export const FormFields = {
    title: 'API',
    header: [
        {
            name: '参数',
            field: 'field',
        },
        {
            name: '说明',
            field: 'explain',
        },
        {
            name: '类型',
            field: 'type',
        },
        {
            name: '默认值',
            field: 'defaultValue',
        },
        {
            name: '版本',
            field: 'version',
        },
    ],
    body: [
        {
            field: 'component',
            explain: '设置 Form 渲染元素，为 false 则不创建 DOM 节点',
            type: 'ComponentType | false',
            defaultValue: 'form',
            version: '',
        },
        {
            field: 'colon',
            explain:
                '配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)',
            type: 'boolean',
            defaultValue: 'true',
            version: '',
        },
        {
            field: 'fields',
            explain:
                '通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看示例',
            type: 'FieldData[]',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'form',
            explain:
                '经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建',
            type: 'FormInstance',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'hideRequiredMark',
            explain: '隐藏所有表单项的必选标记',
            type: 'boolean',
            defaultValue: 'false',
            version: '',
        },
        {
            field: 'initialValues',
            explain: '表单默认值，只有初始化以及重置时生效',
            type: 'object',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'labelAlign',
            explain: 'label 标签的文本对齐方式',
            type: 'left | right',
            defaultValue: 'right',
            version: '',
        },
        {
            field: 'labelCol',
            explain:
                'label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}',
            type: 'object',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'layout',
            explain: '表单布局',
            type: 'horizontal | vertical | inline',
            defaultValue: 'horizontal',
            version: '',
        },
        {
            field: 'name',
            explain: '表单名称，会作为表单字段 id 前缀使用',
            type: 'string',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'preserve',
            explain: '当字段被删除时保留字段值',
            type: 'boolean',
            defaultValue: 'true',
            version: '4.4.0',
        },
        {
            field: 'scrollToFirstError',
            explain: '提交失败自动滚动到第一个错误字段',
            type: 'boolean',
            defaultValue: 'false',
            version: '',
        },
        {
            field: 'size',
            explain: '设置字段组件的尺寸（仅限 antd 组件）',
            type: 'small | middle | large',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'validateMessages',
            explain: '验证提示模板，说明见下',
            type: 'ValidateMessages',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'validateTrigger',
            explain: '统一设置字段校验规则',
            type: 'string | string[]',
            defaultValue: 'onChange',
            version: '4.3.0',
        },
        {
            field: 'wrapperCol',
            explain:
                '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
            type: 'object',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'onFinish',
            explain: '提交表单且数据验证成功后回调事件',
            type: 'function(values)',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'onFinishFailed',
            explain: '提交表单且数据验证失败后回调事件',
            type: 'function({ values, errorFields, outOfDate })',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'onFieldsChange',
            explain: '字段更新时触发回调事件',
            type: 'function(changedFields, allFields)',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'onValuesChange',
            explain: '字段值更新时触发回调事件',
            type: 'function(changedValues, allValues)',
            defaultValue: '-',
            version: '',
        },
    ],
};

export const FormItemFields = {
    title: 'Form.Item',
    header: [
        {
            name: '参数',
            field: 'field',
        },
        {
            name: '说明',
            field: 'explain',
        },
        {
            name: '类型',
            field: 'type',
        },
        {
            name: '默认值',
            field: 'defaultValue',
        },
        {
            name: '版本',
            field: 'version',
        },
    ],
    body: [
        {
            field: 'colon',
            explain: '配合 label 属性使用，表示是否显示 label 后面的冒号',
            type: 'boolean',
            defaultValue: 'true',
            version: '',
        },
        {
            field: 'dependencies',
            explain: '设置依赖字段，说明见下',
            type: 'NamePath[]',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'extra',
            explain:
                '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。',
            type: 'string | ReactNode',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'getValueFromEvent',
            explain: '设置如何将 event 的值转换成字段值',
            type: '(..args: any[]) => any',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'getValueProps',
            explain: '为子元素添加额外的属性',
            type: '(value: any) => any',
            defaultValue: '-',
            version: '4.2.0',
        },
        {
            field: 'hasFeedback',
            explain:
                '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用',
            type: 'boolean',
            defaultValue: 'false',
            version: '',
        },
        {
            field: 'help',
            explain: '提示信息，如不设置，则会根据校验规则自动生成',
            type: 'string | ReactNode',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'htmlFor',
            explain: '设置子元素 label htmlFor 属性',
            type: 'string',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'initialValue',
            explain:
                '设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准',
            type: 'string',
            defaultValue: '-',
            version: '4.2.0',
        },
        {
            field: 'noStyle',
            explain: '为 true 时不带样式，作为纯字段控件使用',
            type: 'boolean',
            defaultValue: 'false',
            version: '',
        },
        {
            field: 'label',
            explain: 'label 标签的文本',
            type: 'string | ReactNode',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'labelAlign',
            explain: '标签文本对齐方式',
            type: 'left | right',
            defaultValue: 'right',
            version: '',
        },
        {
            field: 'labelCol',
            explain:
                'label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}。你可以通过 Form 的 labelCol 进行统一设置。当和 Form 同时设置时，以 Item 为准',
            type: 'object',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'name',
            explain: '字段名，支持数组',
            type: 'NamePath',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'preserve',
            explain: '当字段被删除时保留字段值',
            type: 'boolean',
            defaultValue: 'true',
            version: '4.4.0',
        },
        {
            field: 'normalize',
            explain: '组件获取值后进行转换，再放入 Form 中',
            type: '(value, prevValue, prevValues) => any',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'required',
            explain: '必填样式设置。如不设置，则会根据校验规则自动生成',
            type: 'boolean',
            defaultValue: 'false',
            version: '',
        },
        {
            field: 'rules',
            explain: '校验规则，设置字段的校验逻辑。点击此处查看示例',
            type: 'Rule[]',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'shouldUpdate',
            explain: '自定义字段更新逻辑，说明见下',
            type: 'boolean | (prevValue, curValue) => boolean',
            defaultValue: 'false',
            version: '',
        },
        {
            field: 'trigger',
            explain: '设置收集字段值变更的时机',
            type: 'string',
            defaultValue: 'onChange',
            version: '',
        },
        {
            field: 'validateFirst',
            explain:
                '当某一规则校验不通过时，是否停止剩下的规则的校验。设置 parallel 时会并行校验',
            type: 'boolean | parallel',
            defaultValue: 'false',
            version: 'parallel: 4.5.0',
        },
        {
            field: 'validateStatus',
            explain:
                "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
            type: 'string',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'validateTrigger',
            explain: '设置字段校验的时机',
            type: 'string | string[]',
            defaultValue: 'onChange',
            version: '',
        },
        {
            field: 'valuePropName',
            explain:
                "子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效",
            type: 'string',
            defaultValue: 'value',
            version: '',
        },
        {
            field: 'wrapperCol',
            explain:
                '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol。你可以通过 Form 的 wrapperCol 进行统一设置。当和 Form 同时设置时，以 Item 为准',
            type: 'object',
            defaultValue: '-',
            version: '',
        },
        {
            field: 'hidden',
            explain: '是否隐藏字段（依然会收集和校验字段）',
            type: 'boolean',
            defaultValue: 'false',
            version: '',
        },
    ],
};
