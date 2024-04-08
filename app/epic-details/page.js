"use client";
import Backlog from "@/components/Backlog/BacklogFirstTab";
import TableInBackLog from "@/components/Backlog/Table";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import DragAndDrop from "@/components/DragAndDrop";
import EpicsDetailsThree from "@/components/Epics/EpicsDetailsThree";
import MyTabs from "@/components/Tabs/BackLogTabs";
import AppLayout from "@/layout/app"
import { useState, Fragment } from "react";


const breadCrumbData = [
  { title: 'Projectspace', href: '/project-space' },
  { title: 'Team Name (Workflow Type)', href: 'team-name' },
  { title: 'Epic', href: 'epic' },
]

const tabs = [
    { id: 1, name: 'Overview', value: 'overview' }, 
    { id: 2, name: 'Story Board', value: "storyboard" },
    { id: 3, name: 'Story List', value: "storylist" },
];


const selectedTabData = {
    1: <EpicsDetailsThree />,
    2: <DragAndDrop />,
    3: <TableInBackLog isOpen={true} />,
}

export default function () {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <AppLayout>
      <BreadCrumb data={breadCrumbData}/>
      <h1 className="mt-2 text-2xl font-bold">{selectedTab?.name}</h1>
      <MyTabs selected={selectedTab} tabs={tabs} onChange={(value) => setSelectedTab(value)}>
        {selectedTabData[selectedTab.id]}
      </MyTabs>
    </AppLayout>
  );
}
