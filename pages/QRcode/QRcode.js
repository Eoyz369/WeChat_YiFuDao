const app = getApp(); //获取应用实例
//获得util.js的函数,先模块化引用utils里面的js地址,reqiure('js地址')成一个面向对象
var util = require('../../utils/util.js');
Page({
  data:{
      Time:'',
      
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
    








  getTime:function(e){
      var that = this;
      var currentTime = util.formatTime(new Date());
  },
  onLoad:function(options){
    var that = this;
    setInterval(function(){
        that.setData({
            Time: util.formatTime(new Date())
        });    
    });    
    }
})
