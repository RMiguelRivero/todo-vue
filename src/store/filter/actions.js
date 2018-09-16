import { type } from '../type.js';

export class FilterActions {
  static FILTER_TODOS = type('FILTER_TODOS');

  static changeFilter = (filter) => ({
    type: FilterActions.FILTER_TODOS,
    filter
  });
}
