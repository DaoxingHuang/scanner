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
export const transFapiaoData = (data = []) => {
    const result = data && data[0] || {};
    const { StructTexts=[] } = result
    const words_result_num = StructTexts.length
    const words_result = StructTexts.map(item => {
        const {
            ItemText,
            ItemPosition
        } = item
        const [x1, y1, x2, y2] = ItemPosition
        return {
            words: ItemText,
            location: {
                top: y1,
                left: x1,
                width: x2-x1,
                height: y2-y1
            }
        }
    }) || []
    return {
        words_result_num,
        words_result: words_result
    }
}

// recog_doc 数据转换成 ocr_form 数据
export const transDocData = (data) => {
    const result = data && data[0] || {};
    const { TableTexts=[] } = result
    const form_num = TableTexts.length
    const forms_result = TableTexts.map(item => {
        const { content=[] } = item
        const body = content.map(conItem => {
            const {
                ItemText,
                ItemRowIDX, // //起始列号
                ItemColDX, //起始行号
                ItemRowIDXEnd, //结束列号
                ItemColDXEnd //结束行号
            } = conItem
            return {
                column: ItemColDX, // [ItemColDX, ItemColDXEnd],
                row: ItemRowIDX, // [ItemRowIDX, ItemRowIDXEnd],
                rect: {
                    left: 0,
                    top: 0,
                },
                words: ItemText
            }
        })

        return {
            footer: [],
            header: [],
            body
        }
    })

    return {
        form_num,
        forms_result
    }
}