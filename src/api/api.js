
import axios from 'axios'

const MAIN_SERVICE = 'ec2-54-169-65-143.ap-southeast-1.compute.amazonaws.com:4000'

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