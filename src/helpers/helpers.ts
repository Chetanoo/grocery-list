import moment from 'moment';
import { EntryInterface } from '../interfaces';
import { entryKey } from '../constants/constants';

export function formatDate(date: Date): string {
  return moment(date).format('Do MMM YYYY, h:mm');
}

export function setLocalStorageEntries(
  newEntries: Array<EntryInterface>,
): void {
  localStorage.setItem(entryKey, JSON.stringify(newEntries));
}
