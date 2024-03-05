"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { TextInput, PasswordInput } from '@mantine/core';
import { MdEmail } from "react-icons/md";
import { useTheme } from '@/context/ThemeContext';

const SignUpRight = () => {
    // const { theme } = useTheme();
    const [email, setEmail] = useState('');

  return (
    <div className='bg-[#06152D] border-[1px] border-[#143261] rounded-md py-6 px-3'>
        <div className="logo flex w-full justify-center">
          <Image src='/logo.png' width="130" height="130" alt="" />
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
                    input: { background: '#143261', color: '#ffffff' } // Adding background color to the input and changing text color to white for better visibility
                }}
            />
        </div>
        <div className="">
            <PasswordInput
                label="Input label"
                description="Input description"
                placeholder="Input placeholder"
            />
        </div>
    </div>
  )
}

export default SignUpRight
