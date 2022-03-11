import axios from 'axios';
import {GET_USERS} from './types';
import { api } from '../../config';
import { getHeaders } from './localStorage';
import errorHandling from './errorHandling';

export const getUsers = (pageAtual) => {
    return function (dispatch) {
        console.log(api + `/star/page=${pageAtual}`);
        axios.get(api + `/star/page=${pageAtual}`, getHeaders())
        .then((response) => {
            dispatch({type: GET_USERS, payload: response.data});
        })
        .catch(errorHandling)
    }
}