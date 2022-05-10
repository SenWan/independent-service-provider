import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let fixerror;

    if(user){
        navigate('/home');
    }
    if(error){
        fixerror = (
            <p className='text-danger'>Error: {error?.message}</p>
        )
    }
    return (
        <div>
            <div className='d-flex align-items-center gap-2'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-info text-white w-50 d-block mx-auto my-2'>
                <img src={google} alt="" />
                <span className='px-2'>Google Sign In</span></button>
                {fixerror}
        </div>
    );
};
export default SocialLogin;