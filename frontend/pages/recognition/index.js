// pages/recognition/index.js
import { urlTobase64, getEnv, localFileTobase64,copyText } from '../../utils/common';
import { postData } from '../../utils/http';
import BaiDuOcrService from "../../services/baidu/ocr";
Page({
  /**
   * Page initial data
   */
  data: {
    all:false,
    images:[],
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
  seeResult:function(e){
    const index = e.currentTarget.dataset.index;
    console.log("seeResult:",index);
    const clickItem = this.data.images[index];
    if(clickItem&&!(clickItem.status===2)){
      console.log("status:",clickItem.status);
      return;
    }
    this.seeSingleResult(clickItem);
  },
  async startRun(){
    const handledImgs = this.data.images;
    const that = this;
    handledImgs.map(async (item,index)=>{
        const clone = Object.assign({},item,{status:1});
        const ret = await BaiDuOcrService.generalByImg(item.url);
        if(!ret.error_code&&ret.words_result_num){
          item.status = 2;
          item.rego = ret;
        }
        else if(!ret.words_result_num){
          item.status = 9;
        }
        else{
          item.status = 3;
        }
        that.setData({images:that.data.images.map(item=>item)});
    });

  },

  seeSingleResult(item){
    const data = Object.assign({},item);
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

  coypAll(){
    const handledImgs = this.data.images;
    const allText=[];
    handledImgs.map((item)=>{
      const words =  ((item.rego&&item.rego.words_result)||[]).map(item=>item.words);
      words.lenght>=0&&allText.push(words);
    })
    console.log('allText:',allText);
    if(allText.length<=0){
      wx.showToast({
        icon:"error",
        title: '无可复制文字'
      });
      return;
    }
    copyText(allText.join(''));
    // return allText.join('');
  },

  onTabbarChange(e){
    const action = e.detail;
    // const images = this.data.imagses
    console.log("action:",action,action === 'share');
    if(action === 'copy'){
      this.coypAll();
    }
    else if(action === 'share'){
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
    }
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