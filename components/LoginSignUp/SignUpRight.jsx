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
import MyAxios from '@/utils/AxiosConfig';
import showToastMessage from '../ToastMessage/Index';
import { useAuth } from '@/context/AuthContext';

const SignUpRight = () => {
    // const { theme } = useTheme();
    const router = useRouter()
    const { login } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [error, setError] = useState({
        password: null,
        email: null,
    });

    const checkPasswordSame = (event) => {
        if(error.password) setError(prev => ({ ...prev, password: null }));
        const confirmPass = event.currentTarget.value;
        if(confirmPass !== password){
            return setError(prev => ({ ...prev, password: "Password must be same" }));
        }
        setConfPassword(confirmPass);
    }

    const handleEmailChange = (event) => {
        const email = event.currentTarget.value;
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = pattern.test(email);
        setEmail(email);
        if(!isValidEmail){
            setError(prev => ({ ...prev, email: 'Please enter valid Email' }))
        }
        else {
            setError(prev => ({ ...prev, email: null }))
        }
    }


    const handleSubmit = async () => {
        if(error.email || error.password) return;
        const data = { email, password, }
        MyAxios.post("/auth/signup", data)
        .then(res => {
            console.log(res.data, "==res:dataaaa")
            if(res.data.success){
                showToastMessage(res?.data?.message, "success");
                login();
                router.push('/backlog');
            }
        })
        .catch(error => {
            console.log(error.response.data.message, " error:SignUp");
            if(error?.response?.data?.message){
                showToastMessage(error?.response?.data?.message, "error")
            }
            else {
                showToastMessage("Something went wrong", "error")
            }
        });
    }


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
                onChange={handleEmailChange}
                styles={{
                    input: { background: '#06152D', color: '#ffffff' }
                }}
            />
            <p className={`text-red-500 ${error?.email ? "flex": "none"}`}>{error?.email}</p>
        </div>
        <div className="mt-3">
            <PasswordInput
                label="Create Password"
                placeholder="Enter Your Password"
                onChange={(event) => setPassword(event.currentTarget.value)}
                styles={{
                    input: { background: '#06152D', color: '#ffffff' } 
                }}
                />
        </div>
        <div className="mt-3">
            <PasswordInput
                label="Confirm Password"
                placeholder="Confirm Your Password"
                onChange={checkPasswordSame}
                styles={{
                    input: { background: '#06152D', color: '#ffffff' }
                }}
            />
            {error?.password ? <p className={`text-red-500`}>{error?.password}</p> : <></>}
        </div>
        <div className='mt-4'>
            <button disabled={!email || !password || !confPassword} onClick={handleSubmit} className={`rounded-md font-bold text-[#12294E] bg-[#4199F1] hover:bg-[#4991d8] p-3 w-full ${(!email || !password || !confPassword) ? "cursor-not-allowed": ""}`}>Get Started for Free</button>
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
