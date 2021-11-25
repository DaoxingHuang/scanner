// pages/recognition/index.js
import { urlTobase64, getEnv, localFileTobase64 } from '../../utils/common';
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
    let count = 0;
    handledImgs.map(async (item,index)=>{
        const clone = Object.assign({},item,{status:1});
        console.log("clone:",clone);
        this.data.images.splice(index,1,clone);
        const isPrd = getEnv()==='pro';
        let base64='';
        try{
          !isPrd && (base64 = await urlTobase64(item.url,{header:false}));
          isPrd && (base64 = await localFileTobase64(item.url,{header:false}));
        }
        catch(e){
          console.log("catch base64:",e);
        }
        console.log(getEnv());
        // const base64 = await urlTobase64(item.url,{header:false});
        const bdurl = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.e5c628434b36f9ad46bf27ef65913e8d.2592000.1640329068.282335-25222063';
        // https://cloud.baidu.com/doc/OCR/s/Ck3h7y2ia
        // Content-Type为application/x-www-form-urlencoded
        const ret = await postData(bdurl,{image:base64},{headers:{'Content-Type':"application/x-www-form-urlencoded"}});
        const newImages = this.data.images.map(item=>{
          // https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.
          return {...item,base64,rego:ret};
        });
        console.log("newImages:",newImages);
        this.setData({images:newImages});
        count = count+1;
        if(count===this.data.images.length){
          this.setData({all:true});
        }
    });
    // return;
    // const tasks = handledImgs.map((item,index)=>{
    //   return new Promise((res,reject)=>{
    //      setTimeout(()=>{
    //       res(item);
    //      },index*3000)
    //   })
    // });
    // let count = 0;
    // tasks.map(task=>{
    //   task.then(async data=>{
    //     const index = data.index;
    //     const clone = Object.assign({},data,{status:1});
    //     this.data.images.splice(index,1,clone);
    //     const base64 = await urlTobase64(data.url,{header:false});
    //     console.log(base64);

    //     const bdurl = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.e5c628434b36f9ad46bf27ef65913e8d.2592000.1640329068.282335-25222063';
    //     // https://cloud.baidu.com/doc/OCR/s/Ck3h7y2ia
    //     // Content-Type为application/x-www-form-urlencoded
    //     const ret = await postData(bdurl,{image:base64},{headers:{'Content-Type':"application/x-www-form-urlencoded"}});
    //     const newImages = this.data.images.map(item=>{
    //       // https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.
    //       return {...item,base64,rego:ret};
    //     });
    //     console.log("newImages:",newImages);
    //     this.setData({images:newImages});
    //     count = count+1;
    //   })
    // })
  },

  onTabbarChange(e){
    console.log(e.detail);
    const data = Object.assign({},this.data.images[0]);
    console.log(data);
    delete data.base64;
    wx.navigateTo({
      url: '/pages/word-editor/index?item='+ encodeURI(JSON.stringify(data)),
      events:{
           // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data })
      }
    })
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: async function () {
    await this.startRun();
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