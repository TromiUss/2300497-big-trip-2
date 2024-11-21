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

  // Форматируем результат в виде "HH ч MM м"
  const hours = diff.hours();
  const minutes = diff.minutes();

  return `${hours > 0 ? `${hours}ч ` : ''}${minutes}м`;
}

function capitalize(word) {
  if (!word || typeof word !== 'string') return '';
  return word[0].toUpperCase() + word.slice(1);
}

export {getDifferenceInTime, getRandomArrayElement, humanizeTaskDueDate, DATE_FORMAT, capitalize, POINTS_TYPE};
