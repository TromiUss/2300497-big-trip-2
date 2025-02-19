import AbstractView from '../framework/view/abstract-view';

function createNewTaskButtonTemplate() {
  return '<button class="control__button">+ ADD NEW TASK</button>';
}

export default class NewTaskButtonView extends AbstractView{
  get template() {
    return createNewTaskButtonTemplate();
  }
}

