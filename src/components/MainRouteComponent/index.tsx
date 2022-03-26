import React from 'react';
import NewEntry from '../NewEntry';
import Filters from '../Filters';
import ListView from '../ListView';
import { EntryInterface } from '../../interfaces';

export default function MainRouteComponent({
  newName,
  newPriority,
  newStatus,
  filterValue,
  entries,
  handleAddEntry,
  handleInputChange,
  handleDelete,
  handleToggleStatus,
}: {
    newName: string,
    newPriority: number,
    newStatus: string,
    filterValue: string,
    entries: Array<EntryInterface>,
    handleAddEntry: () => void,
    handleInputChange: (e: React.ChangeEvent, inputType: string) => void,
    handleDelete: (id: string) => void,
    handleToggleStatus: (id: string) => void
}): JSX.Element {
  return (
    <>
      <NewEntry
        handleAddEntry={handleAddEntry}
        name={newName}
        priority={newPriority}
        status={newStatus}
        handleInputChange={handleInputChange}
      />
      <Filters
        filterValue={filterValue}
        handleInputChange={handleInputChange}
      />
      <ListView
        entries={entries}
        handleDelete={handleDelete}
        handleToggleStatus={handleToggleStatus}
        filterValue={filterValue}
      />
    </>
  );
}
