import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Register  = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating] = useUpdateProfile(auth);

      const navigate = useNavigate();

      if(loading || updating){
          <Loading></Loading>
      }

      const handleRegister = async event => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;

          await createUserWithEmailAndPassword(email, password);
          await updateProfile ({displayName: name});
          navigate('/home');
      }

    return (
        <div className='container register-form'>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Terms an Condition</label>
                <input className='w-50 mx-auto btn my btn-info text-white mt-2' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login'  style={{cursor:'pointer'}} className='text-primary text-decoration-none'> Please Login !</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;