import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/stocks">Stocks</Navbar.Brand>
        </Navbar>
    );
}

export default NavBar