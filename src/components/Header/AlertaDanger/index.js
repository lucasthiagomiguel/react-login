import React from "react";
const AlerDanger = (data) =>{
    if(data.erros === "") return null;
    return(
        <div className="alert alert-danger">
            {data.erros}
        </div>
    )
}
export default AlerDanger;