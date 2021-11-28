import BaiDuOcrService from "../../services/baidu/ocr";

Page({

  /**
   * Page initial data
   */
  data: {
    url:''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({url:options.url});
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  async onImgLoad(e){
    // await this.gotToRecog();
  },

  async gotToRecog(e){
    wx.showLoading({
      title: '正在识别',
    })
    try{
      const ret = await BaiDuOcrService.formByImg(this.data.url);
      if(ret.error_code){
        wx.showToast({
          icon:"error",
          title: '识别失败',
        })
        return;
      }
      wx.navigateTo({
        url: '/pages/reco-result/index?url='+this.data.url,
        events: {
        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: ret })
        }
      });
      console.log(ret);
    }
    catch(e){

    }
    finally{
      wx.hideLoading();
    }
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

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