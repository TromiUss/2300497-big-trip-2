import { getRandomArrayElement } from '../utils.js';

const points = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 1526,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-17T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa32'
    ],
    type: 'taxi'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808d',
    basePrice: 1100,
    dateFrom: '2019-09-14T22:55:56.845Z',
    dateTo: '2019-09-24T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcac',
    isFavorite: false,
    offers: [],
    type: 'bus'
  }, {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808b',
    basePrice: 1299,
    dateFrom: '2020-05-03T22:55:56.845Z',
    dateTo: '2020-05-17T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcaj',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa36',
      'b4c3e4e6-9053-42ce-b747-e281314bab36'
    ],
    type: 'ship'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808p',
    basePrice: 7580,
    dateFrom: '2020-07-03T22:55:56.845Z',
    dateTo: '2020-07-17T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcal',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314bab38',
      'b4c3e4e6-9053-42ce-b747-e281314bac38'
    ],
    type: 'flight'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808m',
    basePrice: 1299,
    dateFrom: '2020-05-03T22:55:56.845Z',
    dateTo: '2020-05-17T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcam',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa35'
    ],
    type: 'train'
  }
];

function getRandomPoints () {
  return getRandomArrayElement(points);
}

export {getRandomPoints};
