
import axios from 'axios'

const MAIN_SERVICE = 'http://localhost:8080'

export const getQuestions = async() => {
    try{
        return axios({
            method: 'get',
            url: `${MAIN_SERVICE}/questions`,
        })
    }catch(err){
        alert(err)
    }
}

export const saveExam = async(request) => {
    try{
        return axios({
            method: 'post',
            url: `${MAIN_SERVICE}/exam/save`,
            data: request
        })
    }catch(err){
        alert(err)
    }
}

export const uploadExam = async(request) => {
    try{
        return axios({
            method: 'post',
            url: `${MAIN_SERVICE}/exam/upload`,
            data: request
        })
    }catch(err){
        alert(err)
    }
}

export const getHistory = async() => {
    try{
        return axios({
            method: 'get',
            url: `${MAIN_SERVICE}/history`,
        })
    }catch(err){
        alert(err)
    }
}