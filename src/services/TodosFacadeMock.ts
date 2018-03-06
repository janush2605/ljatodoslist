import {TodosFacade} from "./TodosFacade";
import {TodosList} from "../model/TodosList";
import {Todo} from "../model/Todo";
import {IPromise, reject, when} from "q";
import {TodosListBuilder} from "../model/TodosListBuilder";
import * as _ from "lodash";

export class TodosFacadeMock implements TodosFacade {

  private todoLists: Array<TodosList> = [];
  private todos: Array<Todo> = [];

  getTodolists(): IPromise<Array<TodosList>> {
    return when(this.todoLists);
  }

  createTodoList(name: string): IPromise<TodosList> {
    const todoList: TodosList = new TodosListBuilder().withName(name).build();
    this.todoLists.push(todoList);
    return when(todoList);
  }

  updateTodoList(id: string, name: string): IPromise<TodosList> {
    const todosList: TodosList = _.find(this.todoLists, (todosList): boolean => todosList.id === id);
    if (todosList) {
      return when(new TodosListBuilder().withName(name).build());
    }
    return reject('TodosList with given id: ' + id + ' not found');
  }

  deleteTodoList(id: string): IPromise<void> {
    const removed: Array<TodosList> = _.remove(this.todoLists, todoList => todoList.id === id);
    return _.isEmpty(removed) ? reject('TodosList with given id: ' + id + ' cannot be removed because doesn\'t exists') : when();
  }

  getTodoListTodos(id: string): IPromise<Array<Todo>> {
    return undefined;
  }

  getAllTodos(): IPromise<Array<Todo>> {
    return undefined;
  }

  createTodo(name: string, isComplete: boolean, todo_list: string): IPromise<Todo> {
    return undefined;
  }

  getTodo(id: string): IPromise<Todo> {
    return undefined;
  }

  updateTodo(id: string, isComplete: boolean): IPromise<Todo> {
    return undefined;
  }

  deleteTodo(id: string): IPromise<void> {
    return undefined;
  }

}
