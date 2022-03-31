import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import LogoRodape from '../../assets/icones/rodape.webp';
import '../../styles/footer/index.css';

export default function Footer() {
    
    return(   
        <> 
            <Container fluid className='img-rodape'>
                <Row>
                    <Col className='text-right pb-3'> <img src={LogoRodape} alt="" /></Col>
                </Row>
            </Container>
       </>
    )
};
