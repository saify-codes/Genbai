import { useTheme } from '@/context/ThemeContext';
import { NishanBackLog, OutlinedCircle, StoryBackLog } from '@/utils/svg_icons';
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TableHeader = ({ opened, toggle }) => {
    const { theme } = useTheme();
  return (
    <div className={`w-full border-[1px] p-2 rounded-t-md ${theme === 'light' ? "border-[#EEF2F7] bg-[#F2F7FD]": "border-[#143261] bg-[#061123]"}`}>
      <div className='flex gap-5 items-center'>
        {opened ? <IoIosArrowUp onClick={toggle} className='cursor-pointer' /> 
            : 
            <IoIosArrowDown onClick={toggle} className='cursor-pointer' />
        }
        <div className='flex items-center gap-2'>
            <OutlinedCircle />
            <p className='text-sm font-semibold'>TO DO</p>
        </div>
        <div className='flex items-center gap-2'>
            <StoryBackLog />
            <p className='text-sm font-semibold'>5</p>
        </div>
        <div className='flex items-center gap-2'>
            <NishanBackLog />
            <p className='text-sm font-semibold'>5</p>
        </div>
      </div>
    </div>
  )
}

export default TableHeader
