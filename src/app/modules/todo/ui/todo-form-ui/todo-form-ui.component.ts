import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form-ui',
  templateUrl: './todo-form-ui.component.html',
  styleUrls: ['./todo-form-ui.component.css']
})
export class TodoFormUiComponent implements OnInit {
  title = '';

  @Output()
  create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCreate() {
    if (this.title) {
      this.create.emit(this.title);
      this.title = '';
    }
  }
}
