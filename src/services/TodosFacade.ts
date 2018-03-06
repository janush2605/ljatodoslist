import {TodosList} from "../model/TodosList";
import {IPromise} from "q";
import {Todo} from "../model/Todo";

export interface TodosFacade {
  getTodolists(): IPromise<Array<TodosList>>;

  createTodoList(name: string): IPromise<TodosList>;

  updateTodoList(id: string, name: string): IPromise<TodosList>;

  deleteTodoList(id: string): IPromise<void>;


  getTodoListTodos(id: string): IPromise<Array<Todo>>;

  getAllTodos(): IPromise<Array<Todo>>;

  createTodo(name: string, isComplete: boolean, todo_list: string): IPromise<Todo>;

  getTodo(id: string): IPromise<Todo>;

  updateTodo(id: string, isComplete: boolean): IPromise<Todo>;

  deleteTodo(id: string): IPromise<void>;

}
