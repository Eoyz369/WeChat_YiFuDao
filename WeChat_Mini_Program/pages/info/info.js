// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infosAd:[
      {name:'曾俊风',phone:'18040013960'},
        {name:'康露',phone:'14929031980'},
        {name:'陆烟湄',phone:'16632894166'},
        {name:'钱琼',phone:'15038632660'},
        {name:'孟高远',phone:'19857468762'},
        {name:'姜元勋',phone:'13461541427'},
        {name:'郑俊能',phone:'16608035668'},
    ],
    infos:[
        {name:'史艺',phone:'18844524220'},
        {name:'石琴',phone:'17510948140'},
        {name:'萧玲丽',phone:'13459018177'},
        {name:'魏晓',phone:'16684833946'},
        {name:'夏和豫',phone:'18188876577'},
        {name:'黄永茹',phone:'13640445679'},
        {name:'苏靖巧',phone:'13794418253'},
        {name:'钱汇',phone:'13830298062'},
        {name:'白睿慈',phone:'14704847876'},
        {name:'邱文栋',phone:'15200467716'},
        {name:'丁志行',phone:'15601565207'},
        {name:'戴高远',phone:'15113623374'},
        {name:'史亿',phone:'17375804734'},
        {name:'段涵育',phone:'14920302664'},
        {name:'韩鸿光',phone:'19958641834'},
        {name:'马霭',phone:'17540773862'},
        {name:'夏建元',phone:'13086371759'},
        {name:'金华翰',phone:'15824272965'},
        {name:'黎飞星',phone:'16603687213'},
        {name:'张俊艾',phone:'14508195320'},
        {name:'孔喜',phone:'17179102840'},
        {name:'谭越彬',phone:'17802382684'},
        {name:'苏紫薇',phone:'17840592262'},
        {name:'熊雁',phone:'13171976381'},
        {name:'汤菀',phone:'13468786913'},
        {name:'廖承平',phone:'15613188289'},
        {name:'郭鹏云',phone:'17527713865'},
        {name:'漕忆南',phone:'15041518628'},
        {name:'蒋明亮',phone:'16633092593'},
        {name:'沈映梦',phone:'17280106335'},
        {name:'朱伟泽',phone:'17312344152'},

    ]

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
    var col = wx.getStorage({
      key:'col',
      success:function (col) {
        console.log(col);
        that.setData({
          collegeConfigs: col.data,// <!-- 选择学院 -->// <!-- collegeConfigs -->
        })
      }
    });
    this.setData({
    // <!-- 班级 -->// <!-- studentClass -->
      studentClass: mesg.studentClass,
    // <!-- 辅导员姓名 -->// <!-- counselorName -->
      counselorName: mesg.counselorName,
         // <!-- 辅导员电话 -->// <!-- counselorPhone -->
         counselorPhone: mesg.counselorPhone,
     })
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