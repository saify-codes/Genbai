"use client";

import { EpicData } from "@/components/Backlog/CONSTTANT";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import QuoteApp from "@/components/DragAndDrop";
import CreateInitiativeModal from "@/components/Initiatives/CreateInitiativeModal";
import EpicPhaseDropdown from "@/components/Initiatives/EpicPhaseDropdown";
import InitiativesMainComponent from "@/components/Initiatives/InitiativesMainComponent";
import Searchbar from "@/components/Searchbar";
import { useUser } from "@/context/UserContext";
import AppLayout from "@/layout/app"
import MyAxios from "@/utils/AxiosConfig";
import { useEffect, useState } from "react";


const breadCrumbData = [
  { title: 'Project Namespace', href: '/project-name' },
  { title: 'Initiatives', href: 'initiatives' },
]


export default function Initiatives() {
  const { selectedProject,} = useUser();
  const [allInitiatives, setAllInitiatives] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(selectedProject?.id){
      setLoading(true);
      MyAxios.get(`/initiative/project/${selectedProject?.id}`)
      .then(res => {
        console.log(res.data, "==resp:getInitiative");
        setAllInitiatives(res.data.data);
      })
      .catch(err => {
        console.log(err, " ==error:getInitiative");
      }).finally(()=>{
        setLoading(false);
      })
    }
    else {
      setAllInitiatives([]);
    }
  }, [selectedProject])

  const addNewInitiative = (data) => {
    setAllInitiatives(prev => ([...prev, data]));
  }

  console.log(allInitiatives, " =allInitiativesallInitiatives");

  return (
    <AppLayout loading={loading}>
      <BreadCrumb data={breadCrumbData}/>
      <h1 className="mt-2 text-2xl font-bold">Initiatives</h1>
      <div className="mt-5 w-full flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <Searchbar />
          <EpicPhaseDropdown data={EpicData} text="Epic Phases" />
          <EpicPhaseDropdown data={EpicData} text="Epic Labels" />
        </div>
        <CreateInitiativeModal addNew={addNewInitiative} />
      </div>
      <div className="mt-2">
        <InitiativesMainComponent data={allInitiatives} />
      </div>
    </AppLayout>
  );
}
