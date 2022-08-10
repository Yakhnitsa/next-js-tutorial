import merge from 'deepmerge';
import base from './base'
import {jsonUIConfigApi} from "../../api/uiConfigApi";

const overwriteMerge = (destinationArray, sourceArray) => {
    return sourceArray;
}

export const getUIConfigByMerchantCode = async (merchantCode) => {

    let merchantConfig = await jsonUIConfigApi(merchantCode);
    console.log(merchantConfig)

    return merge(base, merchantConfig, { arrayMerge: overwriteMerge });
}