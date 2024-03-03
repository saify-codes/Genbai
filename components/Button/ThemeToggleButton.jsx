// components/ThemeToggleButton.tsx
import { useTheme } from '@/context/ThemeContext';
import { ActionIcon } from '@mantine/core';
import { CiLight,  } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
// import { Sun, Moon } from 'tabler-icons-react';

const ThemeToggleButton = () => {
    // const { colorScheme, toggleColorScheme } = useTheme();
    // console.log(colorScheme);
    const { theme, toggleTheme } = useTheme();
    
    return (
        <ActionIcon onClick={toggleTheme} size="large">
        {/* {'colorScheme' === 'dark' ? <Sun /> : <Moon />} */}
        {theme === 'light' ?
            <MdDarkMode className='h-6 w-6' id={theme} />
            :
            <CiLight className='h-6 w-6' id={theme} />
        }
        </ActionIcon>
    );
};

export default ThemeToggleButton;
