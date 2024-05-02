import { useTheme } from '@/context/ThemeContext';
import { BacklogPlannedYellow, CalenderIcon, CircleLabel, StoryBook, StoryPoint, TicketTypeIcons } from '@/utils/svg_icons';
import React from 'react'
import ProgressBarForInitiative from '../Charts/ProgressBarForInitiative';
// import avatar from '@/public/user2.jpg';
// import avatarGroup from '@/public/IndividualAssignees.png';
import Image from "next/image"
import { COLORS } from '@/utils/Constant_Data';

const DATA = [
    { id: 1, title: "Frontend Redesign", status: 'On Track', date: 'Mar 23', storyPoint: 60, storyBook: 15, tags: ["Frontend", "Design"], project: 'PRJ-1', },
    { id: 2, title: "Frontend Redesign", status: 'On Track', date: 'Mar 23', storyPoint: 60, storyBook: 15, tags: ["Frontend", "Design"], project: 'PRJ-1', },
    { id: 3, title: "Frontend Redesign", status: 'On Track', date: 'Mar 23', storyPoint: 60, storyBook: 15, tags: ["Frontend", "Design"], project: 'PRJ-1', },
    { id: 4, title: "Frontend Redesign", status: 'On Track', date: 'Mar 23', storyPoint: 60, storyBook: 15, tags: ["Frontend", "Design"], project: 'PRJ-1', },
    { id: 5, title: "Frontend Redesign", status: 'On Track', date: 'Mar 23', storyPoint: 60, storyBook: 15, tags: ["Frontend", "Design"], project: 'PRJ-1', },
]



const InitiativesMainComponent = ({ data=[] }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const REDNDER = [{ id: 0, }, ...data];
    return (
        <div className='flex w-full overflow-auto gap-2'>
            {REDNDER?.map(data => (
                <div key={data.id} className={`flex flex-col gap-2 w-[360px] h-fit rounded-lg border-[1px] ${isLight ? "border-[#EEF2F7]": "border-[#143261]"}`}>
                    {data.id === 0 ?
                        <div className={`${isLight ? "bg-[#F2F7FD]": "bg-[#061123]"} p-2 rounded-sm mb-3`}>
                            <p className={`${isLight ? "text-[#305288]": "text-[#99C0FF]"} mt-1 text-xl font-semibold`}>Epic Backlog</p>
                            <p className={`${isLight ? "text-[#305288]": "text-[#99C0FF]"} mt-2`}>This is a list of incomplete Epics not yet included in an Initiative, sorted by due date.</p>
                            <p className={`${isLight ? "text-[#305288]": "text-[#99C0FF]"} mt-4`}>Drag and drop these Epics into an initiative as needed.</p>
                        </div>
                        :
                        <div className={`${isLight ? "bg-[#F2F7FD]": "bg-[#061123]"} p-2 rounded-sm mb-3`}>
                            <p className={`${isLight ? "text-[#305288]": "text-[#427CF0]"} mt-1 text-xl font-semibold mb-3`}>{data?.Title}</p>
                            <div className={`flex items-center gap-3 ${isLight ? "text-[#305288]": "text-[#99C0FF]"} mt-2`}>
                                <div className={`flex items-center gap-3 px-2 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                    <TicketTypeIcons />
                                    <span className="">5</span>
                                </div>
                                <div className={`flex items-center gap-3 px-2 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                    <StoryPoint />
                                    <span className="">20</span>
                                </div>
                                <div className={`flex items-center gap-3 px-2 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                    <StoryPoint />
                                    <span className="">85</span>
                                </div>
                            </div>
                            <p className={`${isLight ? "text-[#305288]": "text-[#99C0FF]"} mt-4`}>25% Done, 15% In Progress</p>
                            <div className="mt-1 h-full flex items-center w-full">
                                <ProgressBarForInitiative />
                            </div>
                        </div>
                    }
                    <div className="flex flex-col gap-2">
                        {DATA?.map(data => (
                            <div key={data.id} className={`rounded-lg p-4 w-[360px] border-[1px] ${isLight ? "bg-white text-[#305288] border-[#EEF2F7]": "bg-[#0A1D38] text-[#99C0FF] border-[#143261]"}`}>
                                <div className="flex justify-between">
                                    <div className='flex items-center gap-2'>
                                        <BacklogPlannedYellow />
                                        <span className={`font-semibold text-lg ${isLight ? "": ""}`}>{data.title}</span>
                                    </div>
                                    <div className={`flex gap-2 items-center rounded-sm px-2 py-1 ${isLight ? "bg-green-50": "bg-[#12294E]"}`}>
                                        <div className={`rounded-full w-3 h-3 p-1 flex justify-center items-center border-2 border-green-700 bg-green-700 ${isLight ? "": ""}`}>
                                            <div className="bg-green-700 w-2 h-2 rounded-full"></div>
                                        </div>
                                        <p className="text-green-700 m-0 font-semibold">{data?.status}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 flex-wrap items-center mt-2">
                                    <div className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                        <CalenderIcon />
                                        <span className="">{data?.date}</span>
                                    </div>
                                    <div className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                        <StoryPoint />
                                        <span className="">{data?.storyPoint}</span>
                                    </div>
                                    <div className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                        <StoryBook />
                                        <span className="">{data?.storyBook}</span>
                                    </div>
                                    {data?.tags?.map((tag, i) => (
                                        <div key={tag+i} className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"}`}>
                                            <CircleLabel color={COLORS[tag]} />
                                            <span className="">{tag}</span>
                                        </div>
                                    ))}
                                    <div className="h-full flex items-center w-[80px]">
                                        <ProgressBarForInitiative />
                                    </div>
                                </div>
                                <div className="mt-5 w-full flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <TicketTypeIcons />
                                        <span className="">{data?.project}</span>
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
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
  )
}


export default InitiativesMainComponent
