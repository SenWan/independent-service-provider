import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <>
        <Navbar sticky='top' className='navbar' collapseOnSelect expand="lg" variant="dark">
        <div className="container-fluid border-bottom">
        <Container className='d-flex justify-content-center align-items-center p-2'>
            <Navbar.Brand className='text-info fw-bold fs-3' as={Link} to='/'>Gym Trainer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href='home#services' className='text-info fw-bold fs-6'>Services</Nav.Link>
                <Nav.Link className='text-info fw-bold fs-6' as={Link} to='blogs'>Blogs</Nav.Link>
                <Nav.Link className='text-info fw-bold fs-6' as={Link} to='about'>About</Nav.Link>
                <Nav.Link className='text-info fw-bold fs-6' eventKey={2} href="#memes">
                    Login
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </div>
    </Navbar>
    </>
    );
};

export default Header;