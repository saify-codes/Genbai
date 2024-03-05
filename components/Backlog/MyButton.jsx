import { useTheme } from "@/context/ThemeContext";
import { IoIosArrowDown } from "react-icons/io";

function MyButton({ Icon=IoIosArrowDown, text, className }) {
    const { theme } = useTheme();
    const style = theme === 'light' ? { background: "#fff", border: '1px solid #B4C6E4', color: '#305288' } : { background: '#12294E', border: '1px solid #143261', color: '#99C0FF', }
    return (
        <span style={style} className={`flex justify-center items-center px-3 py-[5px] font-semibold rounded-md ${className}`}>
            <span className="mr-2 no-break">{text}</span><Icon />
        </span>
    )
}

export default MyButton;