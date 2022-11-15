import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicketMasterEvents } from "../models/ticket-master-events";

@Injectable({
  providedIn: 'root'
})
export class TicketMasterEventAPIService {
  url:String = 'https://app.ticketmaster.com/discovery/v2/events?'
  apikey='apikey=YdV6ERiCicYRnTH4Ap3gjev9RzNik7Hc'

  ticketMasterEvents:TicketMasterEvents = {} as TicketMasterEvents

  constructor(private http: HttpClient) {}


  getEventsAPI():Observable<TicketMasterEvents> {
    console.log(this.url)
    var completeUrl = this.url + this.apikey
    console.log(completeUrl)
    return this.http.get<TicketMasterEvents>(completeUrl)
  }

  getAllEvents() {
    return this.ticketMasterEvents
  }

}
