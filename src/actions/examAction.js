import {
    getQuestions
} from '../api/api'

import {
    GET_QUESTIONS,GENERIC_USER_DATA_CHANGE
} from './types'

export const getQuestion = () => {
    return (dispatch) => {
        getQuestions().then(async response => {
            console.log(response)
            dispatch({type: GET_QUESTIONS,payload:{value:response.data}})
        }).catch(err => {      
            console.log(err)
        })
    }
}

export const genericUserChange = (prop,data) => {
    return {
        type: GENERIC_USER_DATA_CHANGE,
        payload:{prop:prop,value:data}
    }
}
