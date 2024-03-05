import React from 'react';
import bg from '@/public/images/login-signup-bg.png';
import SignUpLeft from '@/components/LoginSignUp/SignUpLeft';
import SignUpRight from '@/components/LoginSignUp/SignUpRight';

const SignUp = () => {
  return (
    <div id='dark' className='login-signup flex justify-center gap-20 p-5 h-screen'>
      <div className="w-[592px]">
        <SignUpLeft />
      </div>
      <div className="w-[504px]">
        <SignUpRight />
      </div>
    </div>
  )
}

export default SignUp
