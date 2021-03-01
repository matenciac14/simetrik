
import {
    GET_INFORMATION,
    GET_INFORMATION_SUCCESS,
    GET_INFORMATION_ERROR,
    START_SEARCH_TEXT,
    START_SEARCH_DATE,
    START_SEARCH_NUMBER
} from '../types'


const initialState ={
    usuarios:[],
    tableros:[],
    conciliaciones:[],
    fuentes:[],
    error: null,
    loading: false
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INFORMATION :
            return{
                ...state,
                loading:action.payload
            };
        case GET_INFORMATION_SUCCESS:
            return{
                ...state,
                loading: false,
                usuarios: action.payload.usuarios,
                tableros: action.payload.tableros,
                conciliaciones: action.payload.conciliaciones,
                fuentes: action.payload.fuentes,
                error: null
            };
        case GET_INFORMATION_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            };
        case START_SEARCH_TEXT:  
        console.log(state.usuarios.filter( user => user.name.lastName.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 ))
            return{
                ...state,
                usuarios: state.usuarios.filter( user => user.name.lastName.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 || user.company.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1),
                tableros: state.tableros.filter( tablero => tablero.dashboardName.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 ),
                conciliaciones: state.conciliaciones.filter( conciliacion => conciliacion.conciliationName.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 ),
                fuentes: state.fuentes.filter( fuente => fuente.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 || fuente.company.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
            };

        case START_SEARCH_DATE:
            return {
                ...state,
                usuarios: state.usuarios.filter( user => user.createdAt.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 ),
                tableros: state.tableros.filter( tablero => tablero.timestamp.createdAt.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 || tablero.timestamp.updateAt.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 ),
                conciliaciones: state.conciliaciones.filter( conciliacion => conciliacion.timestamp.createdAt.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 || conciliacion.timestamp.updateAt.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 ),
                fuentes: state.fuentes.filter( fuente => fuente.timestamp.createdAt.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 || fuente.timestamp.updateAt.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 )
            };

        case START_SEARCH_NUMBER:
            return {
                ...state,
                // eslint-disable-next-line eqeqeq
                usuarios: state.usuarios.filter( user =>  user.age == action.payload),
                tableros: state.tableros.filter( tablero => tablero._id.indexOf(action.payload) !== -1 ),
                conciliaciones: state.conciliaciones.filter( conciliacion => conciliacion.balance.indexOf(`$ ${action.payload}`) !== -1 ),
                fuentes: state.fuentes.filter( fuente => fuente._id.indexOf(action.payload) !== -1 )
            };

        default:
            return state
    }
}