import {Todo} from "./Todo";
import {generateId} from "../utils/IdGenerator";

export class TodoBuilder {

  private todo: Todo = <Todo>{
    id: generateId(),
    is_complete: false,
    name: null,
    todo_list: null
  };

  withIsComplete(value: boolean): TodoBuilder {
    this.todo.is_complete = value;
    return this;
  }

  withName(value: string): TodoBuilder {
    this.todo.name = value;
    return this;
  }

  withTodoList(value: string): TodoBuilder {
    this.todo.todo_list = value;
    return this;
  }

  build(): Todo {
    return this.todo;
  }

}
