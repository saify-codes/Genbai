'use client'

import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
    
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}