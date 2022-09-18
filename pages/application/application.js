// pages/application/application.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Page({

  onLoad() {
    // 绑定 MobX store
    this.storeBindings = createStoreBindings(this, {
      store, // 需要绑定的数据仓库
      fields: ['list'], // 将 this.data.list 绑定为仓库中的 list ，即天气数据
      actions: ['setList'], // 将 this.setList 绑定为仓库中的 setList action
    })
    // 从服务器端读取数据
    wx.showLoading()
    getServerData((data) => {
      wx.hideLoading()
      // 调用 action ，将数据写入 store
      this.setList(data)
    })
    // wx.showLoading()
    // wx.request({ // 请求网络数据
    //   // ...
    //   success: (data) => {
    //     wx.hideLoading()
    //     // 调用 setList action ，将数据写入 store
    //     this.setList(data)
    //   }
    // })
  },
  onUnload() {
    // 解绑
    this.storeBindings.destroyStoreBindings()
  },







  data: {

    // 学院选择
    collegeConfigs:!1,
    showCollegeType: ['测试'],
 // 请假类型 
   showLeaveType: ['事假', '病假', '测试'],
   askForLeaveConfigs: !1,

   minHour: 0,
   maxHour: 24,
   currentDate: new Date().getTime(),

  //  开始时间
   showBeginTime: false,
   beginMinDate: new Date().getTime(),
   beginMaxDate: new Date(2025, 12, 30).getTime(),
   beginTimeFormat: '',
  //  minDate: new Date(1990,1,1).getTime(),
  //  beginMaxDate: new Date(2099, 12, 31).getTime(),

  // 结束时间
   showEndTime: false,
   endMinDate: new Date().getTime(),
   endMaxDate: new Date(2025, 12, 30).getTime(),
   endTimeFormat: '',

   disclaimer: !1,

   
   



  },

  onChangeDisclaimer: function(e) {
    this.setData({
        disclaimer: e.detail
    });
},
// /**相关协议 法律文件 */
//   bindAgreeChange:function(e) {
//   //  console.log(e.detail.value)
//     this.setData({
//       isAgree:e.detail.value.length,
//     })
//     if (e.detail.value.length==1){
//      this.setData({
//        btn_disabled:false,
//      })
//    }else{
//       //onsole.log(e.detail.value.length)
//      this.setData({
//        btn_disabled:true
//      })
//    }
//   },

  // 学院类型 
  showCollegeType: function (e) {
    console.log(e.detail.value)
   this.setData({
    collegeConfigs: e.detail.value
   })
  },
  // 请假类型 
  showPickerType: function (e) {
    console.log(e.detail.value)
   this.setData({
    askForLeaveConfigs: e.detail.value
   })
  },
  // 开始时间
  showPickerBeginTime() {
    this.setData({ showBeginTime: true })
  },
  onConfirmBeginTime(e) {
    this.setData({ showBeginTime: false, beginTimeFormat: this.formatDate(new Date(e.detail)) })
  },
  onCloseBeginTime() {
    this.setData({ showBeginTime: false })
  },
  onCancelBeginTime() {
    this.setData({ showBeginTime: false })
  },
  // 结束时间
  showPickerEndTime() {
    this.setData({ showEndTime: true })
  },
  // var e, t = this.data, a =endTimeFormat,b = beginTimeFormat,
  onConfirmEndTime(e) {
      this.setData({ showEndTime: false, endTimeFormat: this.formatDate(new Date(e.detail)) })
  },
  onCloseEndTime() {
    this.setData({ showEndTime: false })
  },
  onCancelEndTime() {
    this.setData({ showEndTime: false })
  },
  formatDate(date) {
    let taskStartTime
// 月
    if (date.getMonth() < 9) {
      taskStartTime = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-"
    } else {
      taskStartTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
    }
// 天
    if (date.getDate() < 10) {
      taskStartTime += "0" + date.getDate()
    } else {
      taskStartTime += date.getDate()
    }
// 小时
    if (date.getHours() < 10) {
      taskStartTime += " " + "0" + date.getHours()+ ":"
    } else {
      taskStartTime += " " + date.getHours()+ ":"
    }
// 分钟
    if (date.getMinutes() < 10) {
      taskStartTime +=  "0" + date.getMinutes()
    } else {
      taskStartTime += date.getMinutes()
    }

    this.setData({
      taskStartTime: taskStartTime,
    })
    return taskStartTime;
  },
  
  formSubmit(data) {
    console.log('form发生了submit事件，携带数据为：', data.detail.value)
    // <!-- 姓名 -->
    // <!-- studentName -->
    var studentName = data.detail.value.studentName
    // <!-- 选择学院 -->
    // <!-- collegeConfigs -->
    var collegeConfigs = data.detail.value.collegeConfigs
    // <!-- 班级 -->
    // <!-- studentClass -->
// <!-- 请假类型 -->
// <!-- askForLeaveConfigs -->

// <!-- 离校时间 -->
// <!-- beginTimeFormat -->
var beginTimeFormat = data.detail.value.beginTimeFormat
// <!-- 返校时间 -->
// <!-- endTimeFormat -->
// <!-- 辅导员姓名 -->
// <!-- counselorName -->
// <!-- 辅导员电话 -->
// <!-- counselorPhone -->
    var counselorPhone = data.detail.value.counselorName

  },

})






// 模仿服务器端返回数据，用于测试
function getServerData(callback) {

  // 这里模仿 1000ms 后服务器端返回数据的效果
  setTimeout(() => callback([
    {
      
      date: '10月30日',
      summary: '晴',
      temperature: '10℃ ~ 20℃',
      weather: '大晴天',
      airQuality: '优',
    }, 
  ]), 1)
}
