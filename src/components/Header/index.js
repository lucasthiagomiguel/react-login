import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Header = () => (
    <Navbar color="primary navbar-dark" light expand="md">
        <Link className="navbar-brand" to="/dashboard">Lucas</Link>
        <Nav className="ml-auto" navbar>
            <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link menu-header" caret>
                    Usuário
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Sair</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    </Navbar>
);

export default Header;