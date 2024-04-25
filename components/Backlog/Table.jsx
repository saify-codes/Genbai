"use client";
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box, Table, Checkbox } from '@mantine/core';
import { useState } from 'react';
import TableHeader from './TableHeader';
import { useTheme } from '@/context/ThemeContext';
import { PhaseApproved, TeamIconOne, TicketType } from '@/utils/svg_icons';

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


const TableInBackLog = ({ isOpen = false }) => {
  const [opened, { toggle }] = useDisclosure(isOpen);
  const [selectedRows, setSelectedRows] = useState([]);
  const theme = useTheme();

  const rows = Array(5).fill(tableData).map((element, i) => {
    return (<Table.Tr
      key={i}
      bg={selectedRows.includes(element.id) ? 'var(--mantine-color-blue-light)' : undefined}
      className='hover:text-black w-full'
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
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.epic}</Table.Td>
      <Table.Td>{element.team}</Table.Td>
      <Table.Td>{element.owner}</Table.Td>
      <Table.Td>{element.phase}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
      <Table.Td>{element.sprint}</Table.Td>
    </Table.Tr>)
  });

  return (
    <Box mx="auto" className='mt-3'>
      <TableHeader opened={opened} toggle={toggle} />

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Table className='bg-transparent flex items-center justify-center'
          borderColor={theme === 'light' ? '#EEF2F7' : '#143261'}
          highlightOnHover withTableBorder
          highlightOnHoverColor={theme === 'light' ? '#EEF2F7' : 'green'}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th />
              <Table.Th>ID</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Epic</Table.Th>
              <Table.Th>Team</Table.Th>
              <Table.Th>Owner</Table.Th>
              <Table.Th>Phase</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Sprint</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Collapse>
    </Box>
  );
}

export default TableInBackLog
