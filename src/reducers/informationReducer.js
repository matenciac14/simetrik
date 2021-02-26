
// import {
//     DESCARGAR_INFORMACION,
//     DESCARGAR_INFORMACION_EXITO,
//     DESCARGAR_INFORMACION_ERROR
// } from '../types'


const initialState ={
    information:[],
    error: null,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}