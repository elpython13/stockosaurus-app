import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar (){
    return (
    <div className="navbar-container">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="./">stockosaurus</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="./stocks">stocks</Nav.Link>
            <Nav.Link href="./architecture">architecture</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    );
}