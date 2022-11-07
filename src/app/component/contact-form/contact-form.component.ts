import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  newImage :string = "Adult_Female"
  newName :string = ""
  newEmail :string = ""

  imageArray:String[]=["Adult_Female", "Adult_Male", "Child Female", "Child Male", "Senior Female", "Senior Male", "Soldier", "Statue"]

  @Output() chosen = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit(): void {
  }

  AddNewContact(){

    var newContact:Contact = {
      image:"https://robohash.org/"+this.newImage,
      name:this.newName,
      email:this.newEmail};

    this.chosen.emit(newContact);
  }

}
