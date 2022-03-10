import React from 'react';
import BaseLogin from './BaseLogin';
import {connect} from 'react-redux';
import * as action from '../../sotore/action';

const baseLogin = Component => {
    class ComponentBaseLogin extends React.Component{

        componentDidMount(){
            const {logado} = this.props;
            console.log(logado);
        }

        componentDidUpdate(nextProps){
            console.log(nextProps);
        }
        
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

    return connect(mapStateToProps, action)(ComponentBaseLogin);
}

export default baseLogin;