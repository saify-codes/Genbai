"use client";
import Backlog from "@/components/Backlog/BacklogTab";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import Dropdown from "@/components/Dropdown";
import Searchbar from "@/components/Searchbar";
import MyTabs from "@/components/Tabs/Tabs";
import { useTheme } from "@/context/ThemeContext";
import AppLayout from "@/layout/app"
import { useState, Fragment } from "react";


const items = [
  { title: 'Project Name', href: '/project-name' },
  { title: 'Team Name (Workflow Type)', href: 'team-name' },
  { title: 'Backlog', href: 'backlog' },
]

const tabs = [
    { id: 1, name: 'Backlog', value: 'first' }, 
    { id: 2, name: 'Backlog Refining', value: "second" },
];


const selectedTabData = {
    1: <Backlog />,
    2: <></>,
}

export default function () {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <AppLayout>
      <BreadCrumb data={items}/>
      <h1 className="mt-2 text-2xl font-bold">Backlog</h1>
      <MyTabs selected={selectedTab} tabs={tabs} data={selectedTabData[selectedTab.id]} onChange={(value) => setSelectedTab(value)} />
    </AppLayout>
  );
}
