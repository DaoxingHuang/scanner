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
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // const ctx = wx.createCanvas()
    this.setData({url:options.url});
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }
    this.x = -100;
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
    const canvas = res[0].node
    console.log(sugar)
    const sugarCanvas = new sugar.Canvas({
      canvas: canvas,
      width: 300,
      height:300,
      backgroundColor: 'skyblue'
    });
    sugarCanvas.Image.fromURL(this.data.url, (img) => {
      img.set({
        scaleX: 0.5,
        scaleY: 0.5,
        left: 0,
        top: 0
      })
      sugarCanvas.add(img).setActiveObject(img)
    })
    return ;
//     console.log(res,this.data.url);
//     const width = res[0].width
//     const height = res[0].height
  
//     const canvas = res[0].node
//     const ctx = canvas.getContext('2d')
//     ctx.translate(150,150);

//     this.setData({ctx,canvas});
// //     console.log('draw:',ctx.draw);
// //     ctx.moveTo(10, 10)
// // ctx.lineTo(100, 10)
// // ctx.lineTo(100, 100)
// // ctx.stroke()
// // ctx.draw()
//     const dpr = wx.getSystemInfoSync().pixelRatio
//     canvas.width = width * dpr
//     canvas.height = height * dpr
//     ctx.scale(dpr, dpr);
//     // ctx.rotate(20 * Math.PI / 180);
//     console.log("width * dpr",width * dpr," height * dpr",height * dpr)
//     // const renderLoop = () => {
//     //   this.render(canvas, ctx)
//     //   canvas.requestAnimationFrame(renderLoop)
//     // }
//     // canvas.requestAnimationFrame(renderLoop)
//     // ctx.translate(150,150);
//     // ctx.rotate(45 * Math.PI / 180);
//     const img = canvas.createImage()
//     img.onload = () => {
//       console.log(567);
//       ctx.drawImage(img, 0, 0, 300, 300);
//     }
//     img.src = this.data.url;
    // console.log("ctx:", ctx.drawImage);
    // wx.downloadFile({
    //     url: this.data.url,
    //     success:(res) => {
    //       console("", res.tempFilePath)
    //       ctx.drawImage(this.data.url, 0, 0, 300, 300);
    //   }
    // });
    // ctx.draw();
    // this.render(canvas, ctx);
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