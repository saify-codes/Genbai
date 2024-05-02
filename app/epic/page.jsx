"use client";
// import dynamic from 'next/dynamic'
 
// const Backlog = dynamic(() => import('@/components/Backlog/BacklogFirstTab'), {
//   ssr: false,
// });
import Backlog from "@/components/Backlog/BacklogFirstTab";
import SearchAndDropDownInBackLog from "@/components/Backlog/SearchAndDropDownInBackLog";
import TableInBackLog from "@/components/Backlog/Table";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import DragAndDrop from "@/components/DragAndDrop";

import Dropdown from "@/components/Dropdown";
import AllEpicData from "@/components/Epics/AllEpicData";
import ManageTheEpics from "@/components/Epics/ManageTheEpics";
import SearchAndDropDownInEpic from "@/components/Epics/SearchAndDropDownInEpic";
import TableInEpic from "@/components/Epics/TableInEpic";
import withAuth from "@/components/HOC/withAuth";
import Searchbar from "@/components/Searchbar";
import MyTabs from "@/components/Tabs/BackLogTabs";
import { useTheme } from "@/context/ThemeContext";
import { useUser } from "@/context/UserContext";
import AppLayout from "@/layout/app"
import MyAxios from "@/utils/AxiosConfig";
import { useState, Fragment, useEffect } from "react";
// import { useRouter } from 'next/router';


const breadCrumbData = [
  { title: 'Project Name', href: '/project-name' },
  { title: 'Team Name (Workflow Type)', href: 'team-name' },
  { title: 'Epic', href: 'epic' },
]


function EpicPage () {
    const [allEpics, setAllEpics] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState('epic');
    const { selectedProject, } = useUser();
    // const router = useRouter();

    const addNewEpicData = (newData) => {
        console.log(newData, "===allEpicsallEpics:addNewEpic");
        setAllEpics(prev => ([...prev, newData]));
    }

    // console.log(allEpics, "===allEpicsallEpics:Before");

    const handleBoardChange = (value) => {
        const { query } = router;
        setSelectedBoard(value);
        // if (value === 'table') {
        //     router.push({ pathname: router.pathname, query: { ...query, board: value }, }, undefined, { shallow: true });
        // }
    }

    const getAllEpicByProjectId = async () => {
        try {
            if(selectedProject?.id){
                const res = await MyAxios.get(`/epic/project/${selectedProject?.id}`);
                console.log(res.data, "====epic:page");
                setAllEpics(res.data.data)
            }
        } catch (error) {
            console.log(error, " === error:getAllEpicByProjectId");
            setAllEpics([]);
        }
    }

    useEffect(()=>{
        getAllEpicByProjectId()
    }, [selectedProject])

  return (
    <AppLayout>
      <BreadCrumb data={breadCrumbData}/>
      <h1 className="mt-2 text-2xl font-bold">Epic</h1>
      <SearchAndDropDownInEpic selectedBoard={selectedBoard} changeBoardSelection={handleBoardChange} />
      {selectedBoard === 'table' ? 
        <TableInEpic data={allEpics} /> 
            :
            allEpics?.length > 0 ? 
                <AllEpicData data={allEpics} />
                    : 
                    <ManageTheEpics addNewEpic={addNewEpicData} />
      }
    </AppLayout>
  );
}

export default withAuth(EpicPage);