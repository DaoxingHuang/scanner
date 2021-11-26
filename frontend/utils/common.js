function isPromse(obj){
  return (!!obj
  && (typeof obj === 'object' || typeof obj === 'function') 
  && typeof obj.then === 'function');
}

function urlTobase64(url,options){
  console.log("urlTobase64:", url);
  return new Promise((reslove,reject)=>{
    wx.request({
      url:url,
      responseType: 'arraybuffer', //最关键的参数，设置返回的数据格式为arraybuffer
      success:res=>{
        //把arraybuffer转成base64
            let base64 = wx.arrayBufferToBase64(res.data); 
            //不加上这串字符，在页面无法显示的哦
            const withHeader = options.header||true;
            base64　= withHeader ? 'data:image/jpeg;base64,' + base64　:base64　;
            reslove(base64);
            //打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
            // console.log(base64)　
          }
    })
  })
}

function localFileTobase64(path,options){
  const fileManager = wx.getFileSystemManager();
  let base64 = fileManager.readFileSync(path, 'base64');
  return new Promise((reslove,reject)=>{
    const withHeader = options.header||true;
     base64　= withHeader ? 'data:image/jpeg;base64,' + base64　:base64　;
     reslove(base64);
  })
}

function getEnv() {
  let res = wx.getSystemInfoSync();
  // 客户端中host有值，本地开发的时候host为null
  if (res.host) {
    return 'pro';
  } else {
    return 'dev';
  }
}

function copyText(data) {
  wx.setClipboardData({
    data,
    success: function (res) {
      wx.getClipboardData({
        success: function (res) {
          wx.showToast({
            title: '复制成功'
          })
        }
      })
    }
  })
}

module.exports={
  isPromse,urlTobase64,getEnv,localFileTobase64,copyText
}