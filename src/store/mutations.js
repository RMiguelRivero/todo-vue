import { type } from './type.js';

export class TodoMutations {
  static ADD_TODO = type('ADD_TODO');
  static REMOVE_TODO = type('REMOVE_TODO');
  static TOGGLE_TODO_COMPLETED = type('TOGGLE_TODO_COMPLETED');
}

export class FilterMutations {
  static FILTER_TODOS = type('FILTER_TODOS')
}
