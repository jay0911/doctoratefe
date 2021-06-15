import {
    getQuestions,
    saveExam,getHistory,uploadExam
} from '../api/api'

import {
    INIT,GENERIC_CHANGE,CHANGE_PAGE,GET_QUESTIONS,GENERIC_USER_DATA_CHANGE,GET_QUESTIONS_COPY,GET_HISTORIES,MANIPULATE_END_EXAM_BUTTON
} from './types'

export const getQuestion = (history) => {
    return (dispatch) => {
        getQuestions().then(async response => {
            console.log(response)
            dispatch({type: GET_QUESTIONS,payload:{value:response.data}})
            dispatch({type: GET_QUESTIONS_COPY,payload:{value:response.data}})
            history.push("/questions");
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

export const examButtonChange = (data) => {
    return {
        type: MANIPULATE_END_EXAM_BUTTON,
        payload:{value:data}
    }
}

export const init = () => {
    return {
        type: INIT
    }
}

export const changePage = (data) => {
    return {
        type: CHANGE_PAGE,
        payload:{value:data}
    }
}

export const answerTheExam = (id,answer,examfinalList) => {

    examfinalList.forEach((element, index) => {
        if(element.id === id){
            console.log('found')
            examfinalList[index].userAnswer = answer;
        }
    })

    return {
        type: GENERIC_USER_DATA_CHANGE,
        payload:{prop:'examfinal',value:examfinalList}
    }
}


export const saveMyExam = (user,history) => {
    return (dispatch) => {
        saveExam(user).then(async response => {
            dispatch(getHistories(history));
        }).catch(err => {      
            console.log(err)
        })
    }
}

export const uploadMyExam = (base64) => {
    return (dispatch) => {
        uploadExam({base64String:base64}).then(async response => {
            console.log(response)
        }).catch(err => {      
            console.log(err)
        })
    }
}




export const getHistories = (history) => {
    return (dispatch) => {
        getHistory().then(async response => {
            dispatch({type: GET_HISTORIES,payload:{value:response.data}})
            history.push("/result");
        }).catch(err => {      
            console.log(err)
        })
    }
}

export const genericChange = (prop,value) => {
    return {
        type: GENERIC_CHANGE,payload:{prop:prop,value:value}
    }
}

