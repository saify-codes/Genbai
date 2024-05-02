"use client";
import Backlog from "@/components/Backlog/BacklogFirstTab";
import SearchAndDropDownInBackLog from "@/components/Backlog/SearchAndDropDownInBackLog";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import DragAndDrop from "@/components/DragAndDrop";

import Dropdown from "@/components/Dropdown";
import withAuth from "@/components/HOC/withAuth";
import Searchbar from "@/components/Searchbar";
import AllSprintData from "@/components/Sprint/AllSprintData";
import NoSprint from "@/components/Sprint/NoSprint";
import MyTabs from "@/components/Tabs/BackLogTabs";
import { useTheme } from "@/context/ThemeContext";
import AppLayout from "@/layout/app"
import MyAxios from "@/utils/AxiosConfig";
import { useState, Fragment, useEffect } from "react";
// import { useRouter } from 'next/router';


const breadCrumbData = [
  { title: 'Project Name', href: '/project-name' },
  { title: 'Team Name (Workflow Type)', href: '/team-name' },
  { title: 'Sprint', href: '/sprint' },
]

const TABS = [
    { id: 1, name: 'Sprint Planning', value: 'first' }, 
    { id: 2, name: 'Active Sprint', value: "second" },
    { id: 3, name: 'Retrospectives', value: "third" },
    // { id: 4, name: 'No Sprint (This tab will remove from here)', value: "fourth" },
];


const NAME_DATA_FOR_DROPDOWN = ["Sprint Cycles", "Story Owners", "Epics", "Story Types", "Story Status"];


function SprintPage ({ params }) {
    const [selectedTab, setSelectedTab] = useState(TABS[0]);
    const [allSprints, setAllSprints] = useState([]);
    const teamId = params.teamId;

    const addNewSprint = (data) => {
      console.log(data, "=sprintDataaaaaa,jsjsj");
      setAllSprints(prev => ([...prev, data]));
    }

    const DATA_TO_BE_DISPLAY = {
      1: allSprints?.length > 0 ? <AllSprintData data={allSprints} teamId={teamId} />: <NoSprint teamId={teamId} addNew={addNewSprint} />,
      2: <DragAndDrop />,
      3: <NoSprint />,
    }

    console.log("==teamIddddddd, ", params.teamId);

    const getAllSprintByTeamId = (teamId) => {
      MyAxios.get(`/sprint/team/${teamId}`)
      .then(res => {
        console.log(res.data, "=res:sprint by teamId");
        setAllSprints(res.data.data);
      })
      .catch(error => {
        console.log(error, "=error:sprint by teamId");
      })
    }

    useEffect(()=>{
      if(teamId && teamId !== 'undefined' && teamId !== 'null'){
        getAllSprintByTeamId(teamId)
      }
    }, [teamId]);

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

export default withAuth(SprintPage);