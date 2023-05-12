import {getApi, postApi, putApi, deleteApi} from '../genericServices'

export async function getAbout(){
    return await getApi(`about.json`)
}