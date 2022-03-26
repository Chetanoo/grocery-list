import React, { ChangeEvent } from 'react';
import { Button, TextField, MenuItem } from '@mui/material';
import classes from './style.module.css';
import { inputTypes, priorities, statuses } from '../../constants/constants';

export default function NewEntry(
  {
    handleAddEntry,
    name,
    status,
    priority,
    handleInputChange,
  }: {
    name: string,
    status: string,
    priority: string,
    handleInputChange: (e: React.ChangeEvent, inputType: string) => void,
    handleAddEntry: () => void,
  },
): JSX.Element {
  return (
    <div className={classes['new-entry-box']}>
      <div className={classes['text-fields-container']}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={name}
          onChange={(e: ChangeEvent) => handleInputChange(e, inputTypes.name)}
          helperText="Name is required."
          sx={{ mb: 2, mr: 2 }}
        />
        <TextField
          id="Priority-required"
          label="Priority"
          select
          value={priority}
          onChange={
            (e: ChangeEvent) => handleInputChange(e, inputTypes.priority)
            }
          sx={{ mb: 2, mr: 2, width: 100 }}
        >
          <MenuItem value={priorities.one}>
            1
          </MenuItem>
          <MenuItem value={priorities.two}>
            2
          </MenuItem>
          <MenuItem value={priorities.three}>
            3
          </MenuItem>
          <MenuItem value={priorities.four}>
            4
          </MenuItem>
          <MenuItem value={priorities.five}>
            5
          </MenuItem>
        </TextField>
        <TextField
          id="Status-required"
          label="Status"
          select
          value={status}
          onChange={(e: ChangeEvent) => handleInputChange(e, inputTypes.status)}
          sx={{ mb: 2, mr: 2, width: 100 }}
        >
          <MenuItem value={statuses.have}>
            have
          </MenuItem>
          <MenuItem value={statuses.ranOut}>
            ran out
          </MenuItem>
        </TextField>
      </div>
      <Button
        size="medium"
        onClick={() => handleAddEntry()}
        disabled={!name}
      >
        Add
      </Button>
    </div>
  );
}
