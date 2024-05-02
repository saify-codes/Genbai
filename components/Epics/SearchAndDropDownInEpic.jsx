"use client";

import { useTheme } from "@/context/ThemeContext";
import Searchbar from "../Searchbar";
import { DeliverablesData, EpicData, LabelsData, StoryTypes } from "../Backlog/CONSTTANT";
import DeliverablesDropDown from "../Backlog/DeliverablesDropDown";
import EpicDropDown from "../Backlog/EpicDropDown";
import LabelsDropDown from "../Backlog/LabelsDropDown";
import StoryTypeDropDown from "../Backlog/SroryTypeDropDown";
import { GoSearch } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { BoardInEpic } from "@/utils/svg_icons";
import { useState } from "react";

const DROPDOWN_NAME = ["Epics Owners", "Initiatives", "Epics Teams", "Epics Labels", "Story Owners", "Story Types", "Story Status"]

const SearchAndDropDownInEpic = ({ NAME=DROPDOWN_NAME, selectedBoard, changeBoardSelection=()=>{} }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    console.log(selectedBoard, "===selectedBoardselectedBoard");
    
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2 items-center">
                <div className="w-[250px]">
                    <div className="rounded flex items-center mr-auto" id={theme} style={{ border: `1px solid ${isLight ? "gray" :"#143261" }` }}>
                        <GoSearch className="mx-2"/>
                        <input className="h-8 outline-none" id={theme} type="text" placeholder="search"/>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <EpicDropDown data={EpicData} title={NAME[0]} /> 
                    <StoryTypeDropDown data={StoryTypes} title={NAME[1]} /> 
                    <DeliverablesDropDown data={DeliverablesData} title={NAME[2]} />
                    <LabelsDropDown data={LabelsData} title={NAME[4]} />
                    <StoryTypeDropDown data={StoryTypes} title={NAME[5]} /> 
                    <DeliverablesDropDown data={DeliverablesData} title={NAME[6]} />
                    <LabelsDropDown data={LabelsData} title={NAME[7]} />
                </div>
            </div>
            <div className={`flex items-center gap-2 self-start rounded-md px-2 py-1 ${isLight ? "bg-white border border-[#B4C6E4]": "border border-[#B4C6E4] bg-[#12294E]/60"}`}>
                <div className={`p-1 rounded-md ${isLight ? selectedBoard === 'epic' ? "bg-[#057BF1]": "" : "bg-[#06152D]"}`} onClick={()=>changeBoardSelection("epic")}>
                    <TiThMenu className={`${selectedBoard === 'epic' ? "text-white": "text-[#6B8CC2]"}`} />
                </div>
                <div className={`p-1 rounded-md ${isLight ? selectedBoard === 'table' ?  "bg-[#057BF1] ": "" : "bg-[#06152D]"}`} onClick={()=>changeBoardSelection("table")}>
                    <BoardInEpic color={selectedBoard === 'table' ? "#FFF": "#6B8CC2"} className={`${isLight && selectedBoard === 'table' ? "text-white": "text-[#6B8CC2]"}`} />
                </div>
            </div>
        </div>
    );
}

export default SearchAndDropDownInEpic;
