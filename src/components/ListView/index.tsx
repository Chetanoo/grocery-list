import React from 'react';
import { MemorizedEntryView } from '../EntryView';
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
          ) => a.priority - b.priority
              || a.name
                .toLocaleLowerCase()
                .localeCompare(b.name.toLocaleLowerCase()),
        )
        .map((entry: EntryInterface) => (
          (filterValue === statuses.all || filterValue === entry.status) && (
            <MemorizedEntryView
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
