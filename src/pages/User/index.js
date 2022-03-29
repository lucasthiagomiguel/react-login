import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/users';
import logoEcovia from '../../assets/icones/logos-ecovia.webp';
class User extends Component {

    state = {
        pageAtual: 1,
        //limit: 40,
    }

    componentDidMount() {
        this.getUsuarios();
    }

    componentDidUpdate(nextProps) {
        if (!this.props.usuario && nextProps.usuario) this.getUsuarios();
    }

    getUsuarios() {
        const { pageAtual } = this.state;
        this.props.getUsers(pageAtual);
        const { usuarios } = this.props;
        if (usuarios === "undefined") return null;
    }

    changePageAtual = (pageAtual) => {
        this.setState({pageAtual}, () => {
            this.getUsuarios();
        })
    }

    render() {
       

        
        
        return (
            <>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h2 className="display-4 titulo">Listar Usuários</h2>
                    </div>
                </div><hr />
                <div className="">
                    <img className='img-fluid' src={logoEcovia} alt="" />
                </div>

            </>
        )
    }
}

const mapStateToProps = state => ({
    usuarios: state.user.users,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(User);