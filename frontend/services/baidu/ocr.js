
const bdOcrHost = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general';
const refresh_token= "24.cfdd99aa7171fa11274725912ca2632a.2592000.1640516821.282335-25239823";

function getOcrUrl(){
  return `${bdOcrHost}?access_token=${refresh_token}`
}
module.exports={
  getOcrUrl,
}
