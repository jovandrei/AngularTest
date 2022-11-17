import { Component } from '@angular/core';
import { Page, TicketMasterEventsInterface } from 'src/app/models/ticket-master-events-interface';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';

@Component({
  selector: 'app-results-of-events',
  templateUrl: './results-of-events.component.html',
  styleUrls: ['./results-of-events.component.css']
})
export class ResultsOfEventsComponent{

  constructor(private ticketMasterEventAPIService:TicketMasterEventAPIService) {

   }
  currentPage:Page = {} as Page;
  ticketMasterEventsInterface:TicketMasterEventsInterface ={} as TicketMasterEventsInterface;
  ngOnInit(): void {
    console.log("here")
    this.getEvents()
  }
  getEvents():void {
    this.ticketMasterEventAPIService.getAllEvents().subscribe(
      (response:any)=>{
      console.log(response);
      this.ticketMasterEventsInterface = response;
    },
    (err)=>{
      console.log(err);
    }
    );
    
  }
  getLastPage():void{
    this.ticketMasterEventAPIService.navigateToPage(this.ticketMasterEventsInterface._links.last.href).subscribe(
      (response:TicketMasterEventsInterface) => {
        this.ticketMasterEventsInterface = response
      }
    )
    
  }
  getFirstPage(){
    return  this.ticketMasterEventAPIService.navigateToPage(this.ticketMasterEventsInterface._links.first.href).subscribe(
      (response:TicketMasterEventsInterface) => {
        this.ticketMasterEventsInterface = response
      }
    )
    
  }
  getNextPage(){
    return  this.ticketMasterEventAPIService.navigateToPage(this.ticketMasterEventsInterface._links.next.href).subscribe(
      (response:TicketMasterEventsInterface) => {
        this.ticketMasterEventsInterface = response
      }
    )
    
  }

}
