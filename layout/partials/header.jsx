'use client'

import Dropdown from "@/components/Dropdown";
import Searchbar from "@/components/Searchbar";
import Notification from "@/components/Notification"
import Profile from "@/components/Profile"
import ToggleTheme from "@/components/ToggleTheme";

import { GoPlus } from "react-icons/go";
import { IoLogoReact } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import ThemeToggleButton from "@/components/Button/ThemeToggleButton";
import { useTheme } from "@/context/ThemeContext";

export default function () {
  const { theme } = useTheme();

  const toggleSidebar = ()=>{
    const sidebar = document.querySelector('#app aside')
    sidebar.classList.toggle('active')
  }
  return <>
    <header id={theme} className="bg-white p-2 border-b">
      <nav className="m-auto max-w-7xl flex items-center gap-2">
        <div className="logo">
          <Image src='/logo.png' width="100" height="100" alt="" />
        </div>

        <Dropdown title="create story" icon={<GoPlus />} />
        <Dropdown title="generate story in sprint" icon={<IoLogoReact />} />
        <Searchbar />
        <button className="mr-auto md:hidden" onClick={toggleSidebar}>
          <CiMenuFries/>
        </button>
        {/* <ToggleTheme/> */}

        <div className="flex gap-3 items-center">
          <ThemeToggleButton />
          <Notification />
          <Profile />
        </div>

      </nav>

    </header>
  </>
}
