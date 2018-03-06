import {Component} from '@angular/core';
import {TodosFacade} from "../services/TodosFacade";
import {TodosFacadeMock} from "../services/TodosFacadeMock";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly facade: TodosFacade = new TodosFacadeMock();

  newTodosListName: string = '';

  createTodoList(name: string): void {
    console.log(this.newTodosListName);
    this.newTodosListName = '';
  }

}
