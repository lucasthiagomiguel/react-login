import axios from "axios";
import {LOGIN_USER} from "./types";
import { api } from "../../config";
import { saveToke} from "./localStorage";
export const handleLogin = ({email, senha}, callback) =>{
    return function(dispatch){
        axios.post(api + '/login',{email,senha}).then((response) =>{
            console.log(response.data)
            saveToke(response.data);
            dispatch({type: LOGIN_USER, payload: response.data});
        }).catch((err) =>{
            console.log(err)
        })
    }
}