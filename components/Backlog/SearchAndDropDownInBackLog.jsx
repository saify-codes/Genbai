"use client";

import { useTheme } from "@/context/ThemeContext";
import Searchbar from "../Searchbar";
import { DeliverablesData, EpicData, LabelsData, StoryTypes } from "./CONSTTANT";
import DeliverablesDropDown from "./DeliverablesDropDown";
import EpicDropDown from "./EpicDropDown";
import LabelsDropDown from "./LabelsDropDown";
import StoryTypeDropDown from "./SroryTypeDropDown";
import { GoSearch } from "react-icons/go";


const SearchAndDropDownInBackLog = ({ NAME=["Epics", "Story Types", "Deliverables", "Labels"] }) => {
    const { theme } = useTheme();
    return (
        <div className="flex flex-wrap gap-2 items-center">
            <div className="w-[250px]">
                <div className="rounded flex items-center mr-auto" id={theme} style={{ border: `1px solid ${theme === 'light' ? "gray" :"#143261" }` }}>
                    <GoSearch className="mx-2"/>
                    <input className="h-8 outline-none" id={theme} type="text" placeholder="search"/>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <EpicDropDown data={EpicData} title={NAME[0]} /> 
                <StoryTypeDropDown data={StoryTypes} title={NAME[1]} /> 
                <DeliverablesDropDown data={DeliverablesData} title={NAME[2]} />
                <LabelsDropDown data={LabelsData} title={NAME[3]} />
            </div>
        </div>
    );
}

export default SearchAndDropDownInBackLog;
