import React from 'react';
import bg from '@/public/images/login-signup-bg.png';
import SignUpLeft from '@/components/LoginSignUp/SignUpLeft';
import SignUpRight from '@/components/LoginSignUp/SignUpRight';

const SignUp = () => {
  return (
    <div id='dark' className='login-signup flex flex-col md:flex-row justify-center items-center gap-14 p-5 min-h-screen'>
      <div className="w-full md:w-[592px]">
        <SignUpLeft />
      </div>
      <div className="w-full md:w-[504px]">
        <SignUpRight />
      </div>
    </div>
  )
}

export default SignUp
