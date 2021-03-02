/**
 * 组件数据结构：
 *
    type: '',
    component: '',
    props: {},
    config: {},
    actions:[],
    subCollection: [
    ],
 */

export default {
    uuid: 1,
    type: 'Form',
    config: {
        labelCol: 6,
        wrapperCol: 10,
    },
    props: {},
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
            props: {},
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
                prefix: 'iconicon-test',
            },
            props: {},
            linkages: [
                {
                    action: '2',
                    field: 'Input',
                    exp: function(value, form) {
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
                    depend: [
                        {
                            field: 'Select',
                            exp: function(value, form) {
                                if (!value) return false;
                                return true;
                            },
                        },
                    ],
                },
            ],
            props: {},
            actions: {},
            subCollection: [],
        },
    ],
};
