import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Perfil extends Component {

    state = {
        usuario: "",
        firstName: ""
    }

    componentDidMount() {
        const { usuario } = this.props;
        this.setState({ usuario: usuario });

        var firstName = "Usuário";
        if(usuario){
            if(usuario.name){
                [firstName] = usuario.name.split(' ');
            }
        }
        this.setState({firstName: firstName});
    }
    render() {
        const { name, email, url } = this.state.usuario;
        const { firstName } = this.state;
        return (
            <>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h2 className="display-4 titulo">Perfil</h2>
                    </div>
                </div><hr />
                <dl className="row">
                    <dt className="col-sm-3">Nome</dt>
                    <dd className="col-sm-9">
                        <img src={url} alt={firstName} width="150" height="150" />
                    </dd>

                    <dt className="col-sm-3">Nome</dt>
                    <dd className="col-sm-9">{name}</dd>

                    <dt className="col-sm-3">E-mail</dt>
                    <dd className="col-sm-9">{email}</dd>
                </dl>
            </>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Perfil);