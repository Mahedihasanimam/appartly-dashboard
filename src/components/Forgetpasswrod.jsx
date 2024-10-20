import React, { useState } from 'react';
import logo from '../../public/logo.png';
import { Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Forgetpasswrod = () => {
    // State to hold email and password
 const navigate=useNavigate()
    const [email, setEmail] = useState('');


    // Function to handle form submission
    const handleLogin = () => {
      if(email  ){
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
            <div className="max-w-md w-full bg-[#242424] rounded-lg shadow-lg p-[64px]">
              
                <h1 className="text- font-bold text-2xl mb-2">Forget Password?</h1>
                <p className='text-gray-500 mb-6'>Don’t worry we are here to help you</p>
                <p className='text-sm font-normal text-white pb-1'>Submit your mail</p>
                {/* Email Input */}
                <Input 
                    placeholder="Email"
                    prefix={<MailOutlined className="text-gray-500" />}
                    className="mb-4 text-white" 
                     style={{ backgroundColor: "#383838", height: "44px",border:"none" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                />

                {/* Login Button */}
            <Link to="/otpverification">
            <Button
               
               type="primary" 
               className="w-full mb-2 mt-4 bg-[#EBCA7E] hover:bg-[#EBCA7E] h-[44px] text-black font-bold" 
               style={{ borderRadius: '0.5rem' }} 
               onClick={handleLogin} // Call handleLogin on click
           >
               Submit
           </Button></Link>
            </div>
        </div>
    );
};

export default Forgetpasswrod;
