"use client";
import { useTheme } from '@/context/ThemeContext';
import { Tabs } from '@mantine/core';
import { GoSearch } from 'react-icons/go';
import EpicDropDown from '../Backlog/EpicDropDown';
import SroryTypeDropDown from '../Backlog/SroryTypeDropDown';
import DeliverablesDropDown from '../Backlog/DeliverablesDropDown';
import LabelsDropDown from '../Backlog/LabelsDropDown';
import { DeliverablesData, EpicData, LabelsData, StoryTypes } from '../Backlog/CONSTTANT';

function BackLogTab({ selected, tabs, children, onChange }) {
    const { theme } = useTheme();

  const SearchAndDropDown = () => (
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
  );

  return (
    <Tabs key={selected.id} color="teal" defaultValue={selected.value}>
      <Tabs.List>
        {tabs?.map(tab => <Tabs.Tab onClick={()=>onChange(tab)} key={tab.name} value={tab.value} color={theme === 'light' ? "#143261": "#AECDFF"}>{tab.name}</Tabs.Tab>)}
      </Tabs.List>

      <Tabs.Panel value={selected.value} pt="xs">
        {children}
      </Tabs.Panel>

      {/* <Tabs.Panel value={selected.value} pt="xs">
        {children}
      </Tabs.Panel> */}
    </Tabs>
  );
}

export default BackLogTab;