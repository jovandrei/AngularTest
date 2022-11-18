import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Secrets } from "../models/secrets";

import { TicketMasterEventsInterface } from "../models/ticket-master-events-interface";
import { TicketMasterSearchingCriteriaInterface } from "../models/ticket-master-searching-criteria-interface";

@Injectable({
  providedIn: 'root'
})
export class TicketMasterEventAPIService {
  url:String = 'https://app.ticketmaster.com'
  apikey="&apikey=" + Secrets.ticketMasterAPIKey
  ticketMasterEventsInterface:TicketMasterEventsInterface = {} as TicketMasterEventsInterface

  private _imagesArray = new BehaviorSubject<{url:string, name:string}[] | null>([])
  readonly imagesArray:Observable<{url:string, name:string}[]| null>  = this._imagesArray.asObservable();


  constructor(private http: HttpClient) {

   }
  completeUrl:string =this.url + ""
  first:boolean = false;
  last:boolean = false;
  getEventsAPI(ticketMasterSearchingCriteriaInterface:TicketMasterSearchingCriteriaInterface):Observable<TicketMasterEventsInterface> {

    this.completeUrl = this.url + "/discovery/v2/events?"

    for (var key in ticketMasterSearchingCriteriaInterface) {
      if (key == "startDateTime" || key == "endDateTime") {
        const event = new Date(ticketMasterSearchingCriteriaInterface[key]!);
        this.completeUrl += "&" + key + "=" + event.toISOString().split('.')[0]+"Z";
      }
      else
      this.completeUrl += "&" + key + "=" + ticketMasterSearchingCriteriaInterface[key as keyof TicketMasterSearchingCriteriaInterface]
    }
    this.completeUrl += this.apikey
    console.log(this.completeUrl)
    return this.http.get<TicketMasterEventsInterface>(this.completeUrl)
  }

  emitChange(change:{url:string, name:string}[]) {
    this._imagesArray.next(change)
  }

  getEventbyId(eventId:string) {
    this.completeUrl = this.url + "/discovery/v2/events?"
    this.completeUrl += "&id=" + eventId
    this.completeUrl += this.apikey
    return this.http.get<TicketMasterEventsInterface>(this.completeUrl)
  }

  navigateToPage(argUrl:string):Observable<TicketMasterEventsInterface> {
    var navigationUrl:string = this.url+argUrl+ "&" + this.apikey
    return this.http.get<TicketMasterEventsInterface>(navigationUrl)
  }



}
