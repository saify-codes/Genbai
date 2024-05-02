import { useTheme } from '@/context/ThemeContext'
import { BacklogDoneGreen, BacklogInProgressOrange, BacklogPlannedYellow, CalenderIcon, CircleLabel, StoryBook, StoryPoint, TicketTypeIcons } from '@/utils/svg_icons';
import dayjs from 'dayjs';
import React from 'react'
import ProgressBarForInitiative from '../Charts/ProgressBarForInitiative';
import Image from 'next/image';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { COLORS } from '@/utils/Constant_Data';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import { TbLoader } from 'react-icons/tb';
import { GiFallingStar } from 'react-icons/gi';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { BiLoaderCircle } from 'react-icons/bi';



const EPIC_TYPE = {
    'TO DO': BacklogPlannedYellow,
    'IN PROGRESS': BacklogInProgressOrange,
    'DONE': BacklogDoneGreen,
    'BACKLOG': TbLoader,
}
// [
//     { id: 1, title: 'TO DO', Icon: BacklogPlannedYellow }, 
//     { id: 2, title: 'In Progress', Icon: BacklogInProgressOrange }, 
//     { id: 3, title: 'DONE', Icon: BacklogDoneGreen }, 
// ]

const STORIES_DATA = {
    'BACKLOG': [
        { id: 1, text: 'Some Story Name Goes Here And gets cropped out', status: 'Unrefined', },
        { id: 2, text: 'Some Story Name Goes Here And gets cropped out', status: 'Ready To Refined', },
    ],
    'TO DO': [
        { id: 11, text: 'Some Story Name Goes Here And gets cropped out', status: 'Ready To Develop', },
        { id: 21, text: 'Some Story Name Goes Here And gets cropped out', status: 'Ready To Develop', },
    ],
    'IN PROGRESS': [
        { id: 12, text: 'Some Story Name Goes Here And gets cropped out', status: 'In Development', },
        { id: 22, text: 'Some Story Name Goes Here And gets cropped out', status: 'In Development', },
    ],
}

const BagdeForStory = ({ status, isLight }) => {
    if(status === 'Unrefined' || status === 'Ready To Refined' || status === 'BACKLOG'){
        return(
            <button className={`flex items-center justify-start gap-2 no-break ${isLight ? "bg-[#F2F7FD]" : "bg-[#12294E]"} text-sm px-2 py-1 rounded-md`}>
                <BiLoaderCircle className={`${isLight ? "text-[#FFF]": "text-[#000]"}`} />
                Unrefined
            </button>
        );
    }
    else if(status === 'Ready To Develop' || status === 'TO DO'){
        return(
            <button className={`flex items-center justify-start gap-2 no-break bg-[#EDA812]  ${isLight ? "text-white" : "text-black"} text-sm px-2 py-1 rounded-md`}>
                <BacklogPlannedYellow color={isLight ? "#FFF": "#000"} />
                Ready To Develop
            </button>
        );
    }
    else if(status === 'In Development' || status === 'IN PROGRESS'){
        return(
            <button className={`flex items-center justify-start gap-2 no-break bg-[#F46A2A]  ${isLight ? "text-white" : "text-black"} text-sm px-2 py-1 rounded-md`}>
                <BacklogInProgressOrange color={isLight ? "#FFF": "#000"} />
                In Development
            </button>
        );
    }
}

// { id: 1, title: "Frontend Redesign", status: 'On Track', date: 'Mar 23', storyPoint: 60, storyBook: 15, tags: ["Frontend", "Design"], project: 'PRJ-1', },

const AllSprintData = ({ data=[] }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
  return (
    <div className='overflow-auto pb-4'>
      <div className="flex gap-2 mt-3">
        {Object.keys(EPIC_TYPE)?.map((key, i) => {
            const Icon = EPIC_TYPE[key];
            return(
                <div key={i} className={`rounded-lg py-3 px-2 ${isLight ? "bg-[#F2F7FD] text-[#305288]": "bg-[#061123] text-white"}`}>
                    <div className="flex justify-center items-center gap-2 mb-3">
                        <Icon />
                        <span className='uppercase text-lg'>{key}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        {data?.map(epic => (
                            <div key={epic.id} className={`relative rounded-lg p-4 w-[480px] border ${isLight ? "bg-white text-[#305288] border-[#EEF2F7]": "bg-[#0A1D38] text-[#99C0FF] border-[#143261]"}`}>
                                <div className="absolute top-2 right-2">
                                    <HiOutlineDotsHorizontal className='text-2xl' />
                                </div>
                                <div className="flex justify-between">
                                    <div className='flex items-center gap-2'>
                                        <BacklogPlannedYellow />
                                        <span className={`font-semibold text-lg ${isLight ? "": ""}`}>{epic.Title}</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <p className=''>25% Done, 15% In Progress</p>
                                    <div className="mt-1 h-full flex items-center">
                                        <ProgressBarForInitiative />
                                    </div>
                                </div>
                                <div className="flex gap-1 flex-wrap items-center mt-3">
                                    <div className={`flex gap-2 items-center rounded-sm px-2 py-1 ${isLight ? "bg-green-50": "bg-[#12294E]"}`}>
                                        <div className={`rounded-full w-3 h-3 p-1 flex justify-center items-center border-2 border-green-700 bg-green-700 ${isLight ? "": ""}`}>
                                            <div className="bg-green-700 w-2 h-2 rounded-full"></div>
                                        </div>
                                        <p className="text-green-700 m-0 font-semibold">{epic?.status || 'On Track'}</p>
                                    </div>
                                    <div className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                        <CalenderIcon />
                                        <span className="">{dayjs(epic?.StartDate, "YYYY-MM-DD").format('MMM D')}</span>
                                    </div>
                                    <div className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                        <StoryPoint />
                                        <span className="">{epic?.storyPoint || 60}</span>
                                    </div>
                                    <div className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                        <StoryBook />
                                        <span className="">{epic?.storyBook || 16}</span>
                                    </div>
                                    {["Frontend", "Design"]?.map((tag, i) => (
                                        <div key={tag+i} className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                            <CircleLabel color={COLORS[tag]} />
                                            <span className="">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 w-full flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <TicketTypeIcons />
                                        <span className="">{epic?.project || "PRJ-1"}</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className='h-[34px] w-[34px]'>
                                            <Image src="/user2.jpg" alt="avatar" className="rounded-full" width={34} height={44} />
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                        <div className="flex h-[34px]">
                                            <Image src="/IndividualAssignees.png" alt="" className='' width={90} height={25} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`py-3 border-t ${isLight ? "border-[#EEF2F7]": "border-[#143261]"}`}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className={`w-full flex items-center justify-center gap-2 font-semibold`}>
                                                Show Stories
                                                <TiArrowSortedDown className={open ? 'rotate-180 transform' : ''} />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className={`p-2 rounded-lg mt-2 ${isLight ? "bg-[#F2F7FD]": "bg-[#061123]"}`}>
                                                <div className="mt-2">
                                                    {Object.keys(STORIES_DATA)?.map((StoryName, ind) => {
                                                        const Icon = EPIC_TYPE[StoryName];
                                                        return(
                                                            <React.Fragment key={ind}>
                                                                <div className={`flex items-center gap-2 ${ind === 0 ? "": "mt-5"}`}>
                                                                    <Icon />
                                                                    <span className=''>{StoryName}</span>
                                                                    <div className={`rounded-md w-5 flex justify-center items-center ${isLight ? "bg-[#D5E2F6]": "bg-[#143261]"}`}>3</div>
                                                                </div>
                                                                <div className="flex flex-col gap-2 w-full mt-1">
                                                                    {[1, 2].map((item, i) => (
                                                                        <div key={i} className={`flex justify-between gap-1 w-full p-[6px] rounded-lg ${isLight ? "bg-white text-[bg-[#12294E]]": "bg-[#12294E] text-white"}`}>
                                                                            <div className={`flex items-center gap-1`}>
                                                                                <div className="flex items-center">
                                                                                    <GiFallingStar className={`rotate-180 bg-[#F46A2A] ${isLight ? "text-[#fff]" : ""} rounded-sm text-[16px] p-[1px] mr-2`} />
                                                                                    <span className='no-break text-sm'>PRJ-1</span>
                                                                                </div>
                                                                                <p className={`text-overflow font-semibold text-sm max-w-[150px] ${isLight ? "text-[#143261]" : "text-[#AECDFF]"}`}>Some Story Name Goes Here And gets cropped out</p>
                                                                            </div>
                                                                            <div className='flex items-center justify-center min-w-[150px]'>
                                                                                <MdOutlineKeyboardDoubleArrowDown className='text-[22px] text-[#1354D7]' />
                                                                                <Image src={"/paint.png"} width={20} height={30} className='mx-3' alt='Teams' />
                                                                                <BagdeForStory status={StoryName} isLight={isLight} />
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </React.Fragment>
                                                    )})}
                                                </div>
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default AllSprintData
