import React from 'react';
import BaseLogin from './BaseCadastro.js';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

const baseLogin = Component => {
    class ComponentBaseLogin extends React.Component{
        render(){
            return(
                <BaseLogin>
                    <Component { ...this.props} />
                </BaseLogin>
            );
        }
    }

    const mapStateToProps = state => ({
        logado: state.auth.logado,
        usuario: state.auth.usuario
    });

    return connect(mapStateToProps, actions)(ComponentBaseLogin);
}

export default baseLogin;