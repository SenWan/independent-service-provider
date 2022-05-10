import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSingOut = () => {
        signOut(auth);
    }
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
                {
                    user ?
                    <button onClick={handleSingOut} className='btn text-info fw-bold fs-6 bg-white'>Signout</button>
                    :
                        <Nav.Link className='btn text-info fw-bold fs-6' eventKey={2} as={Link} to="login">
                        Login
                    </Nav.Link>

                }
                </Nav>
            </Navbar.Collapse>
        </Container>
        </div>
    </Navbar>
    </>
    );
};

export default Header;