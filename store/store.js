import { observable, action } from 'mobx-miniprogram'

// 数据仓库
export const store = observable({

  list: [], // 天气数据（包含列表和详情）

  // 设置天气列表，从网络上获取到数据之后调用
  setList: action(function (list) {
    this.list = list
  }),

})