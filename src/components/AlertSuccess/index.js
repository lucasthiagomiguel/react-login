import React from 'react';

const AlertSuccess = (props) => {
    if(props.erros === "") return null;

    return(
        <div className="alert alert-success">
            {props.erros}
        </div>
    )
}

export default AlertSuccess;