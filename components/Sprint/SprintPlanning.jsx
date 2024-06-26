"use client";
import React, { useState } from 'react'
import SprintPlanningBox from './Sprint';
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import Image from 'next/image';

const SprintPlanning = ({ show=false }) => {
    const [isSprintPlanning, setIsSprintPlanning] = useState(true);

    const user = [
        {
            logo: 'Frontend Redesign',
            title: "Diagram user onboarding",
            date: "Mar 23",
            aim: 2,
            plug: 3,
            sprint: "Sprint 1.1",
            images: ["ProfileIcon.png", "user2.png", "user3.png"]
        },
        {
            logo: 'Frontend Redesign',
            title: "Diagram user onboarding",
            date: "Mar 23",
            aim: 2,
            plug: 3,
            sprint: "Sprint 1.1",
            images: ["ProfileIcon.png", "user2.png", "user3.png"]
        },
        {
            logo: 'Frontend Redesign',
            title: "Diagram user onboarding",
            date: "Mar 23",
            aim: 2,
            plug: 3,
            sprint: "Sprint 1.1",
            images: ["ProfileIcon.png", "user2.png", "user3.png"]
        },
    ];

    if(show){
        return (
            <div className="bg-[#06152D] w-full h-[161vh] text-[#99C0FF] overflow-x-scroll overflow-y-hidden max-[1024px]:h-[169.8vh]">
                    {/* <p className='flex items-center  justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Sprints</span> </p>
                    <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Sprints</h1>
                    <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
                        <p className='w-[130px] text-[#AECDFF] border-b border-[#AECDFF] text-[15px] text-center pb-2'>Sprint Planning</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Active Sprint</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Retrospectives</p>
                    </div> */}
                    <div className='ml-4 flex item-center justify-between max-[1024px]:w-full'>
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

                    </div>
                    <div className='flex items-center flex-col justify-start p-14 h-full'>
                        <Image src={"/no.png"} width={200} height={200} alt='adas' />
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

  return (
    <div className="bg-[#06152D] w-full h-[161vh] max-[1024px]:h-[169.8vh]  text-[#99C0FF] overflow-x-scroll  overflow-y-hidden">
        {/* <p className='flex items-center  justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Sprints</span> </p>
        <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Sprints</h1>
        <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
            <p className='w-[130px] text-[#AECDFF] border-b border-[#AECDFF] text-[15px] text-center pb-2'>Sprint Planning</p>
            <p className='w-[130px]  text-[15px] text-center pb-2'>Active Sprint</p>
            <p className='w-[130px] text-[15px] text-center pb-2'>Retrospectives</p>
        </div> */}
        <div className='ml-4 flex item-center justify-between'>
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

        </div>
        <div className='flex items-start justify-start w-[1650px]'>
            <div className='w-[400px] m-3 p-4 rounded-lg bg-[#061123] h-[590px]  shadow-[#6B8CC266] shadow-sm'>
                <h1 className='text-[18px] font-semibold'>Sprint Planning</h1>
                <div className='flex h-full items-center justify-center flex-col'>
                    <Image src={"/no.png"} alt='not found' width={150} height={150} className='mb-2' />
                    <h1 className='text-[#99C0FF] text-[17px] my-1 font-medium'>No Stories Found</h1>
                    <p className='text-[#6B8CC2] mb-5'>Uh oh! No stories match your filters.</p>
                    <button className='bg-[#4199F1] py-2 px-3 text-[#12294E] rounded-lg'>Clear Filter</button>
                </div>
            </div>
            <div>
                <div className='w-[380px] mt-5 m-3 rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px] text-center'>
                    <p className='text-[13px]'>PLANNED</p>
                </div>
                <SprintPlanningBox />
                <SprintPlanningBox className="mt-3" />
            </div>
            <div>
                <div className='w-[380px] mt-5 m-3 rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px] text-center'>
                    <p className='text-[13px]'>ACTIVE </p>
                </div>
                <SprintPlanningBox />
            </div>
            <div>
                <div className='w-[380px] mt-5 m-3 rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px] text-center'>
                    <p className='text-[13px]'>COMPLETED</p>
                </div>
                <SprintPlanningBox />
            </div>
        </div>
    </div>
  )
}

export default SprintPlanning
