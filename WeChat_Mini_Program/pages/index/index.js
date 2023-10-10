// 在微信小程序中定义一个页面，引入了Page方法  
Page({    
  // 定义页面的初始数据，其中包括一个imgPrefix的数组  
  data: {    
    imgPrefix: [    
      // 通知的名称、路径和图标  
      {name:'通知',path:'/pages/notice/notice',icon:'/assets/img/index/2000.png'},  
      // 健康上报的名称、路径和图标  
      {name:'健康上报',path:'/pages/healthy/healthy',icon:'/assets/img/index/2001.png'},  
      // 问卷填写的名称、路径和图标  
      {name:'问卷填写',path:'/pages/location/location',icon:'/assets/img/index/2002.png'},  
      // 定位签到的名称、路径和图标  
      {name:'定位签到',path:'/pages/signInList/signInList',icon:'/assets/img/index/2003.png'},  
      // 离校返校的名称和图标（没有路径）  
      {name:'离校返校',icon:'/assets/img/index/2004.png'},  
      // 活动签到的名称、路径和图标  
      {name:'活动签到',path:'/pages/activitySign/activitySign',icon:'/assets/img/index/2005.png'},  
      // 请假申请的名称、路径和图标  
      {name:'请假申请',path:'/pages/askForLeaveList/askForLeaveList',icon:'/assets/img/index/2006.png'},  
      // 出入校二维码的名称、路径和图标  
      {name:'出入校二维码',path:'/pages/QRcode/QRcode',icon:'/assets/img/index/2007.png'},   
    ],    
    //初始的轮播图列表，为空数组  
    swiperList: []    
  },    
    
  // 当页面显示出来时执行onShow函数，获取存储的轮播图列表，并为其添加默认的图片  
  onShow: function () {    
    // 从微信本地存储中获取'swiperList'的数据，如果不存在则使用空数组  
    var swiperList = wx.getStorageSync('swiperList') || [];    
    // 定义默认的图片路径  
    var imgPath = '/assets/img/swiper/swiper-1.png';    
    // 使用setData方法设置页面数据，将默认图片路径添加到轮播图列表的开头  
    this.setData({    
      swiperList: [imgPath].concat(swiperList)    
    });    
  },    
    
  // 上传轮播图列表到服务器的函数，接受一个事件对象作为参数  
  upSwiperList: function(e) {    
    // 调用微信的chooseMedia接口，选择图片  
    wx.chooseMedia({    
      // 最多选择的数量为1  
      count: 1,    
      // 可选择的媒体类型为图片  
      mediaType: ['image'],    
      // 可选择的来源为相册和相机  
      sourceType: ['album', 'camera'],    
      // 选择图片的最大时长为30秒  
      maxDuration: 30,    
      // 只能选择后置相机拍摄的图片  
      camera: 'back',    
      // 默认的图片路径  
      filePath: '/assets/img/swiper/swiper-1.png',    
    })    
    // 当选择图片成功后执行then中的函数，打印图片缓存路径，保存选择的图片到本地存储，并更新页面中的轮播图列表  
    .then(res => {    
      console.log('图片缓存成功', res.tempFiles[0].tempFilePath);    
      // 选择的图片路径  
      var swiperImg = res.tempFiles[0].tempFilePath;    
      // 将选择的图片路径保存到本地存储中  
      wx.setStorageSync('swiperImg', swiperImg);    
      // 将选择的图片添加到轮播图列表的末尾，并更新页面数据  
      this.setData({ swiperList: [ ...this.data.swiperList, swiperImg] });    
    })    
    // 当选择图片失败时执行catch中的函数，打印错误信息  
    .catch(err => {    
      console.error('选择图片失败', err);    
    });    
  }    
})