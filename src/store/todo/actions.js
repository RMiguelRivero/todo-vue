import { type } from '../type.js';

export class TodoActions {
  static ADD_TODO = type('ADD_TODO');
  static REMOVE_TODO = type('REMOVE_TODO');
  static TOGGLE_TODO_COMPLETED = type('TOGGLE_TODO_COMPLETED');

  static addTodo = (todo) => ({
    type: TodoActions.ADD_TODO,
    todo
  });

  static removeTodo = (id) => ({
    type: TodoActions.REMOVE_TODO,
    id
  });

  static toggleTodo = (id) => ({
    type: TodoActions.TOGGLE_TODO_COMPLETED,
    id
  });
}
