import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../store/todo.reducer";
import {TodoCreateAction, TodoDeleteAction, TodoToggleAction} from "../store/todo.actions";
import {todoListSelector} from "../store/todo.selectors";
import {Todo} from "../model/todo";


@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

  todoList: Todo[] = [];


  constructor(private store$: Store<TodoState>) {
    this.store$.select(todoListSelector).subscribe(resp => {
      this.todoList = resp;
    });
  }

  ngOnInit() {
  }

  onCreate(title: string) {
    console.log(title);
    this.store$.dispatch(new TodoCreateAction({title}));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({id}));
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({id}));
  }
}
