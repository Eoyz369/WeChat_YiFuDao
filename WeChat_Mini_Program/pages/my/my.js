// pages/my/my.js
Page({



  /**
   * 页面的初始数据
   */
  data: {
    userStatusList: ['请假（出校）'],
  },


    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },



    onLoad:function () {

      var that =this;
      var col = wx.getStorage({
        key:'col',
        success:function (col) {
          console.log(col);
          that.setData({
            collegeConfigs: col.data,// <!-- 选择学院 -->// <!-- collegeConfigs -->
          })
        }
      });


      var mesg = wx.getStorageSync('mesg');
      console.log(mesg);
      this.setData({
        studentName: mesg.studentName,
        collegeConfigs: mesg.collegeConfigs,
       })
     
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
    },

    



      // 请假类型 


    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
    getUserInfo(e) {
      // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
      console.log(e)
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },




















  toCode: function () {
    // var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../QRcode/QRcode'
    })
  },
  toScan: function () {
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  }

})