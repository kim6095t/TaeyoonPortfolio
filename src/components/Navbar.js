import React from "react";
import {Container, Nav, Navbar, NavItem} from "react-bootstrap";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavItem style={{fontSize:'20px', marginRight:'15px'}}> <Nav.Link href="#about" className="text-white text-decoration-none"> Introduce</Nav.Link> </NavItem>
                        <NavItem style={{fontSize:'20px', marginRight:'15px'}}> <Nav.Link href="#skills" className="text-white text-decoration-none"> Skills</Nav.Link> </NavItem>
                        <NavItem style={{fontSize:'20px', marginRight:'20px'}}> <Nav.Link href="#projects" className="text-white text-decoration-none"> Projects</Nav.Link> </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;