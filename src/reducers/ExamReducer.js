import {GET_QUESTIONS,GENERIC_USER_DATA_CHANGE} from '../actions/types'

const INITIAL_STATE = {exam:null,user:{name:null,score:0,dateStart:null,dateFinished:null,answers:null}}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_QUESTIONS:
            return {...state,exam:action.payload.value}
        case GENERIC_USER_DATA_CHANGE:
            return {...state,user:{...state.user,[action.payload.prop]:action.payload.value}}
        default:
            return state
    }
}

