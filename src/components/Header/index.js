import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Header = ({handleLogout, dadosUsuario}) => {
    var firstName = "Usuário";
    if(dadosUsuario.children.props.usuario){
        if(dadosUsuario.children.props.usuario.name){
            [firstName] = dadosUsuario.children.props.usuario.name.split(' ');
        }
    }
    
    return(   
        <> 
    <Navbar color="primary navbar-dark" light expand="md">
        <Link className="navbar-brand" to="/dashboard">Lucas</Link>
        <Nav className="ml-auto header-logo" navbar>
            <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link menu-header" caret>
                    {firstName}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={() => handleLogout()}>Sair</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    </Navbar>
    </>
    )
};

export default Header;