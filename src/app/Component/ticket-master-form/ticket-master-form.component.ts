import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TicketMasterEventsInterface } from 'src/app/models/ticket-master-events-interface';
import { TicketMasterSearchingCriteriaInterface } from 'src/app/models/ticket-master-searching-criteria-interface';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';

@Component({
  selector: 'app-ticket-master-form',
  templateUrl: './ticket-master-form.component.html',
  styleUrls: ['./ticket-master-form.component.css']
})
export class TicketMasterFormComponent implements OnInit {

  imagesArray: {url:string, name:string}[] = []
  ticketMasterSearchingCriteriaInterface: TicketMasterSearchingCriteriaInterface = {} as TicketMasterSearchingCriteriaInterface

  constructor(private ticketMasterEventAPIService: TicketMasterEventAPIService) { }

  ngOnInit(): void {
    this.searchEvent()
  }

  searchEvent() {
    this.ticketMasterEventAPIService.getEventsAPI(this.ticketMasterSearchingCriteriaInterface).subscribe(
      (response: TicketMasterEventsInterface) => {
        this.ticketMasterEventAPIService.ticketMasterEventsInterface = response
        if (this.ticketMasterEventAPIService.ticketMasterEventsInterface != undefined && this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded != undefined)

        this.imagesArray =
          this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded.events.reduce((acc, val) => {
            return acc.concat({url:val.images[0].url, name:val.name});

          }, [] as {url:string, name:string}[]);
          this.ticketMasterEventAPIService.emitChange(this.imagesArray)
      },
    )
  }

  resetFromDate() {
    delete this.ticketMasterSearchingCriteriaInterface['startDateTime']
  }

  resetToDate() {
    delete this.ticketMasterSearchingCriteriaInterface['endDateTime']
  }

}
