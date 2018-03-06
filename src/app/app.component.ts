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
    await this.updateTodosLists();
  }

  async createTodoList(): Promise<void> {
    await this.facade.createTodoList(this.newTodosListName);
    await this.updateTodosLists();
    this.clearTodosListName();
  }

  private async updateTodosLists() {
    this.todosLists = await this.facade.getTodolists();
  }

  private clearTodosListName() {
    this.newTodosListName = '';
  }

}
