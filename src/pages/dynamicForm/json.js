/**
 * 组件数据结构：
 */

export default {
    uuid: 1,
    type: 'Form',
    config: {
        labelCol: 6,
        wrapperCol: 10,
    },
    state: {},
    actions: [
        // {
        //     name: '请求接口',
        //     type: 'request',
        //     url: 'https://iweijie.cn/api/test',
        //     method: 'post',
        //     repeat: 1,
        //     params: {},
        // },
    ],
    subCollection: [
        {
            uuid: 112,
            type: 'Select',
            styles: {},
            config: {
                name: 'Select',
                required: false,
                label: 'iweijie',
                initialValue: 'test',
                enums: [
                    { value: 'test', label: 'test' },
                    { value: 'iweijie', label: 'iweijie' },
                    { value: 'xiaofengfeng', label: 'xiaofengfeng' },
                    { value: 'dazhizhu', label: 'dazhizhu' },
                ],
            },
            state: {},
        },
        {
            uuid: 2,
            type: 'Input',
            config: {
                labelCol: 4,
                wrapperCol: 12,
                name: 'Input',
                required: true,
                label: '就是一个字',
                initialValue: '',
                // prefix: 'iconicon-test',
            },
            state: {},
            linkages: [
                {
                    action: '2',
                    field: 'Input',
                    expression: function(value, values, form) {
                        if (value === '2') return true;
                        return false;
                    },
                },
            ],
        },
        {
            uuid: 3,
            type: 'DatePicker',
            config: {
                labelCol: 4,
                wrapperCol: 12,
                name: 'DatePicker',
                required: true,
                label: '时间',
                format: 'YYYY-MM-DD hh:mm',
            },
            linkages: [
                {
                    action: '1',
                    field: 'Input',
                    depends: [
                        {
                            field: 'Select',
                            expression: function(value, values, form) {
                                debugger;
                                if (!value) return false;
                                return true;
                            },
                        },
                    ],
                },
            ],
            state: {},
            subCollection: [],
        },
    ],
};
