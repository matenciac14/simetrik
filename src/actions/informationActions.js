import {
    GET_INFORMATION,
    GET_INFORMATION_SUCCESS,
    GET_INFORMATION_ERROR,
    START_SEARCH_TEXT,
    START_SEARCH_DATE,
    START_SEARCH_NUMBER
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
    type:  'GET_INFORMATION',
    payload: true
})

const getInformationOk = ( datos ) =>({
    type:  'GET_INFORMATION_SUCCESS',
    payload: datos
})
const getInformationError = (error ) =>({
    type:  'GET_INFORMATION_ERROR',
    payload: error
})

export function setDataSearch(datos) {
    return async (dispatch) => {
        if (datos.type === 'date') {
            await dispatch(dataSearchDate(datos.inputvalue))
            return
        }
        if (datos.type === 'number') {
            await dispatch(dataSearchNumber(datos.inputvalue))
            return
        }
        if (datos.type === 'text') {
            await dispatch(dataSearchText(datos.inputvalue))
            return
        }
    }
}

const dataSearchText = (val) =>({
    type:'START_SEARCH_TEXT',
    payload: val
})

const dataSearchDate = ( val ) =>({
    type:'START_SEARCH_DATE',
    payload: val
})
const dataSearchNumber = (val ) =>({
    type:'START_SEARCH_NUMBER',
    payload: val
})