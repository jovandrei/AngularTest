import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';
declare const filterValue: any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  filterVar :string = "Filter your to-dos"
  filterVarSavedVar :string = ""

  todoArraySample:Todo[] = [
    { task:"fold clothes", completed:false, index:0 },
    { task:"put clothes in dresser", completed:true, index:1 },
    { task:"relax", completed:false, index:2 }
  ]

  todoArraySampleFiltered:Todo[]

  constructor() {
    this.todoArraySampleFiltered = this.todoArraySample.filter((obj) => {
      return obj.task.includes(this.filterVarSavedVar)
    })
  }

  ngOnInit(): void {
  }

  completeItem(index:number):void {
    console.log("item completed")
    var realIndex = this.todoArraySampleFiltered[index].index;
    console.log(index)
    console.log(realIndex)
    this.todoArraySample[realIndex].completed = true;
    this.todoArraySampleFiltered = this.todoArraySample.filter((obj) => {
      return obj.task.includes(this.filterVarSavedVar)
    })
  }

  addItem(newTodo:Todo) {
    console.log("item added")
    newTodo.index = this.todoArraySample.length;
    this.todoArraySample.push(newTodo)
    this.todoArraySampleFiltered = this.todoArraySample.filter((obj) => {
      return obj.task.includes(this.filterVarSavedVar)
    })
  }

  deleteItem(index:number):void {
    console.log("item deleted")
    var realIndex = this.todoArraySampleFiltered[index].index;
    this.todoArraySample.splice(realIndex, 1)

    for (let i = 0; i < this.todoArraySample.length; i++) {
      this.todoArraySample[i].index = i
    }

    this.todoArraySampleFiltered = this.todoArraySample.filter((obj) => {
      return obj.task.includes(this.filterVarSavedVar)
    })
  }

  updateValue() {
    this.filterVarSavedVar = this.filterVar
    this.todoArraySampleFiltered = this.todoArraySample.filter((obj) => {
      return obj.task.includes(this.filterVarSavedVar)
    })
  }

  focusedInput() {
    if (this.filterVar === "Filter your to-dos")
      this.filterVar = this.filterVarSavedVar
    }

  focusedOutInput() {
    this.filterVarSavedVar = this.filterVar
    if (this.filterVarSavedVar === "") {
      this.filterVar = "Filter your to-dos"
    }
  }


}
