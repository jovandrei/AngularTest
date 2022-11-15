import { Component } from '@angular/core';
import { TicketMasterEvents } from 'src/app/models/ticket-master-events';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';

@Component({
  selector: 'app-results-of-events',
  templateUrl: './results-of-events.component.html',
  styleUrls: ['./results-of-events.component.css']
})
export class ResultsOfEventsComponent{

  constructor(private ticketMasterEventAPIService:TicketMasterEventAPIService) { }

  getEvents():TicketMasterEvents {
    return this.ticketMasterEventAPIService.getAllEvents()
  }

}
