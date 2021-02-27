
import {
    GET_INFORMATION,
    GET_INFORMATION_SUCCESS,
    GET_INFORMATION_ERROR
} from '../types'


const initialState ={
    information:[],
    error: null,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case  GET_INFORMATION :
            return{
                ...state,
                loading:action.payload
            }
        case GET_INFORMATION_SUCCESS:
            return{
                ...state,
                loading: false,
                information: action.payload,
                error: null
            }
        case GET_INFORMATION_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }

        default:
            return state
    }
}