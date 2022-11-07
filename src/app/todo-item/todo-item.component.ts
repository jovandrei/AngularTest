import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/models/todo';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('50ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})
export class TodoItemComponent implements OnInit {

  displayComplete = true;
  show = false;
  displayEdit:boolean = false
  @Input() todoItem:Todo = { task:"default", completed:false, index: -1 };
  @Input() index:number = -1;
  @Output() deleteChose = new EventEmitter<string>();
  @Output() completeChose = new EventEmitter<string>();
  myClass = ""

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggleShow()
    }, 0);

  }

  completeItem(){
    this.displayComplete = !this.displayComplete;
    this.todoItem.completed = !this.todoItem.completed;
    this.myClass=this.displayComplete==false?"striketrough":""
    this.completeChose.emit();


  }

  deleteItem(){
    this.toggleShow()
    setTimeout(() => {
      this.deleteChose.emit();
    }, 50);

  }
  toggleEdit(){
    this.displayEdit = !this.displayEdit;
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggleShow() {
    this.show = !this.show;
  }

}
