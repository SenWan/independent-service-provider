import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      }
    return (
        <div className='container'>
        <h2 className='text-center mt-5'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
            Login
          </Button>
        </Form>
        <p>Are you new user? <Link to='/register'  style={{cursor:'pointer'}} className='text-primary text-decoration-none'> Please Register !</Link></p>
      </div>
    );
};

export default Login;