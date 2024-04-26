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
import { IoIosArrowDown } from "react-icons/io";
import { RxLoop } from "react-icons/rx";
import { FaCircle } from "react-icons/fa";
import { CiCompass1 } from "react-icons/ci";
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
                                <h1 className='p-3 text-2xl text-[#99C0FF] font-semibold border border-[#143261] w-[600px] rounded-md'>Some Sprints Name</h1>

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
                                <button className='bg-[#132C53] py-2 px-3 flex items-center
                   justify-center rounded-md mt-3'><FaPlus className='text-[10px] mr-2 ' /> Add Participant</button>
                            </div>
                            <div className='m-4'>
                                <strong>What went well?</strong><br />
                                <textarea className='bg-[#0A1D38] mt-3 border border-[#143261] w-full p-4 rounded-md h-[115px]'>
                                    Describe what your team liked...
                                </textarea>
                            </div>
                            <div className='ml-4 mr- mb-4'>
                                <strong>What could be improved?</strong><br />
                                <textarea className='bg-[#0A1D38] mt-3 border border-[#143261] w-full p-4 rounded-md h-[115px]'>
                                    Describe what didn't go so well...
                                </textarea>
                            </div>
                        </div>
                        <div className='flex items-start justify-start flex-col'>
                            <div className='w-[350px]'>
                                <p className='text-[#6B8CC2] mb-3'>Health Status</p>
                                <button className={`flex items-center justify-center ${lightMode ? "bg-[#fff] border border-[#B4C6E4] " : "bg-[#0EB498] border border-[#143261] text-[#12294E]"} rounded-lg p-2`}><RxLoop className={`${lightMode ? "text-[#6B8CC2] border border-[#6B8CC2]" : "text-[#12294E]"}  rounded-full p-[1px]`} /> <span className={`${lightMode ? "text-[#305288]" : "text-[#12294E]"}`}>&ensp;Completed&ensp;</span> <IoIosArrowDown /></button>
                            </div>
                            <div className={`p-4 mt-4 ${lightMode ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#0A1D38] border border-[#143261]"} w-[340px] rounded-lg`}>
                                <div className=' my-3 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>Projetspace</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        <Image src={"/shape.png"} className='mr-3' width={20} height={30} alt='space' /> MobileApps
                                    </div>
                                </div>
                                <div className=' my-3 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>Team</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        <Image src={"/paint.png"} className='mr-3' width={20} height={30} alt='space' /> Product Development
                                    </div>
                                </div>
                                <div className='my-3 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>Phase</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        <Image src={"/circle2.png"} className='mr-3' width={20} height={30} alt='space' /> Planned
                                    </div>
                                </div>
                                <div className='my-3 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>Owner</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        <Image src={"/circle.png"} className='mr-3' width={20} height={30} alt='space' /> Unassigned
                                    </div>
                                </div>
                            </div>
                            <div className={`p-4 mt-4 ${lightMode ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#0A1D38] border border-[#143261]"} w-[340px] rounded-lg`}>
                                <div className=' my-3 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>Start Date</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        <FaCalendar className='mr-2' /> None
                                    </div>
                                </div>
                                <div className=' my-3 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>End Date</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        <FaCalendar className='mr-2' /> None
                                    </div>
                                </div>
                            </div>
                            <div className={`p-4 mt-4 ${lightMode ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#0A1D38] border border-[#143261]"} w-[340px] rounded-lg`}>
                                <div className=' my-1 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>initiative</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        <CiCompass1 className='mr-2 text-[18px]' />  Initiative Name
                                    </div>
                                </div>
                            </div>
                            <div className={`p-4 mt-4 ${lightMode ? "bg-[#fff] border border-[#B4C6E4]" : "bg-[#0A1D38] border border-[#143261]"} w-[340px] rounded-lg`}>
                                <div className=' my-1 flex items-start justify-start'>
                                    <p className={`w-[110px] ${lightMode ? "text-[#6B8CC2]" : "text-[#6B8CC2]"}`}>Labels</p>
                                    <div className={`flex items-center justify-center ${lightMode ? "text-[#305288]" : "text-[#99C0FF]"}`}>
                                        None
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 border-b border-[#143261] pb-4 w-full'>
                                <p className={`${lightMode ? "text-[#26467A]" : "text-[#AECDFF]"}`}>25% Done, 15% In Progress</p>
                                <div className={`mt-2 w-[300px] rounded-lg h-[10px] relative ${lightMode ? "bg-[#D5E2F6]" : "bg-[#143261]"}`}>
                                    <div className={`w-[150px] h-full ${lightMode ? "bg-[#11E4C1]" : "bg-[#0C5A4D]"} absolute rounded-lg`}></div>
                                    <div className='w-[100px] h-full bg-[#0EB498] absolute rounded-lg'></div>
                                </div>
                            </div>
                            <p className={`mt-4 mb-2 text-[15px] ${lightMode ? "text-[#99C0FF]" : "text-[#305288]"}`}>Created</p>
                            <p className='mb-2 ${lightMode ? "text-[#305288] text-[16px]":"text-[16px] text-[#99C0FF]"}'>Apr 7 2023, 5:10pm</p>
                            <p className={`${lightMode ? "text-[#99C0FF]" : "text-[#305288]"}`}>Last Updated</p>
                            <p className='${lightMode ? "text-[#305288] text-[16px]":"text-[16px] text-[#99C0FF]"}'>July 7 2023, 5:10pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
