import {INIT,GENERIC_CHANGE,CHANGE_PAGE,MANIPULATE_END_EXAM_BUTTON,GET_HISTORIES,GET_QUESTIONS,GENERIC_USER_DATA_CHANGE,GET_QUESTIONS_COPY} from '../actions/types'

const INITIAL_STATE = {fileName:null,fileBase64:null,page:'Home',showEndExam:false,history:null,examfinal:null,exam:null,user:{name:null,dateStart:null,dateFinished:null,examfinal:null}}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case INIT:
            return INITIAL_STATE
        case GENERIC_CHANGE:
            return {...state,[action.payload.prop]:action.payload.value}
        case GET_QUESTIONS:
            return {...state,exam:action.payload.value}
        case CHANGE_PAGE:
            return {...state,page:action.payload.value}
        case GET_HISTORIES:
            return {...state,history:action.payload.value}
        case GET_QUESTIONS_COPY:
            return {...state,examfinal:action.payload.value}
        case MANIPULATE_END_EXAM_BUTTON:
            return {...state,showEndExam:action.payload.value}
        case GENERIC_USER_DATA_CHANGE:
            return {...state,user:{...state.user,[action.payload.prop]:action.payload.value}}
        default:
            return state
    }
}

