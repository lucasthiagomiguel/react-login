import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AlertDanger from '../../components/AlertDanger';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Login extends Component {

    state = {
        email: "",
        senha: "",
        erro: ""
    }

    onChangeInput = (field, ev) => {
        this.setState({ [field]: ev.target.value });
    }

    handleLogin() {
        const { email, senha } = this.state;

        if (!this.validade()) return;
        this.props.handleLogin({ email, senha }, (err) => {
            //console.log(err);
            this.setState({erro: {message: err.erro.message}});
        })
    }

    validade() {
        const { email, senha } = this.state;

        if (!email) return this.setState({ erro: { message: "Preencha o campo e-mail!" }})
        if (!senha) return this.setState({ erro: {message: "Preencha o campo senha!" }})

        return true;
    }

    render() {
        const { email, senha, erro } = this.state;
        return (
            <>

                <div className="container-form">
                    <div className="login card shadow">
                        <Form className="form-signin text-center">
                            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                            <AlertDanger erros={erro} />
                            <FormGroup>
                                <Label for="email">Usuário</Label>
                                <Input
                                    type="email"
                                    value={email}
                                    name="email"
                                    id="email"
                                    placeholder="E-mail do usuário"
                                    onChange={(ev) => this.onChangeInput("email", ev)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="senha">Senha</Label>
                                <Input
                                    type="password"
                                    value={senha}
                                    name="senha"
                                    id="senha"
                                    placeholder="Senha do usuário"
                                    onChange={(ev) => this.onChangeInput("senha", ev)} />
                            </FormGroup>

                            <Button
                                color="primary btn-block"
                                size="lg"
                                onClick={() => this.handleLogin()}>Acessar
                            </Button>
                            <Link to="/cadastro">
                                <Button
                                    color="btn btn-outline-success  btn-block mt-2"
                                    size="lg"
                                   >Cadastrar
                                </Button>
                            </Link>

                        </Form>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null, actions)(Login);