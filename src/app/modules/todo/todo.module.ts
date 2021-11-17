import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo.reducer";
import { TodoPageComponent } from './todo-page/todo-page.component';
import {RouterModule} from "@angular/router";
import {todoRoutes} from "./routes";
import { TodoWidgetComponent } from './todo-widget/todo-widget.component';
import { TodoFormUiComponent } from './ui/todo-form-ui/todo-form-ui.component';
import {FormsModule} from "@angular/forms";
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoFormUiComponent,
    TodoListUiComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
    FormsModule
  ]
})
export class TodoModule { }
