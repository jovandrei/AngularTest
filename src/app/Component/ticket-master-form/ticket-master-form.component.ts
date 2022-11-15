import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-master-form',
  templateUrl: './ticket-master-form.component.html',
  styleUrls: ['./ticket-master-form.component.css']
})
export class TicketMasterFormComponent implements OnInit {
Keyword:string="";
location:string="";
FromDate:Date=new Date();
ToDate:Date=new Date();
  constructor() { }

  ngOnInit(): void {
  
  }

}
