import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { getTodos, getTodosWithAxios } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'g3';
  todos!: Todo[];

  constructor() {
    getTodos().then((todos) => {
      console.log(todos);
      this.todos = todos;
      this.completa();
      console.log(this.todos);
    });
  }

  completa() {
    this.todos = this.todos.map((todo) => {
      return { ...todo, completed: true };
    });
  }
}
