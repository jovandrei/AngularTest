import { Component } from '@angular/core';
import { TicketMasterEventDBInterface } from 'src/app/models/ticket-master-event-db';
import { Page, TicketMasterEventsInterface } from 'src/app/models/ticket-master-events-interface';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';
import { TicketMasterEventDBService } from 'src/app/services/ticket-master-event-db.service';

@Component({
  selector: 'app-results-of-events',
  templateUrl: './results-of-events.component.html',
  styleUrls: ['./results-of-events.component.css']
})
export class ResultsOfEventsComponent {

  constructor(private ticketMasterEventAPIService: TicketMasterEventAPIService, private ticketDBService: TicketMasterEventDBService) {  }

  currentPage: Page = {} as Page;
  ticketMasterEventsInterface: TicketMasterEventsInterface = {} as TicketMasterEventsInterface;
  ticketDB: TicketMasterEventDBInterface = {} as TicketMasterEventDBInterface;

  getEvents() {
    this.ticketMasterEventsInterface = this.ticketMasterEventAPIService.ticketMasterEventsInterface
  }

  getLastPage(): void {
    this.ticketMasterEventAPIService.navigateToPage(this.ticketMasterEventsInterface._links.last.href).subscribe(
      (response: TicketMasterEventsInterface) => {
        this.ticketMasterEventAPIService.ticketMasterEventsInterface = response
        this.ticketMasterEventsInterface = this.ticketMasterEventAPIService.ticketMasterEventsInterface
      }
    )
  }

  getFirstPage() {
    return this.ticketMasterEventAPIService.navigateToPage(this.ticketMasterEventsInterface._links.first.href).subscribe(
      (response: TicketMasterEventsInterface) => {
        this.ticketMasterEventAPIService.ticketMasterEventsInterface = response
        this.ticketMasterEventsInterface = this.ticketMasterEventAPIService.ticketMasterEventsInterface
      }
    )

  }

  getNextPage() {
    console.log(this.ticketMasterEventsInterface._links.next.href)
    return this.ticketMasterEventAPIService.navigateToPage(this.ticketMasterEventsInterface._links.next.href).subscribe(
      (response: TicketMasterEventsInterface) => {
        this.ticketMasterEventAPIService.ticketMasterEventsInterface = response
        this.ticketMasterEventsInterface = this.ticketMasterEventAPIService.ticketMasterEventsInterface
      }
    )

  }

  addToBucket(id: string) {
    this.ticketDB.eventId = id;
    this.ticketDBService.postDB(this.ticketDB).subscribe(
      res =>
        console.log(res)
    );
  }

}
