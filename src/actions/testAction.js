import {
    CHANGE_BUTTON,
    CHANGE_CLICK,
} from './types'


export const changeButton = (buttonState) => {
    return {
        type: CHANGE_BUTTON,
        payload: buttonState
    }
}


export const changeClick = (clickState) => {
    return {
        type: CHANGE_CLICK,
        payload: clickState
    }
}
