
import {combineReducers} from 'redux'
import TestReducer from './TestReducer'
import ExamReducer from './ExamReducer'


export default combineReducers({
    test:TestReducer,
    exam:ExamReducer
})