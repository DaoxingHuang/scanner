import Config from './config'
import { b64EncodeUnicode, transFapiaoData, /* transDocData */ } from './utils'


// 小程序uploadFile封装
const uploadFile = ({
    url, 
    filePath, 
    fileName, 
    formData={}
}) => {
    return new Promise((resolve, reject) => {
        // Basic Authorization 认证
        const user = Config.user
        const passwd = Config.passwd
        const credentials = user + ':' + passwd
        const authorization = 'Basic ' + b64EncodeUnicode(credentials)

        wx.uploadFile({
            url, 
            filePath, 
            name: fileName,
            header: {
                'Authorization': authorization
            },
            formData,
            success: (res) => {
                console.log('--->>>>>>>>recogFapiao success = ', res)
                const { statusCode, data } = res
                if(statusCode === 200) {
                    let resData = data
                    try {
                        resData = JSON.parse(data)
                    } catch(e) {
                        resData = data
                    }
                    if(resData.ResultCode == 200) {
                        const result = transFapiaoData(resData.Results)
                        resolve(result)
                    } else {
                        reject(new Error(resData.ResultCode))
                    }
                } else {
                    reject(new Error(data))
                }
            },
            fail: (err) => {
                console.log('--->>>>>>>>recogFapiao fail = ', err)
                reject(err)
            }
        })
    })
}

// 票据识别接口
export const recogFapiao = async (filePath) => {
    return new Promise((resolve, reject) => {
        // 请求路径
        const url = `${Config.apiDomain}/api/recog_fapiao`
        // fileName
        const fileName = 'imagefile'
        // formData
        const formData = {
            'F_recog_table_detail':1
        }

        uploadFile({
            url,
            filePath,
            fileName,
            formData
        }).then(res => {
            resolve(res)
        }).catch(e => {
            reject(e)
        })
    })
}

// 通用文档识别接口
export const recogDoc = (filePath) => {
    return new Promise((resolve, reject) => {
        // 请求路径
        const url = `${Config.apiDomain}/api/recog_doc`
        // fileName
        const fileName = 'imagefile'

        uploadFile({
            url,
            filePath,
            fileName
        }).then(res => {
            resolve(res)
        }).catch(e => {
            reject(e)
        })
    })
}
