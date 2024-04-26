'use client'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiLoaderCircle } from 'react-icons/bi'
import { FaXmark } from "react-icons/fa6";
import { FaCalendar, FaPlus } from 'react-icons/fa'
import { GiFallingStar } from 'react-icons/gi'
import { LuAtom } from 'react-icons/lu'
import { MdMenuBook, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import { RiLoopLeftFill } from "react-icons/ri";
import { IoInformationCircleSharp } from "react-icons/io5"
import { FaAngleRight } from "react-icons/fa6";
import Status from '@/components/Status'
const page = () => {
  const [lightMode, setLightMode] = useState(false)

  return (
    <>
      <Header light={lightMode} lightMode={lightMode} setLightMode={setLightMode} />
      <div className='flex items-start justify-between w-full'>
        <Sidebar light={lightMode} height={166} />
        <div className="bg-[#06152D] w-full h-[166vh] text-[#99C0FF]">
          <p className='flex items-center justify-start m-4 text-[#6B8CC2]'>Project Name / Teamname /  Sprint / <span className='flex items-center justify-center text-[#99C0FF]'>&ensp;  <Image src={"/spr.png"} alt="sprint icon" width={16} height={16} className='mr-2' /> Sprint Name</span> </p>
          <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
            <p className='w-[130px] text-[#AECDFF] border-b border-[#AECDFF] text-[15px] text-center pb-2'>Overview</p>
            <p className='w-[130px]  text-[15px] text-center pb-2'>Sprint Board</p>
            <p className='w-[130px] text-[15px] text-center pb-2'>Retrospectives</p>
          </div>
          <div className='flex items-start  justify-between w-full'>
            <div>

              <div className="w-full pl-4">
                <h1 className='p-3 text-2xl text-[#99C0FF] font-semibold border border-[#143261] w-[600px] rounded-md'>Sprints Name</h1>
                <div className='leading-8 mt-4'>
                  <strong className='font-semibold text-[17px]'>
                    Description
                  </strong>
                  <p>Hi my name is Hossam, and this is my ticket! It’s a rather short ticket, but it is a ticket nonetheless... <a href="#">@ahmed.e</a></p>
                </div>
              </div>
              <div className="stories">
                <div className={`m-4 mt-10 ${lightMode ? "text-[#143261]" : "text-[#AECDFF]"} flex items-center justify-between border-b border-[#143261] pb-3`}>
                  <h1 className='font-semibold flex items-center '><MdMenuBook className='mr-2 text-[20px]' /> Stories <span className={` px-1 rounded-md ml-2 ${lightMode ? "bg-[#D5E2F6]" : "bg-[#12294E]"}`}>3</span></h1>
                  <button className={`flex items-center ${lightMode ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#12294E] border border-[#143261]"}  py-1 px-3 rounded-md`}><FaPlus className='text-[12px] mr-2' />Add Existing</button>
                </div>
                <div className={`shadow mb-[1px] shadow-[#6B8CC266] ${lightMode ? "bg-[#fff] shadow-md shadow-[#6B8CC266]" : "bg-[#0A1D38] border border-[#143261]"}  rounded-md p-2 flex items-center justify-between mx-4`}>
                  <div className='flex items-center'>
                    <GiFallingStar className={`rotate-180 bg-[#F46A2A] ${lightMode ? "text-[#fff]" : ""} rounded-sm text-[16px] p-[1px] mr-2`} />
                    <p className={`${lightMode ? "text-[#143261]" : "text-[#AECDFF]"}`}>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
                    <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
                    <button className={`flex items-center justify-start ${lightMode ? "bg-[#F2F7FD]" : "bg-[#12294E]"} py-1 px-2 rounded-md`}>
                      <BiLoaderCircle className='mr-2' />
                      Unrefined
                    </button>
                  </div>
                </div>
                <div className={`shadow mb-[1px] shadow-[#6B8CC266] ${lightMode ? "bg-[#fff] shadow-md shadow-[#6B8CC266]" : "bg-[#0A1D38] border border-[#143261]"}  rounded-md p-2 flex items-center justify-between mx-4`}>
                  <div className='flex items-center'>
                    <GiFallingStar className={`rotate-180 bg-[#F46A2A] ${lightMode ? "text-[#fff]" : ""} rounded-sm text-[16px] p-[1px] mr-2`} />
                    <p className={`${lightMode ? "text-[#143261]" : "text-[#AECDFF]"}`}>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
                    <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
                    <button className={`flex items-center justify-start ${lightMode ? "bg-[#F2F7FD]" : "bg-[#12294E]"} py-1 px-2 rounded-md`}>
                      <BiLoaderCircle className='mr-2' />
                      Unrefined
                    </button>
                  </div>
                </div>
                <div className={`shadow mb-[1px] shadow-[#6B8CC266] ${lightMode ? "bg-[#fff] shadow-md shadow-[#6B8CC266]" : "bg-[#0A1D38] border border-[#143261]"}  rounded-md p-2 flex items-center justify-between mx-4`}>
                  <div className='flex items-center'>
                    <GiFallingStar className={`rotate-180 bg-[#F46A2A] ${lightMode ? "text-[#fff]" : ""} rounded-sm text-[16px] p-[1px] mr-2`} />
                    <p className={`${lightMode ? "text-[#143261]" : "text-[#AECDFF]"}`}>PRJ-1  Some Story Name Goes Here And gets cropped out</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <MdOutlineKeyboardDoubleArrowDown className='text-[24px] text-[#1354D7]' />
                    <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
                    <button className={`flex items-center justify-start ${lightMode ? "bg-[#F2F7FD]" : "bg-[#12294E]"} py-1 px-2 rounded-md`}>
                      <BiLoaderCircle className='mr-2' />
                      Unrefined
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-start mt-4'>
                <button className={`flex items-center justify-start  ml-4 ${lightMode ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#12294E] border border-[#143261]"} py-2 px-4 rounded-md`}><FaPlus className='mr-2' /> Create Story</button>
                <button className={`flex items-center justify-start  ml-4 ${lightMode ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#12294E] border border-[#143261]"} py-2 px-4 rounded-md`}><LuAtom className='mr-2' /> Generate Story</button>
              </div>
              <div className='m-4'>
                <div className='flex items-center justify-between p-3 border-b border-[#143261]'>
                  <div className='flex items-center justify-center '>
                    <RiLoopLeftFill />
                    <p className='mx-2'>Sprint Retrospective</p>
                    <IoInformationCircleSharp className="text-[#6b8cc2] text-[17px]" />
                  </div>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
                <div className='flex items-center justify-between w-full bg-[#132C53] mt-4  px-3 py-4 rounded-md'>
                  <div className='flex items-center'>
                    <strong className='text-[14px] mr-2'>Sprint Retrospectives</strong><p className='text-[14px]'> are meetings after the end of a ‘Sprint’ that help your team identify wins and challenges to improve performance and teamwork in future sprints.</p>
                  </div>
                  <FaXmark />
                </div>
              </div>
              <div className='m-4 mt-6'>
                <strong className=''>Meeeting Date</strong>
                <div className='bg-[#132C53] mb-3 mt-3 flex items-center justify-start w-[300px] border border-[#143261] rounded-md p-3'>  <FaCalendar className='mr-2' />None </div>
                <strong>Participiants</strong><br />
                <div className='flex items-center'>
                  <select name="" id="" className='mt-3 bg-[#132C53] flex items-center justify-start outline-none w-[300px] border border-[#143261] rounded-md p-3'>
                    <option value="" className=''> <Image src="/circle.png" width={20} height={20} alt='profile icon' /> Select Participants</option>
                  </select><span className='ml-2'>...</span>
                </div>
                <div className='flex items-center'>
                  <select name="" id="" className='mt-3 bg-[#132C53] flex items-center justify-start outline-none w-[300px] border border-[#143261] rounded-md p-3'>
                    <option value="" className=''> <Image src="/circle.png" width={20} height={20} alt='profile icon' /> Select Participants</option>
                  </select><span className='ml-2'>...</span>
                </div>
                <div className='flex items-center'>
                  <select name="" id="" className='mt-3 bg-[#132C53] flex items-center justify-start outline-none w-[300px] border border-[#143261] rounded-md p-3'>
                    <option value="" className=''> <Image src="/circle.png" width={20} height={20} alt='profile icon' /> Select Participants</option>
                  </select><span className='ml-2'>...</span>
                </div>
              </div>

            </div>
            <Status light={lightMode} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
