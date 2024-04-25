import { useTheme } from "@/context/ThemeContext";
import { GoSearch } from "react-icons/go";

export default function ({ className="" }) {
  const { theme } = useTheme();
  return <div className={`hidden rounded md:flex items-center ${className}`} id={theme} style={{ border: `1px solid ${theme === 'light' ? "gray" :"#143261" }` }}>
    <GoSearch className="mx-2"/>
    <input className="h-8 outline-none" id={theme} type="text" placeholder="search"/>
  </div>
}
