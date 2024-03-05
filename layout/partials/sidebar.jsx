'use client'

import Link from "next/link";
import { Disclosure } from '@headlessui/react'


import { FaTwitter } from "react-icons/fa";
import { FaGear, FaUserPlus } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { IoTicket, IoRocketSharp } from "react-icons/io5";
import { RiHome4Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useTheme } from "@/context/ThemeContext";

export default function sidebar() {
  const { theme } = useTheme();
  return <>
    <aside id={theme} className="border-r p-2 bg-white z-50">

      <div className="category mb-5">
        <label className="text-sm">WORKSPACE</label>
        <ul>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaTwitter />Twitter
            </li>
          </Link>
        </ul>
      </div>

      <div className="category mb-5">
        <label className="text-sm">WORKSPACE</label>
        <ul>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaTwitter />Twitter
            </li>
          </Link>
        </ul>
      </div>

      <div className="category mb-5">
        <label>PROJECT SPACE</label>
        <h2 className="flex gap-2 items-center py-2 px-3 border-b">
          <IoRocketSharp />Engineering department
        </h2>

        <ul>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaTwitter />Project home
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaTwitter />Project home
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaTwitter />Project home
            </li>
          </Link>
          <Link href="#">
            <li className="flex gap-2 items-center hover:bg-accent hover:text-white transition rounded py-2 px-3">
              <FaTwitter />Project home
            </li>
          </Link>
        </ul>
      </div>

      <div className="category mb-5 pb-3 border-b">
        <div className="flex justify-between items-center">
          <label className="text-sm">TEAMS</label>
          <div className="space-x-2">
            <button><GoPlus /></button>
            <button><BsThreeDots /></button>
          </div>
        </div>

        <ul>

          <Disclosure>
            <Disclosure.Button className="flex w-full gap-2 items-center py-2 px-3 hover:bg-accent hover:text-white transition rounded">
              <FaTwitter />All works
            </Disclosure.Button>
            <Disclosure.Panel>
              <ul className="pl-6">
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Backlog</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Stories</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Sprint</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Sprints</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Reports</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Teammates</li></Link>
              </ul>
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="flex w-full gap-2 items-center rounded py-2 px-3 hover:bg-accent hover:text-white transition">
              <FaTwitter />Product team
            </Disclosure.Button>
            <Disclosure.Panel>
              <ul className="pl-6">
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Backlog</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Stories</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Sprint</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Sprints</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Reports</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Teammates</li></Link>
              </ul>
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="flex w-full gap-2 items-center py-2 px-3 hover:bg-accent hover:text-white transition rounded">
              <FaTwitter />Design team
            </Disclosure.Button>
            <Disclosure.Panel>
              <ul className="pl-6">
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Backlog</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Stories</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Sprint</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Sprints</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Reports</li></Link>
                <Link href="#"><li className="flex gap-2 items-center py-2 px-3 border-l hover:bg-accent hover:text-white transition"><FaGear />Teammates</li></Link>
              </ul>
            </Disclosure.Panel>
          </Disclosure>

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
