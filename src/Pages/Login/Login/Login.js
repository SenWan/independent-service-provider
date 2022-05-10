import { Toast } from 'bootstrap';
import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    let fixerror;

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
      }

      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
        navigate(from, {replace: true})
      }

      if(error){
        fixerror = (
          <p className='text-danger'>Error: {error?.message}</p>
        )
      }

      const navigateRegister = event => {
        navigate('/register')
      }

      const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
        await sendPasswordResetEmail(email);
        toast('Sent Email')
      }
      else{
        toast('Please Enter Your Email')
      }

    return (
        <div className='container' style={{height:'60vh'}}>
        <h2 className='text-center mt-5'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="info text-white w-50 mx-auto d-block mb-2" type="submit">
            Login
          </Button>
          {fixerror}
        </Form>
        <p>Are you new user? <Link to='/register'  style={{cursor:'pointer'}} className='text-primary text-decoration-none' onClick={navigateRegister}> Please Register !</Link></p>
        <p>forget password? <span  style={{cursor:'pointer'}} className='text-primary' onClick={resetPassword}> Reset Password !</span></p>
        <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Login;