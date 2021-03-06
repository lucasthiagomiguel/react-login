import React, { Component } from 'react';
import { Container,Row,Col} from 'reactstrap';
import ecopistas from '../../assets/icones/ecopistas.webp';
import ecovias from '../../assets/icones/ecovias.webp';
import linha from '../../assets/icones/linha.webp';
import { Link} from 'react-router-dom';
import '../../styles/operation/index.css';
class User extends Component {

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
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h2 className="display-4 titulo">Seleção de Operação</h2>
                    </div>
                </div>
                    <img className='img-fluid ml-2' src={linha} alt="" />
                <Container className='mt-5 pt-5'>
                    <Row>
                        <Col className='text-center'>
                            <Link to="/ecopistas"><img className='img-fluid' src={ecopistas} alt="" /></Link>
                        </Col>
                        <Col className='text-center'>
                        <Link to="/ecovias"><img className='img-fluid' src={ecovias} alt="" /></Link>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
                

            </>
        )
    }
}



export default (User);