import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import { Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    // State to hold email and password
 const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleLogin = () => {
      if(email && password ){
        Swal.fire({
          title: 'Login Successfull',
          text: 'You have successfully logged in!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        // Redirect to dashboard page
        navigate('/')
      }
    };

    return (
        <div className='text-white min-h-screen flex items-center justify-center'>
            <div className="max-w-md bg-[#242424] rounded-lg shadow-lg p-[64px]">
                <img src={logo} alt="logo" className="mx-auto mb-4" />
                <h1 className="text-center font-bold text-3xl mb-6">Welcome!</h1>

                {/* Email Input */}
                <Input 
                    placeholder="Email"
                    prefix={<MailOutlined className="text-gray-500" />}
                    className="mb-4 text-white" 
                     style={{ backgroundColor: "#383838", height: "44px",border:"none" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                />
            
                {/* Password Input */}
                <Input.Password 
                    placeholder="Password" 
                    prefix={<LockOutlined className="text-gray-500" />} 
                    className="mb-4 text-white"
                     style={{ backgroundColor: "#383838", height: "44px",border:"none" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                />

                {/* Login Button */}
                <Button
               
                    type="primary" 
                    className="w-full mb-2 bg-[#EBCA7E] hover:bg-[#EBCA7E] h-[44px] text-black font-bold" 
                    style={{ borderRadius: '0.5rem' }} 
                    onClick={handleLogin} // Call handleLogin on click
                >
                    Login
                </Button>

                {/* Forgot Password Button */}
               <div className='text-end '>
               <Link to={'/forgot-password'} 
                    type="link" 
                    className="text-[#EBCA7E] hover:text-gray-300" 
                    style={{ padding: 0 }} 
                >
                    Forgot Password?
                </Link>
               </div>
            </div>
        </div>
    );
};

export default Login;
