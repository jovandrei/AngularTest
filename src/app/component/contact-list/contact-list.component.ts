import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],

})
export class ContactListComponent implements OnInit {
  contactListArray:Contact[] = [
    { image:"https://robohash.org/1", name:"Steely Sterns", email:"steely@sterns.net" },
    { image:"https://robohash.org/2", name:"Beety Boop", email:"betty@example.com" },
    { image:"https://robohash.org/3", name:"Eleanor Shutterbug", email:"eshutterbug@example.com" }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  deleteItem(index:number):void {
    this.contactListArray.splice(index, 1)
  }

  addContact(newContact:Contact) {
    this.contactListArray.push(newContact)
  }

}
