// pages/recognition/index.js
import { urlTobase64 } from '../../utils/common';
import { postData } from '../../utils/http';

Page({
  /**
   * Page initial data
   */
  data: {
    all:false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const imgs = JSON.parse(options.images||[]);
    console.log(imgs);
    const handledImgs = (imgs||[]).map((item,index)=>{
      const clone = {url:item,index,status:0} // status : 0 is not handled
      return clone;
    })
    this.setData({images:handledImgs});
  },

  async startRun(){
    console.log(1234567890);
    const handledImgs = this.data.images;
    const tasks = handledImgs.map((item,index)=>{
      return new Promise((res,reject)=>{
         setTimeout(()=>{
          res(item);
         },index*3000)
      })
    });
    let count = 0;
    tasks.map(task=>{
      task.then(async data=>{
        const index = data.index;
        console.log(1234567890);
        const clone = Object.assign({},data,{status:1});
        this.data.images.splice(index,1,clone);
        const base64 = await urlTobase64(data.url,{header:false});
        const bdurl = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.e5c628434b36f9ad46bf27ef65913e8d.2592000.1640329068.282335-25222063';
        // https://cloud.baidu.com/doc/OCR/s/Ck3h7y2ia
        // Content-Type为application/x-www-form-urlencoded
        const ret = await postData(bdurl,base64,{headers:{'Content-Type':"application/x-www-form-urlencoded"}});
        console.log("ret:",ret);
        const newImages = this.data.images.map(async item=>{
          // https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.f9ba9c5241b67688bb4adbed8bc91dec.2592000.1485570332.282335-8574074
          //25222063
// 0r9hELZ4Gl4wWaP36Ge1cpjo
// 8HO4HAUEyEeGO7L0Z9uSPVk5qViIzXPV 隐藏
// curl -i -k 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=0r9hELZ4Gl4wWaP36Ge1cpjo&client_secret=8HO4HAUEyEeGO7L0Z9uSPVk5qViIzXPV'

          console.log("base64:",base64);
          return {...item,base64};
        })
        this.setData({images:newImages});
        count = count+1;
      })
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.startRun();
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