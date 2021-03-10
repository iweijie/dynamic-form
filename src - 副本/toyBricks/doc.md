## Toy单项导出类型

| 参数名      | 类型                     | 描述                                           | 是否必须 |
| ----------- | ------------------------ | ---------------------------------------------- | -------- |
| type        | 表单,容器,其他(后续添加) | 区分类型的目的是为了注入不同的参数             | 是       |
| x-component | `string`                 | 组件类型，例如：Input，TextArea，Text，Icon 等 | 是       |
| component   | JSX                      | react 函数/类组件                              | 是       |
| config      | 配置项                   | 用于构建配置                                   | 是       |


### 表单

```javascript

import * as Toy from 'toy'

```
