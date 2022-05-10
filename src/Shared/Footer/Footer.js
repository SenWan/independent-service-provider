import React from 'react';

const Footer = () => {
    return (
        <div className='bg-info p-1  text-center mt-5 text-white'>
            <p><small> Copyright © {new Date().getFullYear()}</small></p>
            <p>Email: senwan96@gmail.com</p>
            <p>Contact: 123456</p>
        </div>
    );
};

export default Footer;