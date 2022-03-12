import React from 'react';

import '../../styles/login/index.css';

class BaseCadastro extends React.Component{
    render(){
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default BaseCadastro;