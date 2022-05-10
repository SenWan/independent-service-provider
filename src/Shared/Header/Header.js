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
        <Navbar sticky='top' collapseOnSelect expand="lg" bg='info' variant="dark">
        <Container>
            <Navbar.Brand className='text-white fw-bold fs-3' as={Link} to='/'>Gym Trainer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href='home#services' className='text-white fw-bold fs-6'>Services</Nav.Link>
                <Nav.Link className='text-white fw-bold fs-6' as={Link} to='blogs'>Blogs</Nav.Link>
                <Nav.Link className='text-white fw-bold fs-6' as={Link} to='about'>About</Nav.Link>
                {
                    user ?
                    <button onClick={handleSingOut} className='btn text-white fw-bold fs-6 bg-info'>Signout</button>
                    :
                        <Nav.Link className='btn text-white fw-bold fs-6' eventKey={2} as={Link} to="login">
                        Login
                    </Nav.Link>

                }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
};

export default Header;