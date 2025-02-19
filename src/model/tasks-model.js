import { destinations } from '../mock/destinations.js';
import { offers } from '../mock/offers.js';
import { getRandomPoints } from '../mock/points.js';


const POINT_COUNT = 3;

export default class TaskModel {
  #point = Array.from({length: POINT_COUNT}, getRandomPoints);
  #offers = offers;
  #destination = destinations;

  get Point() {
    return this.#point;
  }

  get Offer () {
    return this.#offers;
  }

  getOfferByType(type) {
    const allOffers = this.getOffer();
    return allOffers.find((offers) => offers.type === type);
  }

  getOfferById(type, itemsId) {
    const offersType = this.getOfferByType(type);
    if (!offersType) {
      return [];
    }
    return offersType.offers.filter((item) => itemsId.includes(item.id));
  }


  get Destination() {
    return this.#destination;
  }

  getDestinationById(id) {
    const allDestination = this.getDestination();
    return allDestination.find((item) => item.id === id);
  }
}
