import React from "react";
import BaseDashboard from "./BaseDashboard";
import {} from "react-redux";
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