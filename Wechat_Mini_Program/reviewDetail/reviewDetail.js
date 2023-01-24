// pages/reviewDetail/reviewDetail.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function () {
    var that =this;
    var mesg = wx.getStorageSync('mesg');
    console.log(mesg);
    var aFL = wx.getStorage({
      key:'aFL',
      success:function (aFL) {
        console.log(aFL);
        that.setData({
          askForLeaveConfigs: aFL.data,// <!-- 请假类型 -->// <!-- askForLeaveConfigs -->
        })
      }
    });
    this.setData({
      beginTimeFormat: mesg.beginTimeFormat,// <!-- 离校时间 -->// <!-- beginTimeFormat -->
      endTimeFormat: mesg.endTimeFormat,// <!-- 返校时间 -->// <!-- endTimeFormat -->
      location: mesg.location,// <!-- 外出地点 -->// <!-- location -->
      leaveForReason: mesg.leaveForReason,// <!-- 请假原因 -->// <!-- leaveForReason -->
      parentsPhone: mesg.parentsPhone,// <!-- 家长电话 -->// <!-- parentsPhone -->
      studentName: mesg.studentName,// <!-- 姓名 -->// <!-- studentName -->
      studentClass: mesg.studentClass,// <!-- 班级 -->// <!-- studentClass -->
      counselorName: mesg.counselorName,// <!-- 辅导员姓名 -->// <!-- counselorName -->
    schoolAuthorityName: mesg.schoolAuthorityName,// <!-- 校领导姓名 -->// <!-- schoolAuthorityName -->
      headOfDepartmentName: mesg.headOfDepartmentName,// <!-- 系主任姓名 -->// <!-- headOfDepartmentName -->
     });
      // 获取某个时间格式的时间戳
      // 结束时间
    var stringEndTime = mesg.endTimeFormat;
    var endTimeString = Date.parse(new Date(stringEndTime));

      // 开始时间
      var stringBeginTime = mesg.beginTimeFormat;
      var beginTimeString = Date.parse(new Date(stringBeginTime));
 

      // beginTimeFormat: this.formatDate(new Date(e.detail))

     var days = ((endTimeString - beginTimeString) / 864e5)*1;
     console.log(days*1);
    //  申请时间
     var applicationTime = (beginTimeString/1000)-3600*27;
    //  辅导员同意时间
     var counselorPassingTime = (beginTimeString/1000)-3600*26+360;
    //  系主任同意时间
     var headOfDepartmentPassingTime = (beginTimeString/1000)-3600*24-1080;
    //  学生处同意时间
     var PassingTime = (beginTimeString/1000)-1800-3600*24;
     
     console.log(util.formatTimeTwo(beginTimeString,'Y/M/D h:m'));
     console.log(util.formatTimeTwo(PassingTime,'Y-M-D h:m'));

     that.setData({
      "applicationTime": util.formatTimeTwo(applicationTime,'Y-M-D h:m'),
      "counselorPassingTime": util.formatTimeTwo(counselorPassingTime,'Y-M-D h:m'),
      "headOfDepartmentPassingTime": util.formatTimeTwo(headOfDepartmentPassingTime,'Y-M-D h:m'),
      "PassingTime": util.formatTimeTwo(PassingTime,'Y-M-D h:m'),

  });


     that.setData({
        "detail.day": Math.floor(10 * days) / 10
      });
  
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


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})