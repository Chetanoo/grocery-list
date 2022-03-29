import React from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { EntryInterface, StatusHistoryItem } from '../../interfaces';
import EntryView from '../EntryView';
import { formatDate } from '../../helpers/helpers';

export default function EntryRouteComponent({
  entries,
  handleDelete,
  handleToggleStatus,
}: {
  entries: Array<EntryInterface>,
  handleDelete: (id: string) => void,
  handleToggleStatus: (id: string) => void
}): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const entry = entries.find(
    (en: EntryInterface) => en.id === params.entryId,
  );
  return (
    <div>
      { entry ? (
        <>
          <Button onClick={() => navigate('/')}>BACK TO MAIN PAGE</Button>
          { entry.statusHistory && (
          <div>

            { entry.statusHistory.map((item: StatusHistoryItem) => (
              <div>
                {item.status}
                :
                {formatDate(item.statusChanged)}
              </div>
            ))}
          </div>
          )}
          <EntryView
            entry={entry}
            handleDelete={handleDelete}
            handleToggleStatus={handleToggleStatus}
          />
        </>
      ) : <Navigate to="/" />}

    </div>
  );
}
