import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Routes,
  Route,
} from 'react-router-dom';
import classes from './App.module.css';
import { manageInitialState } from './helpers/initialState';
import { EntryInterface } from './interfaces';
import { setLocalStorageEntries } from './helpers/helpers';
import { inputTypes, priorities, statuses } from './constants/constants';
import MainRouteComponent from './components/MainRouteComponent';
import EntryRouteComponent from './components/EntryRouteComponent';
import NoPage from './components/NoPage';

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
      <Routes>
        <Route
          path="/"
          element={(
            <MainRouteComponent
              newName={newName}
              newPriority={newPriority}
              newStatus={newStatus}
              filterValue={filterValue}
              handleAddEntry={handleAddEntry}
              handleInputChange={handleInputChange}
              entries={entries}
              handleDelete={handleDelete}
              handleToggleStatus={handleToggleStatus}
            />
        )}
        />
        <Route
          path="/:entryId"
          element={(
            <EntryRouteComponent
              entries={entries}
              handleDelete={handleDelete}
              handleToggleStatus={handleToggleStatus}
            />
)}
        />
        <Route
          path="*"
          element={<NoPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
