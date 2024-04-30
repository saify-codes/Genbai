"use client";
import { useTheme } from '@/context/ThemeContext'
import { BacklogManageIcon } from '@/utils/svg_icons'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'

const NoSprint = () => {
    const { theme } = useTheme();
  return (
    <div className="bg-[#06152D] w-full h-[159vh] text-[#99C0FF] overflow-x-scroll overflow-y-hidden max-[1024px]:h-[169.8vh]">
        {/* <div className='ml-4 flex item-center justify-between max-[1024px]:w-full'>
            <div className='flex items-center space-x-3'>
                <div className='bg-[#0A1D38] border border-[#143261] rounded-sm py-[7px] flex items-center justify-start px-2 outline-none w-[280px]'>
                    <IoIosSearch className='text-[20px] mr-4 text-[#305288]' />
                    <input type="text" className='bg-transparent w-full outline-none placeholder:text-[#305288]' placeholder='Search Sprints' />
                </div>
                <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Sprint Cycles&ensp;</span> <IoIosArrowDown /></button>
                <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Owners&ensp;</span> <IoIosArrowDown /></button>
                <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Epics&ensp;</span> <IoIosArrowDown /></button>
                <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Types&ensp;</span> <IoIosArrowDown /></button>
                <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Status&ensp;</span> <IoIosArrowDown /></button>
            </div>
        </div> */}
        <div className='flex items-center flex-col justify-start p-14 h-full'>
            {/* <Image src={"/Sprint/no.png"} width={200} height={200} alt='adas' /> */}
            <BacklogManageIcon theme={theme} />
            <h1 className='text-[20px] mt-4 font-semibold'>Ready To Sprint Into Action?</h1>
            <div className='text-[#6B8CC2] space-y-4 w-[480px] text-center my-4'>
                <p>Sprints are time-boxed periods where your team can commit to a goal and complete an agreed upon amount of stories.</p>
                <p>Create your first sprint by clicking 'Create Sprint' to organize your team's tasks into a plan for focused and efficient work."</p>
            </div>
            <button className='bg-[#4199F1] py-2 px-8 text-[#12294E] rounded-lg font-semibold'>Create Sprint</button>
        </div>
    </div>
  )
}

export default NoSprint
