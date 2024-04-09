
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