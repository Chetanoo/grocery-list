import React from 'react';
import {
  Card, CardContent, Typography, Box, CardActions, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { EntryInterface } from '../../interfaces';
import { formatDate } from '../../helpers/helpers';

import classes from './style.module.css';
import { statuses, colors } from '../../constants/constants';

export default function EntryView({
  entry, handleDelete, handleToggleStatus,
}: {
  entry: EntryInterface,
  handleDelete: (id: string) => void,
  handleToggleStatus: (id: string) => void
}): JSX.Element {
  const {
    id, name, status, statusChanged, priority,
  } = entry;
  return (
    <Box sx={{ width: 300, maxWidth: 300, minWidth: 300 }}>
      <Card variant="outlined">
        <>
          <CardContent>
            <Link
              to={`/${id}`}
            >
              <Typography
                sx={{ fontSize: 25 }}
                variant="h4"
                component="div"
              >
                {name}
              </Typography>
            </Link>
            <Typography
              sx={{ fontSize: 16 }}
              variant="h6"
              component="div"
            >
              {`Priority ${priority}`}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              color={status === statuses.have ? colors.blue : colors.red}
            >
              {status}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              color="text.secondary"
            >
              {`status changed: ${formatDate(statusChanged)}`}
            </Typography>
          </CardContent>
          <CardActions
            className={classes['card-actions']}
          >
            <Button
              size="medium"
              onClick={() => handleToggleStatus(id)}
            >
              TOGGLE STATUS
            </Button>
            <Button
              size="medium"
              color="error"
              onClick={() => handleDelete(id)}
            >
              DELETE
            </Button>
          </CardActions>
        </>
      </Card>
    </Box>

  );
}

export const MemorizedEntryView = React.memo(EntryView);
