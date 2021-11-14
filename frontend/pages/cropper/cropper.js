// pages/cropper/cropper.js

// const fabric = require('../../utils/fabric.min.js');
// const sugar = require('miniprogram-canvas-sugarjs/src/sugarjs');

// import  sugar from 'miniprogram-canvas-sugarjs/.js';

// console.log("sugar:",sugar);
Page({

  /**
   * Page initial data
   */
  data: {
    url:'',
    ctx:null,
    compressImgs:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // const ctx = wx.createCanvas()
    this.setData({url:options.url});
    this.initCompressImgs(options.url);
    this.cropper = this.selectComponent("#image-cropper");
    this.setData({
        src: options.url
    });
  },

  initCompressImgs:function(url){
    const ret = [];
    for(let i =0;i<6;i++){
      ret.push({id:i,url:url})
    }
    this.setData({compressImgs:ret});
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log('onReady');
    wx.createSelectorQuery()
    .select('#canvas')
    .fields({
      node: true,
      size: true,
    })
    .exec(this.init.bind(this))
  },
  init(res) {
  },

  nineLeft(){
    const ctx = this.data.ctx;
    const canvas = this.data.canvas;
    ctx.clearRect(0, 0, 300, 300);



    console.log(123,canvas,ctx.rotate,ctx.draw);
    ctx.rotate(90 * Math.PI / 180);
    const img = canvas.createImage();
    img.onload = () => {
      console.log(567);
      ctx.drawImage(img, 0, 0, 300, 300);
    }
    img.src = this.data.url;
    // ctx.rotate(20 * Math.PI / 180);
    // ctx.draw();
    // this.data.ctx.draw();
  },

  render(canvas, ctx) {
    ctx.clearRect(0, 0, 300, 300)
    this.drawBall(ctx)
    this.drawCar(ctx)
  },

  drawBall(ctx) {
    const p = this.position
    p.x += p.vx
    p.y += p.vy
    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.x <= 7) {
      p.vx = 2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.y <= 7) {
      p.vy = 2
    }

    function ball(x, y) {
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = '#1aad19'
      ctx.strokeStyle = 'rgba(1,1,1,0)'
      ctx.fill()
      ctx.stroke()
    }

    ball(p.x, 150)
    ball(150, p.y)
    ball(300 - p.x, 150)
    ball(150, 300 - p.y)
    ball(p.x, p.y)
    ball(300 - p.x, 300 - p.y)
    ball(p.x, 300 - p.y)
    ball(300 - p.x, p.y)
  },

  drawCar(ctx) {
    if (!this._img) return
    if (this.x > 350) {
      this.x = -100
    }
    ctx.drawImage(this._img, this.x++, 150 - 25, 100, 50)
    ctx.restore()
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