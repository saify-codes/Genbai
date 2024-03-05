import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { BacklogManageIcon, GenerateStory } from '@/utils/svg_icons'
import { FaPlus } from "react-icons/fa6";

const ManageTheBackLog = () => {
    const { theme } = useTheme();

  return (
    <div className='flex justify-center items-center'>
        <div className='w-[480px] flex flex-col justify-center items-center gap-3 pt-5'>
            <BacklogManageIcon theme={theme} />
            <h2 className='text-3xl font-semibold text-center'>Manage The Backlog!</h2>
            <p className="text-center mb-3">
                The backlog is where you create, organize, and refine potential tasks, features, needs, or bugs, setting the groundwork for future work.
                <br /> 
                <br /> 
                This is where all stories that your team creates initially find their home until you've decided to move them onto the next phase. 
                <br />
                <br />
                Kickstart your project by creating a Story directly from the Backlog, or use our smart AI to generate one in an agile format.
            </p>
            <button className={`bg-[#057BF1] flex items-center justify-center gap-2 font-bold p-3 rounded-md w-[240px] ${theme === 'light' ? "text-white": "text-[#12294E]"} `}>
                <FaPlus  />
                Create Story
            </button>
            <button className={`bg-[#1444E1] flex items-center justify-center gap-2 font-bold p-3 rounded-md w-[240px] ${theme === 'light' ? "text-white": "text-[#12294E]"}`}>
                <GenerateStory color={theme === 'light' ? "#fff": "#12294E"} />
                Generate Story
            </button>
        </div>

    </div>
  )
}

export default ManageTheBackLog
