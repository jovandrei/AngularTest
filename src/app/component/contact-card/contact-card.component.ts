import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class ContactCardComponent implements OnInit {

  displayEdit:boolean = false
  show = false;

  @Input() contactListItem:Contact = { image:"https://i.pravatar.cc/200?img=1", name:"default", email:"defaults@default.com" };
  @Output() chosen = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggleShow()
    }, 0);

  }

  deleteItem(){
    this.toggleShow()
    setTimeout(() => {
      this.chosen.emit();
    }, 600);

  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  toggleShow() {
    this.show = !this.show;
  }

  toggleEdit(){
    this.displayEdit = !this.displayEdit;
  }

}
