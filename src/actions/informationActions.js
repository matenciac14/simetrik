
import {
    GET_INFORMATION,
    GET_INFORMATION_SUCCESS,
    GET_INFORMATION_ERROR
} from '../types'

import axiosClient from '../config/axios'

export function getInformationAction(){
    return async (dispatch) =>{
        dispatch(getInformation());
        try {
            const response = await axiosClient.get('/datos')
            dispatch(getInformationOk(response.data))
        } catch (error) {
            dispatch(getInformationError('Ocurrio algun Error'))
        }
    }
}

const getInformation = () =>({
    type:  ' GET_INFORMATION',
    payload: true
})

const getInformationOk = ( datos ) =>({
    type:  ' GET_INFORMATION_SUCCESS',
    payload: datos
})
const getInformationError = (error ) =>({
    type:  ' GET_INFORMATION_ERROR',
    payload: error
})