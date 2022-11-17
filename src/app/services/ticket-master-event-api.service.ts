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

  constructor(private http: HttpClient) { }

  getEventsAPI(ticketMasterSearchingCriteriaInterface:TicketMasterSearchingCriteriaInterface):Observable<TicketMasterEventsInterface> {

    //ticketMasterSearchingCriteriaInterface.startDateTime.toISOString
    var completeUrl = this.url + "/discovery/v2/events?"

    for (var key in ticketMasterSearchingCriteriaInterface) {
      if (key == "startDateTime" || key == "endDateTime") {
        const event = new Date(ticketMasterSearchingCriteriaInterface[key]!);
        completeUrl += "&" + key + "=" + event.toISOString().split('.')[0]+"Z";
      }
      else
        completeUrl += "&" + key + "=" + ticketMasterSearchingCriteriaInterface[key as keyof TicketMasterSearchingCriteriaInterface]
    }
    completeUrl += this.apikey
    console.log(completeUrl)
    return this.http.get<TicketMasterEventsInterface>(completeUrl)
  }

  emitChange(change:{url:string, name:string}[]) {
    this._imagesArray.next(change)
  }

  getAllEvents() {
    return this.ticketMasterEventsInterface
  }

  getEventbyId(eventId:string) {
    var completeUrl = this.url + "/discovery/v2/events?"
    completeUrl += "&id=" + eventId
    completeUrl += this.apikey
    console.log(completeUrl)
    return this.http.get<TicketMasterEventsInterface>(completeUrl)
  }

  getPageForEvents(urlString:String) {
    var completeUrl = this.url + ""
    completeUrl += urlString
    completeUrl += this.apikey
    console.log(completeUrl)
    return this.http.get<TicketMasterEventsInterface>(completeUrl)
  }

}
