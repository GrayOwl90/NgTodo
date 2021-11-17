import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.css']
})
export class TodoListItemUiComponent implements OnInit {

  @Input()
  todo: Todo | any;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }

  onToggle(event: any) {
    event.preventDefault();
    this.toggle.emit();
  }
}
