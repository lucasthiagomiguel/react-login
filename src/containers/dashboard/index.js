import React from 'react';
import BaseDashboard from './BaseDashboard';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

const baseDashboard = Component => {
    class ComponentBaseDashboard extends React.Component{


        componentDidMount(){
            const {logado, getUser, history} = this.props;
            getUser();

            if(!logado){
                return history.replace("/");
            }
        }

        componentDidUpdate(nextProps){
            const {logado, history} = this.props;
            if(!nextProps.logado || !logado){
                return history.replace("/");
            }
        }

        render(){
            return(
                <BaseDashboard>
                    <Component { ...this.props} />
                </BaseDashboard>
            );
        }
    }

    const mapStateToProps = state => ({
        logado: state.auth.logado,
        usuario: state.auth.usuario
    });

    return connect(mapStateToProps, actions)(ComponentBaseDashboard);
}

export default baseDashboard;