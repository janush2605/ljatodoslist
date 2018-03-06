import {TodosList} from "./TodosList";
import {generateId} from "../utils/IdGenerator";

export class TodosListBuilder {

  private todosList: TodosList = <TodosList>{
    id: generateId(),
    name: null,
    todos_count: 0
  };

  withName(value: string): TodosListBuilder {
    this.todosList.name = value;
    return this;
  }

  build(): TodosList {
    return this.todosList;
  }

}
