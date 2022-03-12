import axios from 'axios';
import { api } from '../../config';
import errorHandling from './errorHandling';


export const handleCadastrar = ({ email, senha }, callback) => {
    return function () {
        axios.post(api + '/login', { email, senha })
            .then((response) => {
                //console.log(response.data);

            })
            .catch((err) => callback(errorHandling(err)))
    }
}

