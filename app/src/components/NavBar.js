import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => (
    <div className="navbar-container">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="./">stockosaurus</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="./stocks">stocks</Nav.Link>
            <Nav.Link href="./">news</Nav.Link>
            <Nav.Link href="./">architecture</Nav.Link>
            </Nav>
        </Navbar>
   </div>
);

export default NavBar