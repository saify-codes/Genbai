"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from "next/image";
import { TextInput, PasswordInput, Button } from '@mantine/core';
import { MdEmail } from "react-icons/md";
import { useTheme } from '@/context/ThemeContext';
import { GoogleIcon } from '@/utils/svg_icons';
import Link from 'next/link';
import Logo from '@/public/logo.png';

const SignUpRight = () => {
    // const { theme } = useTheme();
    const router = useRouter()
    const [email, setEmail] = useState('');


  return (
    <div className='bg-[#06152D] border-[1px] border-[#143261] rounded-md py-6 px-3'>
        <div className="logo flex w-full justify-center">
          <Image src={Logo} width="130" height="130" alt="" />
        </div>
        <div>
            <TextInput
                mt="md"
                rightSectionPointerEvents="none"
                rightSection={<MdEmail />}
                label="Work Email"
                placeholder="Enter your work email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                // className={`${theme === 'light' ? "":"bg-[#143261]"}`}
                styles={{
                    input: { background: '#06152D', color: '#ffffff' } // Adding background color to the input and changing text color to white for better visibility
                }}
            />
        </div>
        <div className="mt-3">
            <PasswordInput
                label="Create Password"
                placeholder="Enter Your Password"
                styles={{
                    input: { background: '#06152D', color: '#ffffff' } // Adding background color to the input and changing text color to white for better visibility
                }}
            />
        </div>
        <div className="mt-3">
            <PasswordInput
                label="Confirm Password"
                placeholder="Confirm Your Password"
                styles={{
                    input: { background: '#06152D', color: '#ffffff' } // Adding background color to the input and changing text color to white for better visibility
                }}
            />
        </div>
        <div className='mt-4'>
            <button onClick={()=>router.push('/backlog')} className='rounded-md font-bold text-[#12294E] bg-[#4199F1] hover:bg-[#4991d8] p-3 w-full'>Get Started for Free</button>
        </div>
        <p className="mt-3 text-center font-semibold">OR</p>
        <div className='mt-4'>
            <button className='rounded-md font-bold text-[#C5DCFF] border-2 border-[#4199F1] hover:bg-[#1a2e4b] p-3 w-full flex items-center justify-center'>
                <GoogleIcon /> <span className='ml-3'>Sign up with Google</span>
            </button>
        </div>
        <div className="mt-5">
            <p className="text-center font-semibold">Free. No credit card required.</p>
            <p className="m-4 text-center text-[12px]">By signing up you agree to our <Link href="" className='underline text-[#4199F1] font-semibold'>Terms of Service</Link> and <Link href="" className='underline text-[#4199F1] font-semibold'>Privacy Policy.</Link> </p>
        </div>
    </div>
  )
}

export default SignUpRight
