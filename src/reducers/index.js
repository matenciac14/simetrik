import {combineReducers} from 'redux'
import informationReducer from './informationReducer'

export default combineReducers({
    informations:informationReducer
})