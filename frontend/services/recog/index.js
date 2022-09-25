import Config from './config'
import { b64EncodeUnicode, transFapiaoData,  transDocData } from './utils'


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
                        resolve(resData)
                    } else {
                        resolve({error_code: resData.ResultCode, error_msg: ''})
                        // reject(new Error(resData.ResultCode))
                    }
                } else {
                    resolve({error_code: statusCode, error_msg: ''})
                    // reject(new Error(data))
                }
            },
            fail: (err) => {
                console.log('--->>>>>>>>recogFapiao fail = ', err)
                resolve({error_code: err.code || -1, error_msg: err.message})
                // reject(err)
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
            const data = transFapiaoData(res.Results)
            resolve(data)
        }).catch(e => {
            reject(e)
        })
    })
}

// 通用文档识别接口
export const recogDoc = async (filePath) => {
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
            const data = transDocData(res.Results)
            resolve(data)
        }).catch(e => {
            reject(e)
        })
    })
}
