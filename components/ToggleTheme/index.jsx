import { Switch, Group } from '@mantine/core';
import classes from './style.module.css';

export default function() {
  return (
    <Group justify="center" p="md">
      <Switch classNames={classes} />
    </Group>
  );
}