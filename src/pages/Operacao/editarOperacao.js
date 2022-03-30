import React, { Component } from 'react';
import { Container,Row,Col,Form,FormGroup,Label,Input,FormText,Button} from 'reactstrap';
import ecovias from '../../assets/icones/ecovias.webp';
import linha from '../../assets/icones/linha.webp';
import { Link} from 'react-router-dom';
import '../../styles/operation/index.css';
class Operation extends Component {

    state = {
    
    }

    componentDidMount() {
        
    }

    componentDidUpdate(nextProps) {
        
    }
    

    render() {
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
                                        <option>
                                        1
                                        </option>
                                        <option>
                                        2
                                        </option>
                                        <option>
                                        3
                                        </option>
                                        <option>
                                        4
                                        </option>
                                        <option>
                                        5
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
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                        1
                                        </option>
                                        <option>
                                        2
                                        </option>
                                        <option>
                                        3
                                        </option>
                                        <option>
                                        4
                                        </option>
                                        <option>
                                        5
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
                                        <option>
                                        1
                                        </option>
                                        <option>
                                        2
                                        </option>
                                        <option>
                                        3
                                        </option>
                                        <option>
                                        4
                                        </option>
                                        <option>
                                        5
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
                            
                            <Link className='voltar' to="/">VOLTAR</Link>
                            <Link className='editar' to="/">EDITAR</Link>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
                

            </>
        )
    }
}



export default (Operation);