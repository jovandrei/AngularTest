import { Component, OnInit  } from '@angular/core';
import { TicketMasterEventDBInterface } from 'src/app/models/ticket-master-event-db';
import { TicketMasterEventsInterface } from 'src/app/models/ticket-master-events-interface';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';
import { TicketMasterEventDBService } from 'src/app/services/ticket-master-event-db.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {


  ticketMasterEventDBInterface:TicketMasterEventDBInterface = {} as TicketMasterEventDBInterface
  tmEvent:TicketMasterEventsInterface = {} as TicketMasterEventsInterface
  constructor(private ticketMasterEventAPIService:TicketMasterEventAPIService,
    private ticketMasterEventDBService:TicketMasterEventDBService,
    private route:ActivatedRoute,
    private appComponent:AppComponent) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams)
    let id:string = String(routeParams.get("id"))
    this.ticketMasterEventAPIService.getEventbyId(id).subscribe(
      (response:TicketMasterEventsInterface) => {
        this.tmEvent = response
      }
    )
  }

  addEvent () {
    this.ticketMasterEventDBInterface.eventId = this.tmEvent._embedded.events[0].id
    this.ticketMasterEventDBService.postDB(this.ticketMasterEventDBInterface)
    console.log(this.tmEvent._embedded.events[0].images[0])
  }
  addToBucket(id:string){
    this.ticketMasterEventDBInterface.eventId = id;
    this.ticketMasterEventDBService.postDB(this.ticketMasterEventDBInterface);
  }



}
