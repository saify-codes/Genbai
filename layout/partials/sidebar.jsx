'use client'

import Link from "next/link";
import { Disclosure } from '@headlessui/react'


import { FaFlag, FaHome, FaMap, FaTwitter } from "react-icons/fa";
import { FaGear, FaSquarePollVertical, FaUserPlus } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { IoColorPalette, IoPeopleCircleOutline, IoRocketSharp, IoTicket } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useTheme } from "@/context/ThemeContext";
import WorkSpaceMenuDropDown from "@/components/Sidebar/WorkSpackeMenu";
import { useUser } from "@/context/UserContext";
import { HiArrowPathRoundedSquare, HiCube, HiMiniTag } from "react-icons/hi2";
import { PiMonitorFill } from "react-icons/pi";
import { TbStackBackward } from "react-icons/tb";
import { MdAutoStories } from "react-icons/md";
import { CiRepeat } from "react-icons/ci";
import { RiTeamFill } from "react-icons/ri";
import { useState } from "react";
import ProjectCreateModal from "@/components/Sidebar/ProjectCreateModal";
import TeamsCreate from "@/components/Sidebar/TeamsCreate";



export default function sidebar() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const { workSpace, selectedProject, allTeamInProject, } = useUser();
  // const [openPanel, setOpenPanel] = useState('none');

  // const togglePanel = (panel) => {
  //   setOpenPanel(openPanel === panel ? 'none' : panel);
  // };
  


  return <>
    <aside id={theme} className="border-r p-2 bg-white z-10">
      <div className="category mb-5">
        <div className="flex justify-between">
          <p className="text-sm">WORKSPACE</p>
          <WorkSpaceMenuDropDown />
        </div>
        <ul>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <div className={`flex justify-center items-center font-semibold w-5 h-5 rounded-full uppercase bg-accent text-white`}>{workSpace?.title?.slice(0, 1)}</div>
              <p className="">{workSpace?.title}</p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="category mb-5 border-b border-[#07335F]">
        <label className="text-sm">PERSONAL</label>
        <ul>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaHome />Home
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <IoTicket />My Tickets
            </li>
          </Link>
        </ul>
      </div>

      <div className="category mb-5">
        <ProjectCreateModal />
        <ul>
          <Link href="#">
            <li className={`flex gap-2 items-center transition rounded py-2 px-3 border ${isLight ? "border-[#B4C6E4]": "border-[#143261]"}`}>
              <IoRocketSharp />{selectedProject?.Title || "No Project Selected"}
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <HiCube />Project Home
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
            <FaMap />Roadmap
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <HiMiniTag />Initiatives
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaFlag />Epics
            </li>
          </Link>
        </ul>
      </div>

      <div className="category mb-5 pb-3 border-b border-[#07335F]">
        <TeamsCreate />
        <ul>
          {allTeamInProject?.length > 0 ? 
            allTeamInProject?.map(team => (
              <Disclosure>
                <Disclosure.Button className="flex w-full gap-2 items-center py-2 px-3 hover:bg-accent hover:text-white transition rounded">
                  <IoPeopleCircleOutline />All works
                </Disclosure.Button>
                <Disclosure.Panel>
                  <ul className="pl-6">
                    <Link href="#"><li className={`flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition ${isLight ? "border-[#CCE4FF]": "border-[#07335F]"}`}><TbStackBackward />Backlog</li></Link>
                    <Link href="#"><li className={`flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition ${isLight ? "border-[#CCE4FF]": "border-[#07335F]"}`}><MdAutoStories />Stories</li></Link>
                    <Link href="#"><li className={`flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition ${isLight ? "border-[#CCE4FF]": "border-[#07335F]"}`}><CiRepeat />Sprint</li></Link>
                    <Link href="#"><li className={`flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition ${isLight ? "border-[#CCE4FF]": "border-[#07335F]"}`}><FaSquarePollVertical />Reports</li></Link>
                    <Link href="#"><li className={`flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition ${isLight ? "border-[#CCE4FF]": "border-[#07335F]"}`}><RiTeamFill />Teammates</li></Link>
                  </ul>
                </Disclosure.Panel>
              </Disclosure>))
              :
              <p className="py-2 px-3 border-l hover:text-white transition cursor-not-allowed">No Team Available</p>
            }

          {/* <Disclosure>
            <Disclosure.Button className="flex w-full gap-2 items-center rounded py-2 px-3 hover:bg-accent hover:text-white transition">
              <PiMonitorFill className="bg-green-600 p-[2px] rounded-full" />Product Team
            </Disclosure.Button>
            <Disclosure.Panel>
              <ul className="pl-6">
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><TbStackBackward />Backlog</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><MdAutoStories />Stories</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><CiRepeat />Sprint</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaSquarePollVertical />Reports</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><RiTeamFill />Teammates</li></Link>
              </ul>
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="flex w-full gap-2 items-center py-2 px-3 hover:bg-accent hover:text-white transition rounded">
              <IoColorPalette className="bg-purple-700 p-[2px] rounded-full" />Design team
            </Disclosure.Button>
            <Disclosure.Panel>
              <ul className="pl-6">
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><TbStackBackward />Backlog</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><MdAutoStories />Stories</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><CiRepeat />Sprint</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaSquarePollVertical />Reports</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><RiTeamFill />Teammates</li></Link>
              </ul>
            </Disclosure.Panel>
          </Disclosure> */}

        </ul>
      </div>

      <div className="category mb-5">

        <ul>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaUserPlus />Invite members
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaGear />Settings
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <IoMdHelpCircle />Help
            </li>
          </Link>
        </ul>
      </div>


    </aside>
  </>
}
