import { Component } from '@angular/core';
import { TicketMasterEventAPIService } from './services/ticket-master-event-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagesArray: { url: string, name: string }[] | null = []
  constructor(private ticketMasterEventAPIService: TicketMasterEventAPIService) {
    ticketMasterEventAPIService.imagesArray.subscribe(
      (response:{ url: string, name: string }[] | null = []) => {
        this.imagesArray = response
      })
  }
  title = 'lab9';
}


