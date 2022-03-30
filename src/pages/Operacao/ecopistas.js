import React, { Component } from 'react';
import { Container,Row,Col} from 'reactstrap';
import ecopistas from '../../assets/icones/ecopistas.webp';
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
                        <img className='img-fluid' src={ecopistas} alt="" />
                    </div>
                </div>
                    <img className='img-fluid ml-2' src={linha} alt="" />
                <Container className='mt-5 pt-5 btn-eco'>
                    <Row>
                        <Col className='p-0'>
                            <h2>Setup View</h2>
                            <p><strong> Adquirente em Operação:</strong> Granito </p>
                            <p><strong>URL:</strong> http://gateway.granitopagamentos.com.br</p>
                            <Link className='voltar' to="/">VOLTAR</Link>
                            <Link className='editar' to="/editar">EDITAR</Link>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
                

            </>
        )
    }
}



export default (Operation);