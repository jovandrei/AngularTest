import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  newName="";
  newAge=0;
  newColor="";

  user:User = {name:"Melissa", age:30, favoriteColor:"Green"}
  displayEdit:boolean = false

  constructor() {
    this.newName=this.user.name;
    this.newAge=this.user.age;
    this.newColor=this.user.favoriteColor;
  }

  toggleEdit(){
    this.displayEdit = !this.displayEdit;
  }

  updateUserInformation(){
    this.user.name = this.newName;
    this.user.age = this.newAge;
    this.user.favoriteColor = this.newColor;
  }

}
