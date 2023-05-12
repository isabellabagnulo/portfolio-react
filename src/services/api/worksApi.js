import {getApi, postApi, putApi, deleteApi} from '../genericServices'

export async function getWorks(){
    return await getApi(`works.json`)
}