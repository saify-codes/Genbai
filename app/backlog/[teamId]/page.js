"use client";
// import dynamic from 'next/dynamic'
 
// const Backlog = dynamic(() => import('@/components/Backlog/BacklogFirstTab'), {
//   ssr: false,
// });
import Backlog from "@/components/Backlog/BacklogFirstTab";
import SearchAndDropDownInBackLog from "@/components/Backlog/SearchAndDropDownInBackLog";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import DragAndDrop from "@/components/DragAndDrop";

import Dropdown from "@/components/Dropdown";
import withAuth from "@/components/HOC/withAuth";
import Searchbar from "@/components/Searchbar";
import MyTabs from "@/components/Tabs/BackLogTabs";
import { useTheme } from "@/context/ThemeContext";
import AppLayout from "@/layout/app"
import { useState, Fragment } from "react";


const breadCrumbData = [
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
    2: <DragAndDrop />,
}

function BacklogPage ({ params }) {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    console.log(selectedTab, "===selectedTabaabbbsss, team = ", params.teamId);

  return (
    <AppLayout>
      <BreadCrumb data={breadCrumbData}/>
      <h1 className="mt-2 text-2xl font-bold">{selectedTab?.name}</h1>
      <MyTabs selected={selectedTab} tabs={tabs} onChange={(value) => setSelectedTab(value)}>
        <SearchAndDropDownInBackLog />
        {selectedTab.id === 1 ? <Backlog /> : <DragAndDrop />}
      </MyTabs>
    </AppLayout>
  );
}

export default withAuth(BacklogPage);