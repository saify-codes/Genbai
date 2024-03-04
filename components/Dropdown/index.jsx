
import { useTheme } from "@/context/ThemeContext";
import {GoTriangleDown } from "react-icons/go";


export default function ({title, icon, RightIcon=GoTriangleDown, isBorder=false, className, style}) {
    return <div className={`hidden md:flex text-sm font-medium bg-accent px-2 w-max rounded h-8 items-center gap-2 ${className}`}>
        <span style={style}>{icon}</span>
        <span style={style}>{title}</span>
        <button className={`self-stretch pl-1 flex items-center ${isBorder ? "border-l border-primary": ""}`} >
            <RightIcon style={style} />
        </button>
    </div>
}
