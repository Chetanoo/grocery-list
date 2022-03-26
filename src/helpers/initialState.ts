import { v4 as uuidv4 } from 'uuid';
import { EntryInterface } from '../interfaces';
import { setLocalStorageEntries } from './helpers';
import { entryKey, priorities, statuses } from '../constants/constants';

export function manageInitialState(): Array<EntryInterface> {
  const defaultEntries: Array<EntryInterface> = [
    {
      id: uuidv4(),
      name: 'Bread',
      status: statuses.have,
      statusChanged: new Date(),
      priority: priorities.four,
    },
    {
      id: uuidv4(),
      name: 'Milk',
      status: statuses.have,
      statusChanged: new Date(),
      priority: priorities.one,
    },
    {
      id: uuidv4(),
      name: 'Butter',
      status: statuses.ranOut,
      statusChanged: new Date(),
      priority: priorities.five,
    },
  ];
  const entries = localStorage.getItem(entryKey);

  if (!entries) {
    setLocalStorageEntries(defaultEntries);
    return defaultEntries;
  }

  return JSON.parse(localStorage.getItem(entryKey) || '{}');
}
