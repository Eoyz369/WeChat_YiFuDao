// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  toClearStore:function (e) {
    wx.clearStorageSync();
    wx.showModal({
      title: '清理缓存',
      content: '确定要清理缓存？',
      showCancel: true,//是否显示取消按钮
      cancelText:"否",//默认是“取消”
      cancelColor:'skyblue',//取消文字的颜色
      confirmText:"是",//默认是“确定”
      confirmColor: 'skyblue',//确定文字的颜色
      success: function (res) {
         if (res.cancel) {
            //点击取消,默认隐藏弹框
         } else {
            //点击确定
      wx.reLaunch({
      url: '../index/index',
    })
         }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
   })
    // wx.clearStorage();
    // wx.showToast({
    //   title: '清理缓存成功',
    //   duration:3000,//显示时长
    //   mask:true,//是否显示透明蒙层，防止触摸穿透，默认：false  
    //   icon:'success', //图标，支持"success"、"loading"  
    // })   
    //   wx.reLaunch({
    //   // url: '../index/index',
    // })
  }
})
