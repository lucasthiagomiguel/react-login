import React from "react";
import BaseDashboard from "./BaseDashboard";
const baseDashboard = Component =>{
    return class extends React.Component{
        render(){
            return(
                <BaseDashboard>
                    <Component { ...this.props} />
                </BaseDashboard>
            );
        }
    }
}
export default baseDashboard;