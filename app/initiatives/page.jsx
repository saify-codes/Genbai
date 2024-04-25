"use client";

import { EpicData } from "@/components/Backlog/CONSTTANT";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import EpicPhaseDropdown from "@/components/Initiatives/EpicPhaseDropdown";
import Searchbar from "@/components/Searchbar";
import AppLayout from "@/layout/app"


const breadCrumbData = [
  { title: 'Project Namespace', href: '/project-name' },
  { title: 'Initiatives', href: 'initiatives' },
]


export default function Initiatives() {

  return (
    <AppLayout>
      <BreadCrumb data={breadCrumbData}/>
      <h1 className="mt-2 text-2xl font-bold">Initiatives</h1>
      <div className="mt-5 flex items-center justify-start gap-4">
        <Searchbar />
        <EpicPhaseDropdown data={EpicData} text="Epic Phases" />
        <EpicPhaseDropdown data={EpicData} text="Epic Labels" />
      </div>
    </AppLayout>
  );
}
