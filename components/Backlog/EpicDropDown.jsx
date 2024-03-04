import { Menu, Transition } from '@headlessui/react';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import MyButton from './MyButton';
import { Fragment } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { BacklogDoneGreen, BacklogInProgressOrange, BacklogPlannedYellow } from '@/utils/svg_icons';
import Searchbar from '../Searchbar';

function EpicDropDown() {
    const { theme } = useTheme();

    const EpicData = [
        { id: 1, isLabel: true, data: 'Planned', },
        { id: 2, isLabel: false, data: <><BacklogPlannedYellow /><span className='ml-2'>Epic Name</span></>, },
        { id: 3, isLabel: false, data: <><BacklogPlannedYellow /><span className='ml-2'>Epic Name</span></>, },
        { id: 4, isLabel: true, data: 'In Progress', },
        { id: 5, isLabel: false, data: <><BacklogInProgressOrange /><span className='ml-2'>Epic Name</span></>, },
        { id: 6, isLabel: false, data: <><BacklogInProgressOrange /><span className='ml-2'>Epic Name</span></>, },
        { id: 7, isLabel: true, data: 'Done', }, // Corrected duplicate id from previous code
        { id: 8, isLabel: false, data: <><BacklogDoneGreen /><span className='ml-2'>Epic Name</span></>, },
        { id: 9, isLabel: false, data: <><BacklogDoneGreen /><span className='ml-2'>Epic Name</span></>, },
    ];

  return (
    <Menu as="div" className="relative inline-block text-left">
        <div className="flex justify-center items-center">
            <Menu.Button> 
                <MyButton text="Epics" />
            </Menu.Button>
        </div>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className={`absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border-[1px] shadow-lg ring-1 ring-black/5 focus:outline-none overflow-auto max-h-[380px] ${theme === 'light' ? "border-[#B4C6E4] text-[#143261]": "border-[#143261] text-[#99C0FF]"}`}>
                <div className="p-2">
                    <p className='text-[#6B8CC2] font-semibold mb-2'>Filter By Epic</p>
                    <div className="mb-2">
                        <Searchbar />
                    </div>
                    <p className={`text-[#057BF1] rounded-md font-semibold p-1 my-1 ${theme === 'light' ? "bg-[#F0F7FF]": "bg-[#AECDFF]"}`}>All Epics</p>
                    <div className="p-1">
                        {EpicData?.map((epic, index) => {
                            if(epic.isLabel){
                                return <p key={index} className="text-[#6B8CC2] font-semibold">{epic.data}</p>;
                            }
                            return(
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <button
                                            className={`${theme === 'light' ? "text-[#305288]": "text-[#fff]"} ${active ? 'bg-violet-500 !text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {epic.data}
                                        </button>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
  );
}

export default EpicDropDown;
