import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  newToDo :string = "Add your to-do"
  newToDoSavedVar :string = ""

  newTodo:Todo = {task:"", completed:false, index:-1};
  newIndex=-1

  @Output() chosen = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  AddNewTask(){
    var newTodoElement:Todo = {
      task:this.newToDo,
      completed:false,
      index:this.newIndex
    }
    //let result:Todo = { ...this.newToDo }
    this.chosen.emit(newTodoElement);
  }

  focusedInput() {
    if (this.newToDo === "Add your to-do")
      this.newToDo = this.newToDoSavedVar
    }

  focusedOutInput() {
    this.newToDoSavedVar = this.newToDo
    if (this.newToDoSavedVar === "") {
      this.newToDo = "Add your to-do"
    }
  }

}
