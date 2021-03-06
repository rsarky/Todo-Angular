import { Component } from '@angular/core';
import { Todo } from './Todo';
import { LocalStorageService } from './services/local-storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  details: string;
  todo: Todo;
  todoStore: LocalStorageService;
  showHelpText:boolean;

  constructor(todoStore: LocalStorageService) {
    this.todoStore = todoStore;
    this.showHelpText = false;
  }

  addTodo() {
    if (!this.details) {
      this.showHelpText = true;
      return;
    }
    this.showHelpText = false;
    let newTodo = new Todo(this.details);
    this.todoStore.addTodo(newTodo);
    this.details = "";
  }

  toggleTodo(todo: Todo) {
    this.todoStore.toggleTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoStore.deleteTodo(todo);
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  editTodo(todo) {
    this.details = todo.details;
    this.deleteTodo(todo);
  }
}
