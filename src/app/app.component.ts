import { Component, OnInit } from '@angular/core';
import { TicketMasterEventDBInterface } from './models/ticket-master-event-db';
import { TicketMasterEventAPIService } from './services/ticket-master-event-api.service';
import { TicketMasterEventDBService } from './services/ticket-master-event-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  imagesArray: { url: string, name: string }[] | null = []
  constructor(private ticketMasterEventAPIService: TicketMasterEventAPIService, private ticketMasterEventDBService:TicketMasterEventDBService) {
    ticketMasterEventAPIService.imagesArray.subscribe(
      (response:{ url: string, name: string }[] | null = []) => {
        this.imagesArray = response
      })
  }

  ngOnInit(): void {
    this.ticketMasterEventDBService.getDB().subscribe(
      (response: TicketMasterEventDBInterface[]) => {
        this.ticketMasterEventDBService.bucketSize = response.length
      }
    )
  }

  getBucketSize() {
    return this.ticketMasterEventDBService.bucketSize
  }

  title = 'lab9';
}


