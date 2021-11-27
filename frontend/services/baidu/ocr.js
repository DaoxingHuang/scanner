import {
  postData
} from '../../utils/http';
import {
  urlTobase64,
  isRealDevice,
  localFileTobase64
} from '../../utils/common';
import { refresh_token, bdOcrHost } from "./config";
/**
 * 百度OCR 服务 ，@see {@link https://cloud.baidu.com/doc/OCR/s/Ck3h7y2ia}
 * Header,Content-Type为application/x-www-form-urlencoded
 * @author Daoxing.Huang
 */
class BaiDuOcr {

  _getBaiDuUrl(funName) {
    return `${bdOcrHost}/${funName}?access_token=${refresh_token}`
  }

  async _getImageBase64ByUrl(url) {
    let base64 = '';
    console.log('isRealDevice:',isRealDevice());
    if (isRealDevice()) {
      base64 = await localFileTobase64(url, { header: false });
    } else {
      base64 = await urlTobase64(url, { header: false })
    }
    console.log('base64:',base64);
    return base64;
  }

  async generalByImg(imgUrl) {
    const url = this._getBaiDuUrl('general');
    let base64 = await this._getImageBase64ByUrl(imgUrl);
    const ret = await postData(url, {
      image: base64
    }, {
      headers: {
        'Content-Type': "application/x-www-form-urlencoded"
      }
    });
    return ret;
  };

}

export default new BaiDuOcr();