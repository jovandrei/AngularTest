import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {

  title = 'lab3';
  newName="";
  newAnimal=0;
  newAge=0;
  newColor="";
  animalIndex=0;
  animalArray=["Dog", "Cat", "Bird"];

  user:User = {name:"Andrei", age:28, favoriteColor:"Green", animal:1}
  displayEdit:boolean = false
  displaySaved:boolean = false

  constructor() {
    this.newName=this.user.name;
    this.newAge=this.user.age;
    this.newColor=this.user.favoriteColor;
    this.newAnimal=this.user.animal;
  }

  toggleEdit(){
    this.displayEdit = !this.displayEdit;
    this.displaySaved = false
  }

  updateUserInformation(){
    this.user.name = this.newName;
    this.user.age = this.newAge;
    this.user.favoriteColor = this.newColor;
    this.user.animal = this.newAnimal;
    this.displaySaved = true
  }

}
