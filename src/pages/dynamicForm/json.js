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
            linkage: [{}],
            config: {
                name: 'Select',
                required: false,
                label: 'iweijie',
                initialValue: 'test',
                enums: [
                    { value: 'test', label: '测试' },
                    { value: 'iweijie', label: 'weijie' },
                    { value: 'xiaofengfeng', label: '小凤凤' },
                    { value: '1', label: '2' },
                ],
            },
            props: {},
            actions: {},
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
            actions: {},
            subCollection: [],
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
            props: {},
            actions: {},
            subCollection: [],
        },
    ],
};
