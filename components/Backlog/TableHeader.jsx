import { useTheme } from '@/context/ThemeContext';
import { GenerateStory, NishanBackLog, OutlinedCircle, StoryBackLog } from '@/utils/svg_icons';
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const TableHeader = ({ opened, toggle }) => {
    const { theme } = useTheme();
  return (
    <div className={`w-full flex justify-between border-[1px] p-2 rounded-t-md ${theme === 'light' ? "border-[#EEF2F7] bg-[#F2F7FD]": "border-[#143261] bg-[#061123]"}`}>
      <div>
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
      <div className='flex items-center'>
          <span className={`flex items-center gap-2 font-semibold cursor-pointer ${theme === 'light' ? "hover:text-[#324d75]": "hover:text-[#5f99f5]" }`}>
            <FaPlus  />
            Create Story
          </span>
          <span className='mx-3'>OR</span>
          <span className={`flex items-center gap-2 font-semibold cursor-pointer ${theme === 'light' ? "hover:text-[#324d75]": "hover:text-[#5f99f5]" }`}>
            <GenerateStory color={theme === 'light' ? "#000": "#99C0FF"} />
            Generate Story
          </span>
      </div>
    </div>
  )
}

export default TableHeader
