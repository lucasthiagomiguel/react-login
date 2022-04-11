import React, { Component } from 'react';
import { Container,Row,Col,Form,FormGroup,Label,Input,FormText,Button} from 'reactstrap';
import ecovias from '../../assets/icones/ecovias.webp';
import linha from '../../assets/icones/linha.webp';
import { Link} from 'react-router-dom';
import '../../styles/operation/index.css';
class Operation extends Component {

    state = {
        adquirente: "",
        url: "",
        motivo:"",
        textArea: "",
        formSuccess:false
    }

    componentDidMount() {
        
    }

    componentDidUpdate(nextProps) {
        
    }
    validate(){
        const { adquirente,url,motivo,textArea } = this.state;
        if(!adquirente) return this.setState({erro:{message: "Preencha o campo adquirente"}});
        if(!url) return this.setState({erro:{message: "Preencha o campo url"}});
        if(!motivo) return this.setState({erro:{message: "Preencha o campo motivo"}});
        if(!textArea) return this.setState({erro:{message: "Preencha o campo motivo"}});
        return true;
    }

    render() {
        const { adquirente, url, motivo, textArea,formSuccess} = this.state;
        return (
            <>
            <div className="box-operation">
                <div className="d-flex box-ecopistas">
                    <div className="mr-auto p-2">
                        <h2 className="display-4 titulo">Operação</h2>
                    </div>
                    <div className="logo-ecopistas">
                        <img className='img-fluid' src={ecovias} alt="" />
                    </div>
                </div>
                    <img className='img-fluid ml-2' src={linha} alt="" />
                <Container className='mt-5 pt-5 btn-eco'>
                    <Row>
                        <Col className='p-0'>
                            <h2>Setup Edit</h2>
                            <Form>
                                <FormGroup row>
                                    <Label
                                    for="exampleSelect"
                                    sm={2}

                                    >
                                    Adquirente
                                    </Label>
                                    <Col sm={10}>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option value={adquirente}>
                                        Granito
                                        </option>
                                    </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                    for="exampleSelect"
                                    sm={2}
                                    >
                                    Url
                                    </Label>
                                    <Col sm={10}>
                                    <Input
                                        id="url"
                                        name="url"
                                        type="select"
                                        
                                    >
                                        <option value={url}>
                                            http://gateway.granitopagamentos.com.br
                                        </option>
                                    </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                    for="exampleSelect"
                                    sm={2}
                                    >
                                    Motivo
                                    </Label>
                                    <Col sm={10}>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option value={motivo}>
                                        Parou de funcionar 
                                        </option>
                                        
                                    </Input>
                                    </Col>
                                </FormGroup>
                               
                                <FormGroup row>
                                    <Col sm={12}>
                                    <Input
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                        
                                    />
                                    </Col>
                                </FormGroup>
                            </Form>
                            
                            <Link className='voltar' to="/">CANCELAR</Link>
                            <Link className='editar' to="/">SALVAR</Link>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
                

            </>
        )
    }
}



export default (Operation);