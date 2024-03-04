
import { Menu, Transition } from '@headlessui/react'
import { BacklogPlannedYellow } from "@/utils/svg_icons";
import { Button } from "@mantine/core";
import { useTheme } from "@/context/ThemeContext";
import Searchbar from "../Searchbar";
import { Fragment } from "react";
import EpicDropDown from "./EpicDropDown";
import { DeliverablesData, EpicData, LabelsData, StoryTypes } from './CONSTTANT';
import SroryTypeDropDown from './SroryTypeDropDown';
import DeliverablesDropDown from './DeliverablesDropDown';
import LabelsDropDown from './LabelsDropDown';
import TableInBackLog from './Table';



const Backlog = () => {
    const { theme } = useTheme();
    const style = theme === "light" ? { color: "#305288" } : { color: "#305288", };
  
    return (
        <>
            <div className="flex gap-2 items-center">
                <div className="w-[250px]">
                    <Searchbar />
                </div>
                <div className="flex items-center gap-2">
                    <EpicDropDown data={EpicData} /> 
                    <SroryTypeDropDown data={StoryTypes} /> 
                    <DeliverablesDropDown data={DeliverablesData} />
                    <LabelsDropDown data={LabelsData} />
                </div>
            </div>
            <TableInBackLog />
            <TableInBackLog />
        </>
    );
}


export default Backlog;