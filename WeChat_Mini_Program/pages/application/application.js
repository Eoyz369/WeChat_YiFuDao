// pages/application/application.js
var util = require('../../utils/util.js');

Page({

  data: {

    
    // 学院选择
    collegeConfigs:!1,
    showCollegeType: [  
    {
      id: 0,
      name: '管理系'
    },
    {
      id: 1,
      name: '建筑系'
    },
    {
      id: 2,
      name: '财经系'
    },
    {
      id: 3,
      name: '信息工程系'
    },
    {
      id: 4,
      name: '医药健康系'
    },
    {
      id: 5,
      name: '外语外贸与电子商务系'
    },
    {
      id: 6,
      name: '教育国际交流部'
    },
    {
      id: 7,
      name: '测试'
    },
  ],
    // 是否离校
    showLeaveSchool:[
      {
        id: 0,
        name: '是'
      },
      {
        id: 1,
        name: '否'
      },
    ] ,
    // 请假类型 
   showLeaveType:[
    {
      id: 0,
      name: '测试'
    },
    {
      id: 1,
      name: '事假'
    },
    {
      id: 2,
      name: '事假(不离校)'
    },
    {
      id: 3,
      name: '病假'
    },
    {
      id: 3,
      name: '病假(不离校)'
    },
    

  ],
   askForLeaveConfigs: !1,
   askForLeaveSchoolConfigs: !1,

   minHour: 0,
   maxHour: 24,
   currentDate: new Date().getTime(),

  //  开始时间
   showBeginTime: false,
   beginMinDate: new Date().getTime(),
   beginMaxDate: new Date(2031, 12, 30).getTime(),
   beginTimeFormat: '',
  //  minDate: new Date(1990,1,1).getTime(),
  //  beginMaxDate: new Date(2099, 12, 31).getTime(),

  // 结束时间
   showEndTime: false,
   endMinDate: new Date().getTime(),
   endMaxDate: new Date(2031, 12, 30).getTime(),
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

    var that = this;
    console.log(e)
    console.log("选中的name值:"+that.data.showCollegeType[e.detail.value].name);
    var sss =that.data.showCollegeType[e.detail.value].id;
    console.log("选中的name值:"+sss)
    this.setData({
      collegeConfigs: e.detail.value,
    })
    // console.log(JSON.stringify(data));
    wx.setStorage({
      key:'col',
      data:that.data.showCollegeType[e.detail.value].name,
      // success:function () {
      //   wx.showToast({
      //     title: 'title',
      //   })
      // }
    })



  },


  // 请假类型 
  showPickerType: function (e) {
    var that = this;
    console.log(e)
    console.log("选中的name值:"+that.data.showLeaveType[e.detail.value].name);
    var sss =that.data.showLeaveType[e.detail.value].id;
    console.log("选中的name值:"+sss)
    this.setData({
      askForLeaveConfigs: e.detail.value,
      
    })
    // console.log(JSON.stringify(data));
    wx.setStorage({
      key:'aFL',
      data:that.data.showLeaveType[e.detail.value].name,
      // success:function () {
      //   wx.showToast({
      //     title: 'title',
      //   })
      // }
    })

  },


  showPickerSchoolType: function (e) {
    var that = this;
    console.log(e)
    console.log("选中的name值:"+that.data.showLeaveSchool[e.detail.value].name);
    var sssc =that.data.showLeaveSchool[e.detail.value].id;
    console.log("选中的name值:"+sssc)
    this.setData({
      askForLeaveSchoolConfigs: e.detail.value,
      
    })
    // console.log(JSON.stringify(data));
    wx.setStorage({
      key:'aFSL',
      data:that.data.showLeaveSchool[e.detail.value].name,
    })

  },




  // 开始时间
  showPickerBeginTime() {
    this.setData({ showBeginTime: true })
  },
  onConfirmBeginTime(e) {
    this.setData({ showBeginTime: false, 
      beginTimeFormat: this.formatDate(new Date(e.detail)) })
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
      this.setData({ 
        showEndTime: false, 
        endTimeFormat: this.formatDate(new Date(e.detail)) 
      })
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

  passingTime(e) {
     
},

  formSubmit: function (e){

     
  

    var that = this;

  const data = {}
  // <!-- 姓名 --><!-- studentName -->
    data.studentName = e.detail.value.studentName
  // <!-- 选择学院 --><!-- collegeConfigs -->
    // data.collegeConfigs = this.data.collegeConfigs
  //   // <!-- 请假类型 --><!-- askForLeaveConfigs -->
    // data.askForLeaveConfigs = this.data.askForLeaveConfigs.
    
    // <!-- 外出地点 --><!-- location -->
    data.location = e.detail.value.location
    // <!-- 请假原因 --><!-- leaveForReason -->
    data.leaveForReason = e.detail.value.leaveForReason
    // <!-- 班级 -->// <!-- studentClass -->
    data.studentClass = e.detail.value.studentClass
    // <!-- 离校时间 -->// <!-- beginTimeFormat -->
    data.beginTimeFormat = that.data.beginTimeFormat
    // <!-- 返校时间 -->// <!-- endTimeFormat -->
    data.endTimeFormat = that.data.endTimeFormat
    
    // <!-- 校领导姓名 -->// <!-- schoolAuthorityName -->
    data.schoolAuthorityName = e.detail.value.schoolAuthorityName
    // <!-- 系主任姓名 -->// <!-- headOfDepartmentName -->
    data.headOfDepartmentName = e.detail.value.headOfDepartmentName

    
    // <!-- 辅导员姓名 -->// <!-- counselorName -->
    data.counselorName = e.detail.value.counselorName
    // <!-- 辅导员电话 -->// <!-- counselorPhone -->
    data.counselorPhone = e.detail.value.counselorPhone  
    // <!-- 家长电话 -->// <!-- parentsPhone -->
    data.parentsPhone = e.detail.value.parentsPhone  
    


  //   console.log(e);

    console.log(JSON.stringify(data));
    var mesg = data;
    wx.setStorageSync('mesg', mesg)

    wx.showToast({
        title: '提交成功',
        duration:3000,//显示时长
        mask:true,//是否显示透明蒙层，防止触摸穿透，默认：false  
        icon:'success', //图标，支持"success"、"loading"  
        success:function(){     
          wx.reLaunch({
          url: '../index/index',
        })},//接口调用成功
      })
      // this.OldaArr(); 
      var newarr = wx.getStorageSync('mesg');
      const Afls = wx.getStorageSync('Afls') || []
      Afls.unshift(newarr)
      wx.setStorageSync('Afls', Afls)


  },

  onLoad:function(){
    // this.oldAfls();
    
    // this.newAfls();
  },

  // OldaArr:function () {
  //   // var OldaArr =[];
  //   var OldArr  = wx.getStorageSync('mesg');
  //   // var newarr = newarr.concat(oldarr);//连接数组
  //   wx.setStorageSync('OldArr', OldArr);
  //   //新
  // },

  newAfls:function () {
       // 展示本地存储能力
     
  },
  



})

