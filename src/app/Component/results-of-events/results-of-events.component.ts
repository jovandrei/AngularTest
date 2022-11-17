import { Component, OnInit } from '@angular/core';
import { TicketMasterUSA } from 'src/app/model/ticket-master-usa';
import { Event } from 'src/app/model/ticket-master-usa';
@Component({
  selector: 'app-results-of-events',
  templateUrl: './results-of-events.component.html',
  styleUrls: ['./results-of-events.component.css']
})
export class ResultsOfEventsComponent implements OnInit {
  ticketMasterListService: any;

  constructor() { }

  results:Event[] =[];

  ngOnInit(): void {
    this.ticketMasterListService.getAllevents().subscribe(
      (response:TicketMasterUSA)=>{
      console.log(response._embedded.events);
      this.results = response._embedded.events;
    },
    (err: any)=>{
      console.log(err);
    }
    );
  }
  
  

}
