import {LOGIN_USER, LOGOUT_USER} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return{
                ...state,
                usuario: action.payload.user,
                logado: true
            }
        case LOGOUT_USER:
            return{
                ...state,
                usuario: null,
                logado: false
            }
        default:
            return state;
    }
}