import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicketMasterEventsInterface } from "../models/ticket-master-events-interface";
import { TicketMasterSearchingCriteriaInterface } from "../models/ticket-master-searching-criteria-interface";

@Injectable({
  providedIn: 'root'
})
export class TicketMasterEventAPIService {
  url:String = 'https://app.ticketmaster.com/discovery/v2/events?'
  apikey='&apikey=YdV6ERiCicYRnTH4Ap3gjev9RzNik7Hc'

  ticketMasterEventsInterface:TicketMasterEventsInterface = {} as TicketMasterEventsInterface

  constructor(private http: HttpClient) { }

  getEventsAPI(ticketMasterSearchingCriteriaInterface:TicketMasterSearchingCriteriaInterface):Observable<TicketMasterEventsInterface> {


    var completeUrl = this.url + ""
    for (var key in ticketMasterSearchingCriteriaInterface) {
      completeUrl += "&" + key + "=" + ticketMasterSearchingCriteriaInterface[key  as keyof TicketMasterSearchingCriteriaInterface]
    }
    completeUrl += this.apikey
    console.log(completeUrl)
    return this.http.get<TicketMasterEventsInterface>(completeUrl)
  }

  getAllEvents() {
    return this.ticketMasterEventsInterface
  }

}
