var a = [ {
    text: "全部状态",
    value: 100
}, {
    text: "已撤回",
    value: 0
}, {
    text: "待审批",
    value: 1
}, {
    text: "不通过",
    value: 2
}, {
    text: "已通过",
    value: 3
}, {
    text: "休假中",
    value: 4
}, {
    text: "已逾期",
    value: 5
}, {
    text: "已结束",
    value: 99
} ], i = [ {
    text: "全部状态",
    value: 100
}, {
    text: "已撤回",
    value: 0
}, {
    text: "待审批",
    value: 1
}, {
    text: "不通过",
    value: 2
}, {
    text: "已通过",
    value: 3
}, {
    text: "外出中",
    value: 4
}, {
    text: "已逾期",
    value: 5
}, {
    text: "已结束",
    value: 99
} ], s = [ {
    text: "全部状态",
    value: 100
}, {
    text: "已撤回",
    value: 0
}, {
    text: "待审批",
    value: 1
}, {
    text: "不通过",
    value: 2
}, {
    text: "已通过",
    value: 3
}, {
    text: "休假中/外出中",
    value: 4
}, {
    text: "已逾期",
    value: 5
}, {
    text: "已结束",
    value: 99
} ];

Page({
    data: {
        type: 1,
        option1: [ {
            text: "全部类型",
            value: 100
        }, {
            text: "请假",
            value: 1
        }, {
            text: "外出",
            value: 2
        } ],
        option2: s,
        value1: 100,
        value2: 100,

    },
    
    toApplication: function () {
      // var id = e.currentTarget.id;
      wx.navigateTo({
        url: '../application/application'
      })
    },

    toClearStore: function () {
      // var id = e.currentTarget.id;
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    toDetail: function () {
      // var id = e.currentTarget.id;
      wx.navigateTo({
        url: '../reviewDetail/reviewDetail'
      })
    },

    onShow:function () {
      var that =this;
      var mesg = wx.getStorageSync('mesg');
      console.log(mesg);
      this.setData({
  
        beginTimeFormat: mesg.beginTimeFormat,// <!-- 离校时间 -->// <!-- beginTimeFormat -->
        endTimeFormat: mesg.endTimeFormat,// <!-- 返校时间 -->// <!-- endTimeFormat -->
        leaveForReason: mesg.leaveForReason,// <!-- 请假原因 -->// <!-- leaveForReason -->

  
  
  
  
       })
    }



});


