import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TicketMasterEvents } from 'src/app/models/ticket-master-events';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';

@Component({
  selector: 'app-ticket-master-form',
  templateUrl: './ticket-master-form.component.html',
  styleUrls: ['./ticket-master-form.component.css']
})
export class TicketMasterFormComponent{
  keyword: string = "";
  location: string = "";
  fromDate: Date = new Date();
  toDate: Date = new Date();

  constructor(private ticketMasterEventAPIService:TicketMasterEventAPIService) { }

  searchEvent(f: NgForm) {
    this.ticketMasterEventAPIService.getEventsAPI().subscribe(
      (response:TicketMasterEvents) => {
        this.ticketMasterEventAPIService.ticketMasterEvents = response
      }
    )
  }

}
