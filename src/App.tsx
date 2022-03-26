import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './App.module.css';
import ListView from './components/ListView';
import { manageInitialState } from './helpers/initialState';
import { EntryInterface } from './interfaces';
import NewEntry from './components/NewEntry';
import { setLocalStorageEntries } from './helpers/helpers';
import Filters from './components/Filters';
import { inputTypes, priorities, statuses } from './constants/constants';

function App(): JSX.Element {
  const [entries, setEntries] = useState(manageInitialState());
  const [newName, setNewName] = useState('');
  const [newStatus, setNewStatus] = useState(statuses.have);
  const [filterValue, setFilterValue] = useState(statuses.all);
  const [newPriority, setNewPriority] = useState(priorities.one);

  const handleAddEntry = (): void => {
    if (newName) {
      const newEntries = [
        ...entries,
        {
          id: uuidv4(),
          name: newName,
          status: newStatus,
          statusChanged: new Date(),
          priority: newPriority,
        },
      ];
      setEntries(newEntries);
      setLocalStorageEntries(newEntries);
    }
  };

  const handleDelete = (id: string): void => {
    const newEntries = entries.filter(
      (entry: EntryInterface) => entry.id !== id,
    );
    setEntries(newEntries);
    setLocalStorageEntries(newEntries);
  };

  const handleInputChange = (
    event: React.ChangeEvent,
    variable: string,
  ): void => {
    switch (variable) {
      case inputTypes.name:
        setNewName((event.target as HTMLInputElement).value);
        break;
      case inputTypes.priority:
        setNewPriority((event.target as HTMLInputElement).value);
        break;
      case inputTypes.status:
        setNewStatus((event.target as HTMLInputElement).value);
        break;
      case inputTypes.filter:
        setFilterValue((event.target as HTMLInputElement).value);
        break;
      default:
        break;
    }
  };

  const handleToggleStatus = (id: string): void => {
    const newEntries = entries.map((entry: EntryInterface) => {
      if (entry.id !== id) {
        return entry;
      }
      return {
        ...entry,
        status:
            entry.status === statuses.have ? statuses.ranOut : statuses.have,
        statusChanged: new Date(),
      };
    });
    setEntries(newEntries);
    setLocalStorageEntries(newEntries);
  };

  return (
    <div className={classes.App}>
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
    </div>
  );
}

export default App;
