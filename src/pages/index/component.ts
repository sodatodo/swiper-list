import { singleQuote } from '@tarojs/shared'

export const components = {
  // 组件名 CamelCase
  ScrollView: 
  // 属性对象
  {
    // value 为空字符串时，代表不设置默认值
    'scroll-left': '',
    // 属性默认值为布尔值或数字时，value 写为字符串
    'enable-flex': 'false',
    'refresher-threshold': '45',
    // 属性默认值为字符串时，需要使用 singleQuote 函数进行包裹
    'refresher-default-style': singleQuote('black'),
    // 事件
    bindRefresherAbort: ''
  }
}
