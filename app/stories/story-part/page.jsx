'use client'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { LuAtom } from "react-icons/lu";
import { FaEye, FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import Image from 'next/image'
import { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoGift } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import TableInBackLog from '@/components/Backlog/Table';
import TableHeader from '@/components/Backlog/TableHeader';
import { useDisclosure } from '@mantine/hooks';

const page = ({ isOpen = false }) => {
    const [lightMode, setLightMode] = useState(false)
    const [eppic, setEpic] = useState(false)
    const [owner, setOwner] = useState(false)
    const [storyType, setStoryType] = useState(false)
    const [deliverable, setDeliverable] = useState(false)
    const [sprint, setSprint] = useState(false)
    const [label, setLabel] = useState(false)
    const [opened, { toggle }] = useDisclosure(isOpen);
    const table = [
        {
            id: "PRJ-001",
            type: "Feature",
            name: "Some Story Name Goes Here",
            epic: "Some Epic Name",
            Workflow: "Product Development",
            status: "Ready To Release",
            sprint: "Some Sprint Name"
        },
        {
            id: "PRJ-001",
            type: "Feature",
            name: "Some Story Name Goes Here",
            epic: "Some Epic Name",
            Workflow: "Product Development",
            status: "Ready To Release",
            sprint: "Some Sprint Name"
        },
        {
            id: "PRJ-001",
            type: "Feature",
            name: "Some Story Name Goes Here",
            epic: "Some Epic Name",
            Workflow: "Product Development",
            status: "Ready To Release",
            sprint: "Some Sprint Name"
        },
        {
            id: "PRJ-001",
            type: "Feature",
            name: "Some Story Name Goes Here",
            epic: "Some Epic Name",
            Workflow: "Product Development",
            status: "Ready To Release",
            sprint: "Some Sprint Name"
        },
        {
            id: "PRJ-001",
            type: "Feature",
            name: "Some Story Name Goes Here",
            epic: "Some Epic Name",
            Workflow: "Product Development",
            status: "Ready To Release",
            sprint: "Some Sprint Name"
        },

    ]

    return (
        <>
            <Header light={lightMode} lightMode={lightMode} setLightMode={setLightMode} />
            <div className='flex items-start justify-start'>
                <Sidebar height={170.3} light={lightMode} />
                <div className="bg-[#06152D] w-full h-[170.3vh] text-[#99C0FF] overflow-x-scroll overflow-y-scroll">
                    <p className='flex items-center  justify-start m-4 text-[#6B8CC2]'>Project Name / Team name (Workflow Type) / <span className='text-[#99C0FF]'> &ensp;Stories</span> </p>
                    <h1 className='text-2xl text-[#99C0FF] font-medium ml-4'>Stories</h1>
                    <div className='ml-4 mt-4  flex item-center justify-between'>
                        <div className='flex items-center space-x-3 top-[300px]'>
                            <div className='bg-[#0A1D38] border border-[#143261] rounded-sm py-[7px] flex items-center justify-start px-2 outline-none w-[280px]'>
                                <IoIosSearch className='text-[20px] mr-4 text-[#305288]' />
                                <input type="text" className='bg-transparent w-full outline-none placeholder:text-[#305288]' placeholder='Search Stories' />
                            </div>
                            <button onClick={() => setOwner(!owner)} className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2'> <span className='text-[#99C0FF]'>&ensp;Owner&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${owner ? "fixed rounded-lg w-[300px] z-10  bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[14rem] left-[31rem]" : "hidden"}`}>
                                <h1 className="text-[14px]">FILTER BY OWNER</h1>
                                <div className="mt-2 border border-[#305288] flex items-center justify-center p-2 rounded-lg">
                                    <IoSearch />
                                    <input className="w-full bg-transparent pl-2 text-[15px] outline-none" type="text" placeholder='Search Owners' />
                                </div>
                                <p className='my-4 rounded-md border border-[#143261] bg-[#12294E] p-2 pl-4'>All Owners</p>
                                <div>
                                    <h4 className='text-[14px]'>No Owners</h4>
                                    <ul>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/owner.png" className='mr-2' width="20" height="20" />
                                            John Doe</li>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/owner.png" className='mr-2' width="20" height="20" />
                                            John Doe</li>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/owner.png" className='mr-2' width="20" height="20" />
                                            John Doe</li>

                                    </ul>
                                </div>
                                <div className='mt-3'>
                                    <h4 className='text-[14px]'>TEAM NAME</h4>
                                    <ul>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/owner.png" className='mr-2' width="20" height="20" />
                                            John Doe</li>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/owner.png" className='mr-2' width="20" height="20" />
                                            John Doe</li>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/owner.png" className='mr-2' width="20" height="20" />
                                            John Doe</li>
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setEpic(!eppic)} className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2'> <span className='text-[#99C0FF]'>&ensp;Epics&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${eppic ? "fixed rounded-lg w-[300px] bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[14rem] left-[37rem] z-20" : "hidden"}`}>
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
                            <div className={`${storyType ? "fixed rounded-lg w-[300px] z-30 bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[14rem] left-[43rem]" : "hidden"}`}>
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
                            <button onClick={() => setSprint(!sprint)} className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2'> <span className='text-[#99C0FF]'>&ensp;Sprints&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${sprint ? "fixed rounded-lg w-[300px]   bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[14rem] left-[52rem] z-40" : "hidden"}`}>
                                <h1 className="text-[14px]">FILTER BY SPRINT</h1>
                                <div className="mt-2 border border-[#305288] flex items-center justify-center p-2 rounded-lg">
                                    <IoSearch />
                                    <input className="w-full bg-transparent pl-2 text-[15px] outline-none" type="text" placeholder='Search Sprints' />
                                </div>
                                <p className='my-4 rounded-md border border-[#143261] bg-[#12294E] p-2 pl-4'>All Sprints</p>
                                <div>
                                    <ul>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/spr.png" className='mr-2' width="20" height="20" />
                                            Sprint Name</li>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/spr.png" className='mr-2' width="20" height="20" />
                                            Sprint Name</li>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/spr.png" className='mr-2' width="20" height="20" />
                                            Sprint Name</li>
                                        <li className='flex items-center mt-4'>
                                            <Image src="/spr.png" className='mr-2' width="20" height="20" />
                                            Sprint Name</li>

                                    </ul>
                                </div>
                            </div>
                            <button className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 ' onClick={() => setDeliverable(!deliverable)}> <span className='text-[#99C0FF]'>&ensp;Deliverables&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${deliverable ? "fixed rounded-lg w-[300px] z-30 bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[14rem] left-[59rem]" : "hidden"}`}>
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
                            <button onClick={() => setLabel(!label)} className='text-[15px] flex items-center justify-center bg-[#12294E] border border-[#143261] rounded-sm p-2 '> <span className='text-[#99C0FF]'>&ensp;Labels&ensp;</span> <IoIosArrowDown /></button>
                            <div className={`${label ? "fixed rounded-lg w-[260px] z-30 bg-[#0A1D38] p-4 overflow-y-scroll h-[350px] top-[14rem] left-[68rem]" : "hidden"}`}>
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
                    <div className='flex flex-col space-y-2 items-center justify-center p-4'>
                        <div className='flex flex-col space-y-2 items-center justify-center p-4'>
                            {/* <div className='w-full h-10 bg-[#061123]'></div> */}
                            <div className="flex items-center w-full flex-col justify-center">
                                <div className='w-[1500px] ml-[360px]'>
                                    <TableHeader opened={opened} toggle={toggle} />
                                </div>
                                <table className="overflow-y-scroll ml-[360px] w-[1500px] text-sm text-left rtl:text-right rounded-md bg-[#0A1D38] border border-[#143261]">
                                    <thead className="text-sm font-light border-b border-[#143261] text-[#99C0FF]">
                                        <tr className='w-full'>
                                            <th scope="col" className="px-6 py-3">
                                                <input type="checkbox" className='appearance-none w-[15px] h-[15px] bg-[#0a1d38] border border-[#143261] mr-4 rounded-sm' />  ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Epic
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Team
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Owner
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Workflow
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Sprint
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            table.map((item) => {
                                                return (
                                                    <tr className="border-b  border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                            <input type="checkbox" className='rounded-sm appearance-none w-[15px] h-[15px] bg-[#0a1d38] border border-[#143261] mr-4' />   {item.id}
                                                        </th>
                                                        <td className="flex items-center justify-center px-6 py-4">
                                                            <Image className='mr-2' src="ticket.png" alt="ticket" width={15} height={15} /> {item.type}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.name}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.epic}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Image src="paint.png" width={25} height={25} alt='paint brush' />
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Image src="ProfileIcon.png" width={25} height={25} alt='paint brush' />
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.Workflow}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.status}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.sprint}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex items-center w-full flex-col justify-center mt-2">
                            <div className='w-[1500px] ml-[360px]'>
                                    <TableHeader opened={opened} toggle={toggle} />
                                </div>
                                <table className="overflow-y-scroll ml-[360px] w-[1500px] text-sm text-left rtl:text-right rounded-md bg-[#0A1D38] border border-[#143261]">
                                    <thead className="text-sm font-light border-b border-[#143261] text-[#99C0FF]">
                                        <tr className='w-full'>
                                            <th scope="col" className="px-6 py-3">
                                                <input type="checkbox" className='appearance-none w-[15px] h-[15px] bg-[#0a1d38] border border-[#143261] mr-4 rounded-sm' />  ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Epic
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Team
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Owner
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Workflow
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Sprint
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            table.map((item) => {
                                                return (
                                                    <tr className="border-b  border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                            <input type="checkbox" className='rounded-sm appearance-none w-[15px] h-[15px] bg-[#0a1d38] border border-[#143261] mr-4' />   {item.id}
                                                        </th>
                                                        <td className="flex items-center justify-center px-6 py-4">
                                                            <Image className='mr-2' src="ticket.png" alt="ticket" width={15} height={15} /> {item.type}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.name}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.epic}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Image src="paint.png" width={25} height={25} alt='paint brush' />
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <Image src="ProfileIcon.png" width={25} height={25} alt='paint brush' />
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.Workflow}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.status}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.sprint}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page