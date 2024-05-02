"use client";
import { useTheme } from '@/context/ThemeContext'
import { BacklogManageIcon, GenerateStory } from '@/utils/svg_icons'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import CreateSprintModal from './CreateSprintModal';

{/* <BacklogManageIcon theme={theme} /> */}
const NoSprint = ({ teamId, addNew=()=>{} }) => {
    const { theme } = useTheme();
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[480px] flex flex-col justify-center items-center gap-3 pt-5'>
            <BacklogManageIcon theme={theme} />
            <h2 className='text-3xl font-semibold text-center'>Ready To Sprint Into Action?</h2>
            <p className="text-center mb-3">
                Sprints are time-boxed periods where your team can commit to a goal and complete an agreed upon amount of stories.
                <br /> 
                <br /> 
                Create your first sprint by clicking 'Create Sprint' to organize your team's tasks into a plan for focused and efficient work."
                <br />
            </p>
            <CreateSprintModal addNew={()=>{}} teamId={teamId} />
            {/* <button className={`bg-[#1444E1] text-white flex items-center justify-center gap-2 font-semibold px-3 py-2 rounded-md w-[240px]`}>
                <GenerateStory color="#FFF" />
                Generate Epic
            </button> */}
        </div>
    </div>
  )
}

export default NoSprint
