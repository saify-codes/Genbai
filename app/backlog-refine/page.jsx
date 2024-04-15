'use client'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegSquare } from "react-icons/fa6";
import { LuAtom } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import Block from '@/components/Block';
import Stories from '@/components/Stories';
import { IoSearch } from "react-icons/io5";
import Image from "next/image"
import { IoGift } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const page = () => {
    const [lightMode, setLightMode] = useState(false)
    const [eppic, setEpic] = useState(false)
    const [storyType, setStoryType] = useState(false)
    const [deliverable, setDeliverable] = useState(false)
    const [label, setLabel] = useState(false)
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
    ]
    return (
        <>
            <Header light={lightMode} lightMode={lightMode} setLightMode={setLightMode} />
            <div className="flex items-start justify-start">
                <Sidebar height={161} light={lightMode} />
                <div className="bg-[#06152D] w-full max-[1024px]:overflow-x-scroll h-[161vh] max-[1024px]:h-[169.7vh]  text-[#99C0FF]">
                    <p className='flex items-center justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Backlog</span> </p>
                    <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Blocklog Refining</h1>
                    <div className='flex items-center justify-start border-b  border-[#305288] text-[#305288] m-4'>
                        <p className='w-[100px] text-[15px] text-center pb-2'>Backlog</p>
                        <p className='w-[130px] text-[15px] text-center pb-2'>Backlog Refining</p>
                    </div>
                    <div className='ml-4 flex item-center justify-between'>
                        <div className='flex items-center space-x-3 top-[300px]'>
                            <div className='bg-[#0A1D38] border border-[#143261] rounded-sm py-[7px] flex items-center justify-start px-2 outline-none w-[280px]'>
                                <IoIosSearch className='text-[20px] mr-4 text-[#305288]' />
                                <input type="text" className='bg-transparent w-full outline-none placeholder:text-[#305288]' placeholder='Search Stories' />
                            </div>
                            <button onClick={() => setEpic(!eppic)} className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2'> <span className='text-[#99C0FF]'>&ensp;Epics&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${eppic ? "fixed rounded-lg w-[300px] z-10  bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[17rem] left-[31rem]" : "hidden"}`}>
                                <h1 className="text-[14px]">FILTER BY TOPIC</h1>
                                <div className="mt-2 border border-[#305288] flex items-center justify-center p-2 rounded-lg">
                                    <IoSearch />
                                    <input className="w-full bg-transparent pl-2 text-[15px] outline-none" type="text" placeholder='Search Epics' />
                                </div>
                                <p className='my-4 rounded-md border border-[#143261] bg-[#12294E] p-2 pl-4'>All Epics</p>
                                <div>
                                    <h4 className='text-[14px]'>PLANNED</h4>
                                    <ul>
                                        <li className='flex items-center mt-2'>
                                            <Image src="/circle2.png" className='mr-2' width="20" height="20" />
                                            Epic Name</li>
                                        <li className='flex items-center mt-2'>
                                            <Image src="/circle2.png" className='mr-2' width="20" height="20" />
                                            Epic Name</li>
                                    </ul>
                                </div>
                                <div className='mt-3'>
                                    <h4 className='text-[14px]'>IN PROGRESS</h4>
                                    <ul>
                                        <li className='flex items-center mt-2'>
                                            <Image src="/PhaseIcons.png" className='mr-2' width="20" height="20" />
                                            Epic Name</li>
                                        <li className='flex items-center mt-2'>
                                            <Image src="/PhaseIcons.png" className='mr-2' width="20" height="20" />
                                            Epic Name</li>
                                    </ul>
                                </div>
                                <div className='mt-3'>
                                    <h4 className='text-[14px]'>DONE</h4>
                                    <ul>
                                        <li className='flex items-center mt-2'>
                                            <Image src="/tick.png" className='mr-2' width="20" height="20" />
                                            Epic Name</li>
                                        <li className='flex items-center mt-2'>
                                            <Image src="/tick.png" className='mr-2' width="20" height="20" />
                                            Epic Name</li>
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setStoryType(!storyType)} className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Story Types&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${storyType ? "fixed rounded-lg w-[300px] z-30 bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[17rem] left-[37rem]" : "hidden"}`}>
                                <h1 className="text-[14px]">FILTER BY STORY TYPE</h1>
                                <p className='my-4 rounded-md border border-[#143261] bg-[#12294E] p-2 pl-4'>All Types</p>
                                <div>
                                    <ul>
                                        <li className='flex items-center mt-2'>
                                            <Image src="/star.png" className='mr-2' width="20" height="20" />
                                            Features</li>
                                        <li className='flex items-center mt-3'>
                                            <Image src="/err.png" className='mr-2' width="20" height="20" />
                                            Bugs</li>
                                        <li className='flex items-center mt-3'>
                                            <Image src="/pen.png" className='mr-2' width="20" height="20" />
                                            Design</li>
                                        <li className='flex items-center mt-3'>
                                            <Image src="/medal.png" className='mr-2' width="20" height="20" />
                                            QA Tests</li>
                                        <li className='flex items-center mt-3'>
                                            <Image src="/chem.png" className='mr-2' width="20" height="20" />
                                            Spikes</li>
                                        <li className='flex items-center mt-3'>
                                            <Image src="/kam.png" className='mr-2' width="20" height="20" />
                                            Tasks</li>
                                    </ul>
                                </div>
                            </div>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 ' onClick={() => setDeliverable(!deliverable)}> <span className='text-[#99C0FF]'>&ensp;Deliverables&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${deliverable ? "fixed rounded-lg w-[300px] z-30 bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[17rem] left-[46rem]" : "hidden"}`}>
                                <h1 className="text-[14px]">FILTER BY DELIVERABLE</h1>
                                <p className='my-4 rounded-md border border-[#143261] bg-[#12294E] p-2 pl-4'>All Deliverables</p>
                                <div>
                                    <ul>
                                        <li className='flex items-center mt-2'>

                                            Show Design Deliverables    </li>
                                        <li className='flex items-center mt-3'>

                                            Show Spike Deliverables</li>
                                        <h1 className="text-[14px] mt-4">PLANNING</h1>
                                        <li className='flex items-center mt-3 '>
                                            <IoGift className='text-purple-600 mr-3 text-[20px]' /> Implementation Plan</li>
                                        <li className='flex items-center mt-3 '>
                                            <IoGift className='text-green-600 mr-3 text-[20px]' />
                                            Research Report</li>
                                        <li className='flex items-center mt-3 '>
                                            <IoGift className='text-red-600 mr-3 text-[20px]' />
                                            Feasiblity Report</li>
                                        <li className='flex items-center mt-3 '>
                                            <IoGift className='text-orange-600 mr-3 text-[20px]' />
                                            Recommendations</li>
                                        <h1 className="text-[14px] mt-4">DESIGN</h1>
                                        <li className='flex items-center mt-3 '>
                                            <IoGift className='text-purple-600 mr-3 text-[20px]' /> Wireframe</li>
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() =>setLabel(!label)} className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Labels&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${label ? "fixed rounded-lg w-[300px] z-30 bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[17rem] left-[54rem]" : "hidden"}`}>
                                <h1 className="text-[14px]">FILTER BY LABEL</h1>
                                <p className='my-4 rounded-md border border-[#143261] bg-[#12294E] p-2 pl-4'>All Labels</p>
                                <div>
                                    <ul>
                                        <li className='flex items-center mt-2'>
                                            <FaCircle className='mr-2 text-sky-500' />
                                            Frontend    </li>
                                        <li className='flex items-center mt-3'>
                                            <FaCircle className='mr-2 text-purple-500' />
                                            Backend</li>
                                        <li className='flex items-center mt-3 '>
                                            <FaCircle className='mr-2 text-pink-7   00' />
                                            MVP</li>
                                        <li className='flex items-center mt-3 '>
                                            <FaCircle className='mr-2 text-purple-500' />
                                            API</li>
                                        <li className='flex items-center mt-3 '>
                                            <FaCircle className='mr-2 text-lime-500' />
                                            Mobile</li>
                                        <li className='flex items-center mt-3 '>
                                            <FaCircle className='mr-2 text-orange-500' />
                                            Desktop </li>
                                        <li className='flex items-center mt-3 '>
                                            <FaCircle className='mr-2 text-yellow-500' />
                                            App</li>
                                        <li className='flex items-center mt-3 '>
                                            <FaCircle className='mr-2 text-pink-500' />
                                            Web</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className='mr-4 text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm py-2 px-3'> <FaEye /> &ensp;<span className='text-[#99C0FF]'>&ensp;Display</span></button>
                    </div>
                    <div className='p-4 flex items-center space-x-3  py-6'>
                        <div className='w-[690px] flex  rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px]'>
                            <Stories user={user} />
                            <Stories user={user} />
                        </div>
                        <div className='w-[340px] rounded-tl-lg rounded-tr-lg bg-[#061123] h-[20px]'>
                            <div className='w-[340px] mt-10 rounded-lg bg-[#061123] h-[620px]  shadow-[#6B8CC266] shadow-sm'>
                                <div className='w-full flex items-center justify-between p-4'>
                                    <div className='space-x-2 flex items-center justify-center'>
                                        <BiLoaderCircle />
                                        <p>Ready to Refine <span className='bg-[#12294E] px-1 rounded-md ml-2'>3</span></p>
                                    </div>
                                    <div className='space-x-2 flex item-center justify-center'>
                                        <FaPlus />
                                        <LuAtom />
                                        <FaRegSquare />
                                    </div>
                                </div>
                                <div className='px-3'>
                                    {
                                        user.map((item, index) => {
                                            return (
                                                <Block key={index} title={item.title} date={item.date} logo={item.logo} aim={item.aim} plug={item.plug} sprint={item.sprint} images={item.images} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default page