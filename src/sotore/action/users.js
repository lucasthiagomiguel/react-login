import axios from 'axios';
import {GET_USERS} from './types';
import { api } from '../../config';
import { getHeaders } from './localStorage';
import errorHandling from './errorHandling';

export const getUsers = () => {
    return function (dispatch) {
        axios.get(api + `/star`, getHeaders())
        .then((response) => {
            dispatch({type: GET_USERS, payload: response.data});
        })
        .catch(errorHandling)
    }
}