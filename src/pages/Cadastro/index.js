import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AlertDanger from '../../components/AlertDanger';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Login extends Component {

    state = {
        name:"",
        telefone:"",
        email: "",
        senha: "",
        erro: ""
    }

    onChangeInput = (field, ev) => {
        this.setState({ [field]: ev.target.value });
    }

    handleCadastrar() {
        const {name,telefone, email, senha } = this.state;

        if (!this.validade()) return;
        this.props.handleCadastrar({ name,telefone, email, senha  }, (err) => {
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
        const {name,telefone, email, senha, erro } = this.state;
        return (
            <>

                <div className="container-form">
                    <div className="login card shadow">
                        <Form className="form-signin text-center">
                            <h1 className="h3 mb-3 font-weight-normal">Cadastrar</h1>
                            <AlertDanger erros={erro} />
                            <FormGroup>
                                <Label for="name">Nome</Label>
                                <Input
                                    type="text"
                                    value={name}
                                    name="name"
                                    id="name"
                                    placeholder="Nome"
                                    onChange={(ev) => this.onChangeInput("name", ev)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="telefone">Telefone</Label>
                                <Input
                                    type="text"
                                    value={telefone}
                                    name="telefone"
                                    id="telefone"
                                    placeholder="telefone"
                                    onChange={(ev) => this.onChangeInput("telefone", ev)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">E-mail</Label>
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
                                onClick={() => this.handleCadastrar()}>Cadastrar
                            </Button>
                            <Link className="dropdown-item" to="/">Voltar</Link>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null, actions)(Login);