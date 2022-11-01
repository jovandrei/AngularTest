import { Component, ViewChild, ElementRef, ViewChildren, AfterViewInit} from '@angular/core';
import { Task3Component } from './task3/task3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{

  task = "Task1"

  selectTask(newTask:string){
    this.task = newTask;
  }

}
