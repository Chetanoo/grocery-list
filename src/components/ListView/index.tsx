import React from 'react';
import EntryView from '../EntryView';
import { EntryInterface } from '../../interfaces';

import classes from './style.module.css';
import { statuses } from '../../constants/constants';

export default function ListView(
  {
    entries,
    filterValue,
    handleDelete,
    handleToggleStatus,
  }: {
    entries: Array<EntryInterface>,
    filterValue: string,
    handleToggleStatus: (id: string) => void,
    handleDelete: (id: string) => void
  },
): JSX.Element {
  return (
    <div className={classes['entry-list']}>
      { entries
        .sort(
          (
            a: EntryInterface,
            b: EntryInterface,
          ) => parseInt(a.priority, 10) - parseInt(b.priority, 10)
              || a.name.localeCompare(b.name),
        )
        .map((entry: EntryInterface) => (
          (filterValue === statuses.all || filterValue === entry.status) && (
            <EntryView
              key={entry.id}
              entry={entry}
              handleDelete={handleDelete}
              handleToggleStatus={handleToggleStatus}
            />
          )
        ))}
    </div>
  );
}
