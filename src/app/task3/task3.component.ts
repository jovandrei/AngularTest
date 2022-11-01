import { Component } from '@angular/core';
declare var myExtObject: any;
declare const window: any;
declare var color:string;

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component{
  title = 'lab3-c';
  size=5;
  newSize;

  constructor() {
    this.newSize = this.size;
    window.size = this.size
      window.onload = function () {
        myExtObject.generateGrid(window.size);
        myExtObject.setEventsListeners(window.size)

      };
  }
  ngAfterViewInit() {
    window.size = this.size
    myExtObject.generateGrid(this.newSize, this);
    myExtObject.setEventsListeners(window.size)
  }

  public updateSize(){
    this.size = this.newSize;
    window.size = this.size
    myExtObject.generateGrid(this.newSize, this);
    myExtObject.setEventsListeners(window.size)
  }

  ChangeColor(newColor:string) {
    color = newColor
  }

}
