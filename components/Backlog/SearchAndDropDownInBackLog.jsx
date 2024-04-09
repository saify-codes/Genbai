"use client";

import { useTheme } from "@/context/ThemeContext";
import Searchbar from "../Searchbar";
import { DeliverablesData, EpicData, LabelsData, StoryTypes } from "./CONSTTANT";
import DeliverablesDropDown from "./DeliverablesDropDown";
import EpicDropDown from "./EpicDropDown";
import LabelsDropDown from "./LabelsDropDown";
import StoryTypeDropDown from "./SroryTypeDropDown";
import { GoSearch } from "react-icons/go";


const SearchAndDropDownInBackLog = () => {
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
                <EpicDropDown data={EpicData} /> 
                <StoryTypeDropDown data={StoryTypes} /> 
                <DeliverablesDropDown data={DeliverablesData} />
                <LabelsDropDown data={LabelsData} />
            </div>
        </div>
    );
}

export default SearchAndDropDownInBackLog;
