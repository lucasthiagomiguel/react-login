import React from 'react';

import { Navbar, Nav } from 'reactstrap';

import '../../styles/menu/index.css';


    const Header = ({handleLogout}) => {
    
    return(   
        <> 
    <Navbar color="primary navbar-dark" light expand="md">
        <Nav className="ml-auto header-logo" navbar>
            <p className="navbar-brand" onClick={() => handleLogout()}>Logout</p>
        </Nav>
    </Navbar>
    </>
    )
};

export default Header;