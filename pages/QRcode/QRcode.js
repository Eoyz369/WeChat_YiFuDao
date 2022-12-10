const app = getApp(); //获取应用实例
//获得util.js的函数,先模块化引用utils里面的js地址,reqiure('js地址')成一个面向对象
var util = require('../../utils/util.js');
Page({

  onShow:function () {
    var that =this;
    var mesg = wx.getStorageSync('mesg');
    var aFL = wx.getStorage({
      key:'aFL',
      success:function (aFL) {
        console.log(aFL);
        that.setData({
          askForLeaveConfigs: aFL.data,// <!-- 请假类型 -->// <!-- askForLeaveConfigs -->
        })
      }
    });
    var col = wx.getStorage({
      key:'col',
      success:function (col) {
        console.log(col);
        that.setData({
          collegeConfigs: col.data,// <!-- 选择学院 -->// <!-- collegeConfigs -->
        })
      }
    });

    console.log(mesg);
    this.setData({
      studentName: mesg.studentName,// <!-- 姓名 -->// <!-- studentName -->
      studentClass: mesg.studentClass,// <!-- 班级 -->// <!-- studentClass -->
      beginTimeFormat: mesg.beginTimeFormat,// <!-- 离校时间 -->// <!-- beginTimeFormat -->
      endTimeFormat: mesg.endTimeFormat,// <!-- 返校时间 -->// <!-- endTimeFormat -->
      counselorName: mesg.counselorName,// <!-- 辅导员姓名 -->// <!-- counselorName -->
      counselorPhone: mesg.counselorPhone,// <!-- 辅导员电话 -->// <!-- counselorPhone -->




     })
  },

  data:{


  },

  // getTime:function(e){
  //     // var that = this;
  //     var currentDate = util.formatTime(new Date());
  // },
  onLoad: function (options) {
    var that = this;
    setInterval(function(){
        that.setData({
            Time: util.formatTime(new Date())
        });    
    },1000);    
  },
  
  getTime:function(e){
    var that = this;
    var currentTime = util.formatTime(new Date());
  },
})
