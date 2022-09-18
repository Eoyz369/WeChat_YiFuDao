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
  }
})
// <!-- 姓名 -->
// <!-- studentName -->
// <!-- 选择学院 -->
// <!-- collegeConfigs -->
// <!-- 班级 -->
// <!-- studentClass -->
// <!-- 请假类型 -->
// <!-- askForLeaveConfigs -->
// <!-- 离校时间 -->
// <!-- beginTimeFormat -->
// <!-- 返校时间 -->
// <!-- endTimeFormat -->
// <!-- 辅导员姓名 -->
// <!-- counselorName -->
// <!-- 辅导员电话 -->
// <!-- counselorPhone -->