"use client";
import './epic.css';
import { useDisclosure } from '@mantine/hooks';
import { Collapse, Box, Table, Checkbox, Tooltip } from '@mantine/core';
import { useState } from 'react';
import TableHeaderForEpic from './TableHeaderForEpic';
import { useTheme } from '@/context/ThemeContext';
import { CircleLabel, PhaseApproved, TeamIconOne, TicketType } from '@/utils/svg_icons';
import dayjs from 'dayjs';
import { LuUserCircle2 } from 'react-icons/lu';
import { FaUser, FaUserTie } from 'react-icons/fa';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { HiUser } from 'react-icons/hi2';
import { ImUser } from "react-icons/im";
import { COLORS } from '@/utils/Constant_Data';

const tableData = {
  id: 'PRJ-001',
  type: <div className='flex items-center'><TicketType /><span className='ml-2'>Feature</span></div>,
  name: 'Some Story Name Goes Here',
  epic: 'None',
  team: <TeamIconOne />,
  owner: <TeamIconOne />,
  phase: <div className='flex items-center'><PhaseApproved /><span className='ml-2'>Approved</span></div>,
  status: <div className='flex items-center'><PhaseApproved /><span className='ml-2'>Ready To Release</span></div>,
  sprint: 'Some Sprint Name',
};
const COLOR = ["#4BE7CD", "#4B77E7", "#E74B83", "#744BE7", "#ADE903", "#F89235", "#F1CB00", "#E338D2", "#1A91FF"];
const TEAM_ICON = [<FaUser className='text-sm' />, <MdSupervisedUserCircle className='text-sm' />, <FaUserTie className='text-sm' />, <LuUserCircle2 className='text-sm' />, <HiUser className='text-sm' />, <ImUser className='text-sm' />];

const DUMMY_TEAM = [{ id: 1, name: 'Alqama', },{ id: 2, name: 'Azhar', },{ id: 21, name: 'Husnain', }];

const DUMMY_LABELS = ["Frontend", "Backend", "Design"];

const getTeamIcon = (teams, isLight) => {
  if(teams.length > 4){
    return(
      <div className="flex items-center justify-center">
          {teams?.slice(0, 2)?.map((team,i) => (
            <div style={{ background: COLOR[i], }} className={`flex items-center justify-center rounded-full w-5 h-5 ${isLight ? "text-white": ""}`}>
              {TEAM_ICON[i]}
            </div>
          ))}
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <div style={{ background: COLOR[3], }} className={`flex items-center justify-center rounded-full w-5 h-5 ${isLight ? "text-white": ""}`}>
            {TEAM_ICON[3]}
          </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex items-center">
        {teams?.map((team,i) => (
          <div style={{ background: COLOR[i], }} className={`flex items-center justify-center rounded-full w-5 h-5 ${isLight ? "text-white": ""}`}>
            {TEAM_ICON[i]}
          </div>
        ))}
      </div>
    )
  }
}




const TableInEpic = ({ data=[] }) => {
  const [opened, { toggle }] = useDisclosure(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const {theme} = useTheme();
  const isLight = theme === 'light';

  // Array(5).fill(tableData)
  const rows = data?.map((element, i) => {
    return (
      <Table.Tr
        key={i}
        bg={selectedRows.includes(element.id) ? 'var(--mantine-color-blue-light)' : undefined}
        className={`hover:text-black w-full ${isLight ? "table-row-epic-light": "table-row-epic-dark"}`}
      >
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={selectedRows.includes(element.id)}
            onChange={(event) =>
              setSelectedRows(
                event.currentTarget.checked
                  ? [...selectedRows, element.id]
                  : selectedRows.filter((id) => id !== element.id)
              )
            }
          />
        </Table.Td>
        <Table.Td>{element.uid || element.id}</Table.Td>
        <Table.Td>{element.Title}</Table.Td>
        <Table.Td>{element.initiative?.name || "Initiative Name"}</Table.Td>
        {/* <Table.Td>{element.Priority}</Table.Td> */}
        <Table.Td>{element.Stories?.length || '13'}</Table.Td>
        <Table.Td>{element.Points || '10'}</Table.Td>
        <Tooltip label={element.Teams?.length > 0 ? element.Teams?.map(team => team.name)?.join(", ") : DUMMY_TEAM?.map(team => team.name)?.join(", ") } color={isLight ? "indigo": "blue"}>
          <Table.Td>{getTeamIcon(element.Teams || DUMMY_TEAM, isLight)}</Table.Td>
        </Tooltip>
        <Table.Td>{element.Owner?.Name || "Owner Name"}</Table.Td>
        <Table.Td>{element.Phase || "-"}</Table.Td>
        {/* <Tooltip label={element.Description ?? "No Description"} color={isLight ? "indigo": "blue"}>
          <Table.Td>{element.Description?.slice(0, 15) || "-"}</Table.Td>
        </Tooltip> */}
        <Table.Td>{element.status || "On Track"}</Table.Td>
        <Tooltip label={element.Labels?.length > 0 ? element.Labels?.join(", ") : DUMMY_LABELS?.join(", ") } color={isLight ? "indigo": "blue"}>
          <Table.Td>
            <div className='flex gap-1'>
              {DUMMY_LABELS?.slice(0,2)?.map((tag, i) => (
                  <div key={tag+i} className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"} tagColorOnHover`}>
                      <CircleLabel color={COLORS[tag]} />
                      <span className="">{tag}</span>
                  </div>
              ))}
              {DUMMY_LABELS?.length > 2 && 
                <div className={`flex items-center gap-3 px-2 py-1 rounded-md ${isLight ? "bg-[#F2F7FD]": "bg-[#132C53]"} tagColorOnHover`}>
                    <span className="">+{DUMMY_LABELS?.length - 2}</span>
                </div>}
            </div>
          </Table.Td>
        </Tooltip>
        <Table.Td>{element.StartDate ? dayjs(element.StartDate).format("YYYY-MM-DD"): 'None'}</Table.Td>
        <Table.Td>{element.EndDate ? dayjs(element.EndDate).format("YYYY-MM-DD"): "None"}</Table.Td>
        <Table.Td>{element.Priority ?? "None"}</Table.Td>
      </Table.Tr>
    )
  });

  return (
    <Box mx="auto" className='mt-3'>
      <TableHeaderForEpic opened={opened} toggle={toggle} />

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Table 
          borderColor={isLight ? '#EEF2F7' : '#143261'}
          highlightOnHover withTableBorder
          highlightOnHoverColor={isLight ? '#EEF2F7' : '#EEF2F7'}
        >
          <Table.Thead className='w-full'>
            <Table.Tr className='w-full'>
              <Table.Th />
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Initiative</Table.Th>
              <Table.Th>Stories</Table.Th>
              <Table.Th>Points</Table.Th>
              <Table.Th>Teams</Table.Th>
              <Table.Th>Owner</Table.Th>
              <Table.Th>Phase</Table.Th>
              {/* <Table.Th>Description</Table.Th> */}
              <Table.Th>Status</Table.Th>
              <Table.Th>Labels</Table.Th>
              <Table.Th>Start Date</Table.Th>
              <Table.Th>End Date</Table.Th>
              <Table.Th>Priority</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Collapse>
    </Box>
  );
}

export default TableInEpic
