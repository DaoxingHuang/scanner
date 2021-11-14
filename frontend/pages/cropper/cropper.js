import {imgFilter} from '../../utils/constants';
Page({

  /**
   * Page initial data
   */
  data: {
    url:'',
    ctx:null,
    compressImgs:[],
    filter:''
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
    for(let i =0;i<imgFilter.length;i++){
      const item = imgFilter[i];
      ret.push(Object.assign({},item,{url:url}))
    }
    this.setData({compressImgs:ret});
  },

  addFilter:function(e){
    console.log(e.currentTarget.dataset.filter);
    this.setData({filter:e.currentTarget.dataset.filter})
  },

  rotate(angle=90) {
    //在用户旋转的基础上旋转90°
    this.cropper.setAngle(this.cropper.data.angle += angle);
 },

 rotateLeft() {
  this.rotate(-90);
},

rotateRight() {
  this.rotate(90);
},

narrow() {
  this.data.narrow = setInterval(() => {
      this.cropper.setTransform({
          scale: -0.02
      });
  }, 1000 / 60)
},
enlarge() {
  this.data.enlarge = setInterval(() => {
      this.cropper.setTransform({
          scale: 0.02
      });
  }, 1000 / 60)
},


 end(e) {
  clearInterval(this.data[e.currentTarget.dataset.type]);
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