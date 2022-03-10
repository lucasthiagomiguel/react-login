import React, { Component } from 'react';
import { Form, FormGroup,Label,Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../sotore/action';
import AlerDanger from '../../components/Header/AlertaDanger';

class Login extends Component{
    state = {
        email: "",
        senha: "",
        erro:""
    }
    onChangeInput = (field, ev) =>{
        this.setState({[field]: ev.target.value})
    }
    handleLogin(){
        const {email,senha} = this.state;
       if(!this.validade()) return;
        this.props.handleLogin({email,senha},(err)=>{

        });

    }
    validade(){
        const { email, senha} = this.state;
        if(!email) return  this.setState({erro:"campo vazio"})
        if(!senha) return  this.setState({erro: "campo vazio"})
        return true;
    }
    render(){ 
        const {email,senha,erro} = this.state;  
        return(
            <>
            <div className="container-login">
                <div className="login card shadow">
                    <Form className="form-signin text-center">
                        <h1>Login </h1>
                        <AlerDanger erros={erro} />
                        <FormGroup>
                            <Label for='email'>Usuario</Label>
                            <Input type='email' id='email' placeholder='E-mail do usuário' value={email} onChange={(ev) => this.onChangeInput("email", ev)} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for='senha'>Senha </Label>
                            <Input type='password' id='senha' placeholder='senha ' value={senha} onChange={(ev) => this.onChangeInput("senha", ev)}/>
                        </FormGroup>

                        <Button color='primary btn-block' onClick={() => this.handleLogin()}>Acessar</Button>
                    </Form>
                </div>
                </div>
            </>
        )
    }
    
}
export default connect(null,actions) (Login);