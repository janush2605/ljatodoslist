import {Component, OnInit, ViewChild} from '@angular/core';
import {TodosFacade} from "../services/TodosFacade";
import {TodosFacadeMock} from "../services/TodosFacadeMock";
import {TodosList} from "../model/TodosList";
import {IPromise} from "q";
import {Todo} from "../model/Todo";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newTodosListName: string = '';

  todosLists: Array<TodosList> = [];
  selectedTodosList: TodosList;
  todosOfSelectedList: Array<Todo>;

  editMode: boolean = false;


  constructor(private facade: TodosFacadeMock) {
  }

  async ngOnInit(): Promise<void> {
    await this.updateTodosLists();
  }

  selectTodosList(todosList: TodosList): void {
    this.selectedTodosList = _.clone(todosList);
  }

  async createTodoList(): Promise<void> {
    await this.facade.createTodoList(this.newTodosListName);
    await this.updateTodosLists();
    this.clearTodosListName();
  }

  editList(): void {
    this.editMode = true;
  }

  async saveListWithTodos(): Promise<void> {
    if (this.selectedTodosList) {
      await this.saveTodosList();
    }
    this.editMode = false;
  }

  cancelListEdition(): void {
    this.editMode = false;
  }

  async deleteTodoList(id: string): Promise<void> {
    await this.facade.deleteTodoList(id);
    await this.updateTodosLists();
    this.selectedTodosList = null;
  }

  async saveTodosList(): Promise<void> {
    await this.facade.updateTodoList(this.selectedTodosList.id, this.selectedTodosList.name);
    await this.updateTodosLists();
  }

  addTodo(): void {

  }

  private async updateTodosLists() {
    this.todosLists = await this.facade.getTodolists();
  }

  private clearTodosListName() {
    this.newTodosListName = '';
  }

}
