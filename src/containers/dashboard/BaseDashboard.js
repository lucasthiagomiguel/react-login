import React from 'react';
import Header from '../../components/Header';
import '../../styles/dashboard/index.css';

class BaseDashboard extends  React.Component{
    render(){
        return(
            <>
                <Header />
                {this.props.children}
            </>
        )
        
    }
}
export default BaseDashboard;