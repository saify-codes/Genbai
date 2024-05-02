import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { BacklogManageIcon, GenerateStory } from '@/utils/svg_icons'
import { FaPlus } from "react-icons/fa6";
import CreateEpicModal from './CreateEpicModal';

const ManageTheEpics = ({ addNewEpic=()=>{}, }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light' ;

  return (
    <div className='flex justify-center items-center'>
        <div className='w-[480px] flex flex-col justify-center items-center gap-3 pt-5'>
            <BacklogManageIcon theme={theme} />
            <h2 className='text-3xl font-semibold text-center'>The Beginning Of Something Epic</h2>
            <p className="text-center mb-3">
                Connect stories across multiple Teams with Epics and share in the outcome! Epics are a collective of stories that represent a larger project or feature. 
                <br /> 
                <br /> 
                Shape your vision by clicking "Create Epic" or let our smart AI generate one for you in an industry-standard agile format.
                <br />
            </p>
            <CreateEpicModal addNew={addNewEpic} />
            <button className={`bg-[#1444E1] text-white flex items-center justify-center gap-2 font-semibold px-3 py-2 rounded-md w-[240px]`}>
                <GenerateStory color="#FFF" />
                Generate Epic
            </button>
        </div>
    </div>
  )
}

export default ManageTheEpics
