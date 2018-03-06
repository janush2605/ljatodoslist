import {Component, OnInit} from '@angular/core';
import {TodosFacade} from "../services/TodosFacade";
import {TodosFacadeMock} from "../services/TodosFacadeMock";
import {TodosList} from "../model/TodosList";
import {IPromise} from "q";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private readonly facade: TodosFacade = new TodosFacadeMock();

  newTodosListName: string = '';

  todosLists: Array<TodosList> = [];

  async ngOnInit(): Promise<void> {
    this.todosLists = await this.facade.getTodolists();
  }

  async createTodoList(): Promise<void> {
    await this.facade.createTodoList(this.newTodosListName);
    this.todosLists = await this.facade.getTodolists();
    this.newTodosListName = '';
  }

}
