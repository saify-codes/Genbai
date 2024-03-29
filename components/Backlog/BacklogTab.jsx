
import { useTheme } from "@/context/ThemeContext";
import EpicDropDown from "./EpicDropDown";
import { DeliverablesData, EpicData, LabelsData, StoryTypes } from './CONSTTANT';
import SroryTypeDropDown from './SroryTypeDropDown';
import DeliverablesDropDown from './DeliverablesDropDown';
import LabelsDropDown from './LabelsDropDown';
import TableInBackLog from './Table';
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import ManageTheBackLog from "./ManageTheBackLog";



const Backlog = () => {
    const { theme } = useTheme();
    const [showTable, setShowTable] = useState(false);
  
    return (
        <>
            <div className="flex flex-wrap gap-2 items-center">
                <div className="w-[250px]">
                <div className="rounded flex items-center mr-auto" id={theme} style={{ border: `1px solid ${theme === 'light' ? "gray" :"#143261" }` }}>
                    <GoSearch className="mx-2"/>
                    <input className="h-8 outline-none" id={theme} type="text" placeholder="search"/>
                </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <EpicDropDown data={EpicData} /> 
                    <SroryTypeDropDown data={StoryTypes} /> 
                    <DeliverablesDropDown data={DeliverablesData} />
                    <LabelsDropDown data={LabelsData} />
                </div>
            </div>
            {showTable ? (
                <>
                    <TableInBackLog />
                    <TableInBackLog />
                </>
            ): (
                <ManageTheBackLog />
            )}
        </>
    );
}


export default Backlog;