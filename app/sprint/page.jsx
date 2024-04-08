"use client";
import { useEffect, useState } from 'react';
import AppLayout from "@/layout/app";
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import MyTabs from "@/components/Tabs/BackLogTabs";
import SprintPlanning from '@/components/Sprint/SprintPlanning';
import ActiveSprint from '@/components/Sprint/ActiveSprint';

const breadCrumbData = [
  { title: 'Project Name', href: '/project-name' },
  { title: 'Team Name (Workflow Type)', href: 'team-name' },
  { title: 'Sprint', href: 'sprint' },
];

const tabs = [
  { id: 1, name: 'Sprint Planning', value: 'Sprint_Planning' },
  { id: 2, name: 'Active Sprint', value: "Active_Sprint" },
  { id: 3, name: 'Retrospectives', value: "Retrospectives" },
  { id: 4, name: 'Sprint Planning (To Be Removed)', value: "sprint_Planning_Removed" },
];

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [show, setShow] = useState(true);


  const selectedTabData = {
    1: <SprintPlanning show={show} />,
    2: <ActiveSprint />,
    3: <></>,
    4: <SprintPlanning show={!show} />,
  };

  return (
    <AppLayout>
      <BreadCrumb data={breadCrumbData}/>
      <h1 className="mt-2 text-2xl font-bold">{selectedTab?.name}</h1>
      <MyTabs selected={selectedTab} tabs={tabs} onChange={(value) => setSelectedTab(value)}>
        {selectedTabData[selectedTab.id]}
      </MyTabs>
    </AppLayout>
  );
};

export default Page;
