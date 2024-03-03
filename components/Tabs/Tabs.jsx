"use client";
import { useTheme } from '@/context/ThemeContext';
import { Tabs } from '@mantine/core';

function MyTabs({ selected, tabs, data, onChange }) {
    const { theme } = useTheme();
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        {tabs.map(tab => <Tabs.Tab onClick={()=>onChange(tab)} key={tab.name} value={tab.value} color={theme === 'light' ? "#143261": "#AECDFF"}>{tab.name}</Tabs.Tab>)}
      </Tabs.List>

      <Tabs.Panel value={selected.value} pt="xs">
        {data}
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}

export default MyTabs;