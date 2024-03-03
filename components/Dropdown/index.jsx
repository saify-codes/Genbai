
import { useTheme } from "@/context/ThemeContext";
import {GoTriangleDown } from "react-icons/go";


export default function ({title, icon}) {
    const { theme } = useTheme();
    const color = { color: theme === "light" ? "#fff": "#000" };

    return <div className="hidden md:flex text-sm font-medium bg-accent px-2 w-max rounded h-8 items-center gap-2">
        <span style={color}>{icon}</span>
        <span style={color}>{title}</span>
        <button className="self-stretch pl-1 border-l border-primary flex items-center" >
            <GoTriangleDown style={color} />
        </button>
    </div>
}
