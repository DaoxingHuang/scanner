import { weBtoa } from '../../utils/jwt'

// base64，js原生方法btoa()实现
export const b64EncodeUnicode = (str) => {
    return weBtoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, 
                function(match, p1) {
                    return String.fromCharCode('0x' + p1);
                })
            );
}

// recog_fapiao 数据转换成 ocr_general 数据
export const transFapiaoData = (data) => {
    const result = data;
    return result
}

// recog_doc 数据转换成 ocr_form 数据
export const transDocData = (data) => {
    const result = data
    return result
}