const SET_TOKEN = 'web/token/SET_TOKEN'
const INIT_TOKEN = 'web/token/INIT_TOKEN'

export function setToken(value){
    return {
        type: SET_TOKEN,
        payload: {
            token: value
        }
    }
}

export function initToken(value){
    return {
        type: INIT_TOKEN,
        payload: {}
    }
}

const INIT_STATE = {
    token: {}
}

export default function tokenDuck(state = INIT_STATE, action){
    switch (action.type){
        case SET_TOKEN:
            var newState = Object.assign({}, state)
            newState.token = action.payload.token
            return newState
        case INIT_TOKEN:
            var newState = Object.assign({}, state)
            newState.token = {}
            return newState
        default:
            return state
    }
}