import SortForm from '../view/sort-view.js';
import TripPointForm from '../view/trip-point-view.js';
import EditForm from '../view/edit-form-view.js';
import EditList from '../view/edit-list-view.js';
import { render, replace } from '../framework/render.js';

export default class BoardPresenter {
  #container = null;
  #taskModel = null;

  #sortComponent = new SortForm();
  #editListComponent = new EditList();

  #boardTasks = [];

  constructor({ container, taskModel }) {
    this.#container = container;
    this.#taskModel = taskModel;
  }

  init() {
    this.#boardTasks = [...this.#taskModel.getPoint()];

    render(this.#sortComponent, this.#container);
    render(this.#editListComponent, this.#container);

    this.#boardTasks.forEach((task) => this.#renderTripPoint(task));
  }

  #renderTripPoint(point) {
    const tripPointComponent = new TripPointForm({
      point,
      offers: [...this.#taskModel.getOfferById(point.type, point.offers)],
      destination: this.#taskModel.getDestinationById(point.destination),
    });

    const editFormComponent = new EditForm({
      point,
      checkedOffers: [...(this.#taskModel.getOfferById(point.type, point.offers) || [])],
      offers: this.#taskModel.getOfferByType(point.type) || [],
      destination: this.#taskModel.getDestinationById(point.destination) || {}
    });

    const replacePointToForm = () => {
      replace(editFormComponent, tripPointComponent);
    };

    const replaceFormToPoint = () => {
      replace(tripPointComponent, editFormComponent);
    };

    tripPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', replacePointToForm);
    editFormComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
    });

    editFormComponent.element.querySelector('.event__rollup-btn').addEventListener('click', replaceFormToPoint);

    render(tripPointComponent, this.#editListComponent.getElement());
  }
}
