
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
