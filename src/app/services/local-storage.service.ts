import { Injectable } from '@angular/core';
import { Todo } from '../Todo';

@Injectable()
export class LocalStorageService {
  todos: Todo[];

  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    this.todos = persistedTodos.map((todo: { details: string, isComplete: boolean }) => {
      let ret = new Todo(todo.details);
      ret.isComplete = todo.isComplete;
      return ret;
    });
  }

  updateStore() {
    let value = JSON.stringify(this.todos);
    localStorage.setItem('todos', value);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.updateStore();
  }

  toggleTodo(todo: Todo) {
    todo.isComplete = !todo.isComplete;
    this.updateStore();
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }

  removeCompleted() {
    this.todos = this.todos.filter( (todo) => {
      return !todo.isComplete;
    });
    this.updateStore();
  }
}
