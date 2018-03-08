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
  selectedTodosList: TodosList;

  editSelectTodosList: boolean = false;

  async ngOnInit(): Promise<void> {
    await this.updateTodosLists();
  }

  selectTodosList(todosList: TodosList): void {
    this.selectedTodosList = todosList;
  }

  async createTodoList(): Promise<void> {
    await this.facade.createTodoList(this.newTodosListName);
    await this.updateTodosLists();
    this.clearTodosListName();
  }

  editList(): void {
    this.editSelectTodosList = true;
  }

  saveListWithTodos(): void {
    this.editSelectTodosList = false;
  }

  cancelListEdition(): void {
    this.editSelectTodosList = false;
  }

  async deleteTodoList(): Promise<void> {
    if (this.selectedTodosList) {
      await this.facade.deleteTodoList(this.selectedTodosList.id);
      await this.updateTodosLists();
    }
  }

  async saveTodosList(id: string, name: string): Promise<void> {
    await this.facade.updateTodoList(id, name);
    await this.updateTodosLists();
  }

  private async updateTodosLists() {
    this.todosLists = await this.facade.getTodolists();
  }

  private clearTodosListName() {
    this.newTodosListName = '';
  }

}
