import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/users';

class User extends Component {

    componentDidMount(){
        this.getUsuarios();        
    }

    componentDidUpdate(nextProps) {
        if (!this.props.usuario && nextProps.usuario) this.getUsuarios();
    }

    getUsuarios(){       
        this.props.getUsers();
        const {usuarios} = this.props;
        console.log(usuarios);
    }

    render() {
        return (
            <>
                <h2>Listar usuário</h2>
            </>
        )
    }
}

const mapStateToProps = state => ({
    usuarios: state.user.users,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(User);