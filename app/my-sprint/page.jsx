"use client";
import Backlog from "@/components/Backlog/BacklogFirstTab";
import SearchAndDropDownInBackLog from "@/components/Backlog/SearchAndDropDownInBackLog";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import DragAndDrop from "@/components/DragAndDrop";

import Dropdown from "@/components/Dropdown";
import withAuth from "@/components/HOC/withAuth";
import Searchbar from "@/components/Searchbar";
import NoSprint from "@/components/Sprint/NoSprint";
import MyTabs from "@/components/Tabs/BackLogTabs";
import { useTheme } from "@/context/ThemeContext";
import AppLayout from "@/layout/app"
import { useState, Fragment } from "react";


const breadCrumbData = [
  { title: 'Project Name', href: '/project-name' },
  { title: 'Team Name (Workflow Type)', href: '/team-name' },
  { title: 'Sprint', href: '/sprint' },
]

const TABS = [
    { id: 1, name: 'Sprint Planning', value: 'first' }, 
    { id: 2, name: 'Active Sprint', value: "second" },
    { id: 3, name: 'Retrospectives', value: "third" },
    { id: 4, name: 'No Sprint (This tab will remove from here)', value: "fourth" },
];


const NAME_DATA_FOR_DROPDOWN = ["Sprint Cycles", "Story Owners", "Epics", "Story Types", "Story Status"];

const DATA_TO_BE_DISPLAY = {
    1: <NoSprint />,
    2: <DragAndDrop />,
    3: <NoSprint />,
    4: <NoSprint />,
}

function SprintPage () {
    const [selectedTab, setSelectedTab] = useState(TABS[0]);

    console.log(selectedTab, "===selectedTabaabbbsss:sprintPage");

  return (
    <AppLayout>
      <BreadCrumb data={breadCrumbData}/>
      <h1 className="mt-2 text-2xl font-bold">{selectedTab?.name}</h1>
      <MyTabs selected={selectedTab} tabs={TABS} onChange={(value) => setSelectedTab(value)}>
        <SearchAndDropDownInBackLog NAME={NAME_DATA_FOR_DROPDOWN} />
        {DATA_TO_BE_DISPLAY[selectedTab?.id]}
      </MyTabs>
    </AppLayout>
  );
}


// export default SprintPage;
export default withAuth(SprintPage);