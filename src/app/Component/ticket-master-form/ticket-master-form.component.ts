import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TicketMasterEventsInterface } from 'src/app/models/ticket-master-events-interface';
import { TicketMasterSearchingCriteriaInterface } from 'src/app/models/ticket-master-searching-criteria-interface';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';

@Component({
  selector: 'app-ticket-master-form',
  templateUrl: './ticket-master-form.component.html',
  styleUrls: ['./ticket-master-form.component.css']
})
export class TicketMasterFormComponent implements OnInit{

  ticketMasterSearchingCriteriaInterface:TicketMasterSearchingCriteriaInterface = {} as TicketMasterSearchingCriteriaInterface

  constructor(private ticketMasterEventAPIService:TicketMasterEventAPIService) { }
  ngOnInit(): void {
    this.searchEvent()
  }

  searchEvent() {
    console.log("in search event")
    this.ticketMasterEventAPIService.getEventsAPI(this.ticketMasterSearchingCriteriaInterface).subscribe(
      (response:TicketMasterEventsInterface) => {
        this.ticketMasterEventAPIService.ticketMasterEventsInterface = response
      }
    )
  }

}
