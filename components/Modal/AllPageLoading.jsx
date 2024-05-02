import './modal.style.css'
import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { RiLoader3Fill } from 'react-icons/ri';

const AllPageLoading = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light'
  return (
    <div className={`h-screen w-full flex flex-col justify-center items-center ${isLight ? "bg-white": "bg-[#06152D]"}`}>
      <RiLoader3Fill className={`spinner text-[28px] ${isLight ? "text-[#06152D]": "text-white"}`} />
      <p className={`${isLight ? "text-[#06152D]": "text-white"}`}>Loading...</p>
    </div>
  )
}

export default AllPageLoading
