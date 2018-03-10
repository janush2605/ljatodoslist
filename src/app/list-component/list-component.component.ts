import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodosList} from "../../model/TodosList";
import {TodosFacadeMock} from "../../services/TodosFacadeMock";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @ViewChild('listInput')
  input: ElementRef;

  constructor(private facade: TodosFacadeMock) {
  }

  @Input()
  list: TodosList;

  ngOnInit() {
  }

  editList() {
    this.input.nativeElement.focus();
  }

  saveList(name: string): void {
    this.facade.updateTodoList(this.list.id, name);
  }


  async deleteTodoList(): Promise<void> {
    await this.facade.deleteTodoList(this.list.id);
  }

  async loadTodos(): Promise<void> {

  }

}
