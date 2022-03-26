import React, { ChangeEvent } from 'react';
import {
  MenuItem, TextField,
} from '@mui/material';
import { inputTypes, statuses } from '../../constants/constants';

export default function Filters(
  {
    filterValue,
    handleInputChange,
  } : {
    filterValue: string,
    handleInputChange: (e: React.ChangeEvent, inputType: string) => void
  },
): JSX.Element {
  return (
    <TextField
      id="Filters"
      label="Filter"
      select
      value={filterValue}
      onChange={(e: ChangeEvent) => handleInputChange(e, inputTypes.filter)}
      helperText="Select status to filter"
      sx={{ mb: 2, mr: 2, width: 200 }}
    >
      <MenuItem value={statuses.all}>
        all
      </MenuItem>
      <MenuItem value={statuses.have}>
        have
      </MenuItem>
      <MenuItem value={statuses.ranOut}>
        ran out
      </MenuItem>
    </TextField>
  );
}
