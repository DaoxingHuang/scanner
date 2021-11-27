// pages/my-self/index.js
const APP = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: null,
    imgway:"原图",
    show:false,
    actions: [
      {
        name: '原图',
      },
      {
        name: '压缩(高质量)',
      },
      {
        name: '压缩(低质量)',
      },
    ],
  },

  selectImageWay:function(e){
    this.setData({show:true})
  },

  onSelect:function(e){
    console.log(e.detail.name);
    this.setData({show:false,imgway:e.detail.name})
  },

  addFavorite:function(e){
    wx.showToast({
      title: '收藏成功',
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("onLoad getUserProfile:",);
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于展示用户资料', 
      success: (res) => {
        console.log("用于展示用户资料:",res)
        // get useerinfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log("onReady:",APP.globalData.userInfo);
    this.setData({userInfo:APP.globalData.userInfo});
  },

  getPhoneNumber (e) {
    wx.login({
      success:(res)=>{
        if (res.code) {
          console.log('登录成功！' + res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
    console.log('getPhoneNumber:',e.detail);
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },


  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("onShow:",APP.globalData.userInfo);
    this.setData({userInfo:APP.globalData.userInfo});
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})