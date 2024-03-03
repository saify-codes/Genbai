
import {GoTriangleDown } from "react-icons/go";
export default function ({title, icon}) {
    return <div className="hidden md:flex text-sm font-medium bg-accent px-2 w-max rounded h-8 items-center gap-2">
        {icon}
        {title}
        <button className="self-stretch pl-1 border-l border-primary flex items-center" >
            <GoTriangleDown />
        </button>
    </div>
}
