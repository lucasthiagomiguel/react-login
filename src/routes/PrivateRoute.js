import React from "react";
import { Route,Redirect } from "react-router-dom";
 function PrivateRoute(props){
    const logado = true;
    if(logado){
        return <Route {...props}/>
    }
    return <Redirect to="/"/>
}
export default PrivateRoute;