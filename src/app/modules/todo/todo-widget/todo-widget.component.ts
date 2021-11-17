import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../store/todo.reducer";
import {TodoCreateAction} from "../store/todo.actions";
import {todoListSelector} from "../store/todo.selectors";

import {Todo} from "../model/todo";
import {Observable} from "rxjs";


@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

  //todoList = [];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit() {
  }

  onCreate(title: string) {
    console.log(title);
    this.store$.dispatch(new TodoCreateAction({title}));
  }

  onDelete(id: number) {

  }
}
