import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {

  @Input()
  todoList: Todo[] = [];

  @Output()
  delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
