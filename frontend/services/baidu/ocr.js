
const bdOcrHost = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general';
const refresh_token= "24.e5c628434b36f9ad46bf27ef65913e8d.2592000.1640329068.282335-25222063";

function getOcrUrl(){
  return `${bdOcrHost}?access_token=${refresh_token}`
}
module.exports={
  getOcrUrl,
}
