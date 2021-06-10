import {CHANGE_BUTTON,CHANGE_CLICK} from '../actions/types'

const INITIAL_STATE = {clickState:false,buttonState:true}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_BUTTON:
            return {...state,buttonState:action.payload}
        case CHANGE_CLICK:
            return {...state,clickState:action.payload}
        default:
            return state
    }
}

