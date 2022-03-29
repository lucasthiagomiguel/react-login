import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Container,Row,Col} from 'reactstrap';
import AlertDanger from '../../components/AlertDanger';
import AlertSuccess from '../../components/AlertSuccess';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import logoFast from '../../assets/icones/logo-fast.webp';
class Login extends Component {

    state = {
        email: "",
        senha: "",
        erro: "",
        msg: ""
    }

    onChangeInput = (field, ev) => {
        this.setState({ [field]: ev.target.value });
    }
    componentDidMount() {
        this.getCadastro();
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
    getCadastro(){
        if (this.props.location.state) {
            this.setState({ msg: this.props.location.state.msg });
        }
    }

    render() {
        const { email, senha, erro,msg } = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col className='d-none d-md-block col-eco'>
                        </Col>
                        <Col className='col-login p-0' >
                            <div className="container-form">
                                <div className="login">
                                    <Form className="form-signin">
                                        <h1 className="h3 mb-3 font-weight-normal">LOGIN</h1>
                                        <AlertDanger erros={erro} />
                                        {msg ? <AlertSuccess erros={msg}/> : ""}
                                        <FormGroup className='border-top'>
                                            <Input
                                                type="email"
                                                value={email}
                                                name="email"
                                                id="email"
                                                placeholder="Usuário"
                                                onChange={(ev) => this.onChangeInput("email", ev)} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="password"
                                                value={senha}
                                                name="senha"
                                                id="senha"
                                                placeholder="Senha"
                                                onChange={(ev) => this.onChangeInput("senha", ev)} />
                                        </FormGroup>

                                        <Button
                                            color=" btn-block"
                                            size="lg"
                                            onClick={() => this.handleLogin()}>ENTRAR
                                        </Button>
                                    </Form>
                                </div>
                                <div className="logo-fast">
                                    <img src={logoFast} alt="" />
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
               
            </>
        )
    }
}

export default connect(null, actions)(Login);