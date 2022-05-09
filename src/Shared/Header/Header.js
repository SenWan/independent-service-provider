import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div>
        <div className='bg-warning text-white p-1 d-flex justify-content-center align-items-center gap-3'>
            <small>WEEK DAYS: 05:00 - 22:00</small>
            <small>SATURDAY: 08:00 - 18:00</small>
            <small>SUNDAY: CLOSED</small>
        </div>
        <Navbar sticky='top' className='navbar' collapseOnSelect expand="lg" variant="dark">
        <div className="container-fluid border-bottom">
        <Container className='d-flex justify-content-center align-items-center'>
            <Navbar.Brand className='text-secondary fw-bold fs-3' as={Link} to='/'>Gym Trainer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href='home#services' className='text-secondary fw-bold fs-5'>Services</Nav.Link>
                <Nav.Link className='text-secondary fw-bold fs-5' as={Link} to='blogs'>Blogs</Nav.Link>
                <Nav.Link className='text-secondary fw-bold fs-5' as={Link} to='about'>About Me</Nav.Link>
                <Nav.Link className='text-secondary fw-bold fs-5' eventKey={2} href="#memes">
                    Login
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </div>
    </Navbar>
    </div>
    );
};

export default Header;