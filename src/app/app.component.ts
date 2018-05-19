import { Component } from '@angular/core';
import { Todo } from './Todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];
  details: string;
  todo: Todo;

  addTodo() {
    let newTodo = {
      details: this.details,
      isComplete: false
    }
    this.details="";
    this.todos.push(newTodo)
    console.log(this.todos)
  }

  toggleTodo(todo: Todo) {
    this.todos[this.todos.indexOf(todo)].isComplete = !this.todos[this.todos.indexOf(todo)].isComplete;
  }

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.isComplete);
    console.log(this.todos)
  }

  deleteTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo));
  }
}
