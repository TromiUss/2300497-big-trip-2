import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const POINTS_TYPE = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DATE_FORMAT = 'MMM D';

dayjs.extend(duration);

function getRandomArrayElement(items){
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function getDifferenceInTime(dateFrom, dateTo) {
  const diff = dayjs.duration(dayjs(dateTo).diff(dayjs(dateFrom)));

  // Format result as "DD d HH h MM m"
  const days = diff.days();
  const hours = diff.hours();
  const minutes = diff.minutes();

  return `${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
}

function capitalize(word) {
  if (!word || typeof word !== 'string') {
    return '';
  }
  return word[0].toUpperCase() + word.slice(1);
}

export {getDifferenceInTime, getRandomArrayElement, humanizeTaskDueDate, DATE_FORMAT, capitalize, POINTS_TYPE};
