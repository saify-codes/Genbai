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

const SignInComponent = () => {
    // const { theme } = useTheme();
    const router = useRouter()
    const [email, setEmail] = useState('');


  return (
    <>
        <div className="logo flex w-full justify-center">
            <Image src={Logo} width="130" height="130" alt="" />
        </div>
        <div className='w-[504px] bg-[#06152D] border-[1px] border-[#143261] rounded-lg p-6 mt-5'>
            <h1 className='text-5xl text-center font-bold'>Welcome back!</h1>
            <div className='mt-3'>
                <TextInput
                    mt="md"
                    rightSectionPointerEvents="none"
                    rightSection={<MdEmail />}
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    styles={{
                        input: { background: '#06152D', color: '#ffffff' }
                    }}
                />
            </div>
            <div className="mt-3">
                <PasswordInput
                    label="Password"
                    placeholder="Enter Your Password"
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
                    <GoogleIcon /> <span className='ml-3'>Sign In with Google</span>
                </button>
            </div>
            <div className="mt-5">
                <p className='text-center text-sm'>
                    <Link href="/forgot-password" className='underline text-[#4199F1] hover:text-[#62affc] font-semibold ml-2'>Forgot Your Password? </Link>
                </p>
                <p className="m-4 text-center text-base">
                    Don&apos;t have an account? 
                    <Link href="/signup" className='underline text-[#4199F1] hover:text-[#62affc] font-semibold ml-2'>
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    </>
  )
}

export default SignInComponent
