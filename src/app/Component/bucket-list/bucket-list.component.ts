import { Component, OnInit } from '@angular/core';
import { TicketMasterEventDBInterface } from 'src/app/models/ticket-master-event-db';
import { TicketMasterEventsInterface } from 'src/app/models/ticket-master-events-interface';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';
import { TicketMasterEventDBService } from 'src/app/services/ticket-master-event-db.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

  ticketMasterEventDBInterfaceArray: TicketMasterEventDBInterface[] = []
  ticketMasterEventsInterfaceArray: TicketMasterEventsInterface[] = []
  constructor(private ticketMasterEventAPIService: TicketMasterEventAPIService, private ticketMasterEventDBService: TicketMasterEventDBService) { }

  ngOnInit(): void {
    this.ticketMasterEventDBService.getDB().subscribe(
      (response: TicketMasterEventDBInterface[]) => {
        this.ticketMasterEventDBInterfaceArray = response
        this.getAllEventsInArray()
      }
    )
  }

  getBucketListArray(): TicketMasterEventDBInterface[] {
    return this.ticketMasterEventDBInterfaceArray
  }

  getAllEventsInArray() {
    for (let i = 0; i < this.ticketMasterEventDBInterfaceArray.length; i++) {
      this.ticketMasterEventAPIService.getEventbyId(this.ticketMasterEventDBInterfaceArray[i].eventId).subscribe(
        (response: TicketMasterEventsInterface) => {
          this.ticketMasterEventsInterfaceArray.push(response)
        }
      )
    }


  }

  deleteItem(id: string) {
    let index = this.ticketMasterEventDBInterfaceArray.findIndex(t => t._id == id)

    this.ticketMasterEventDBInterfaceArray.splice(index,1)
    this.ticketMasterEventDBService.deleteDB(id).subscribe(
      res => {
        console.log(res)
      }
    )
  }


}
