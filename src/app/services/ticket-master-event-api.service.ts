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
  url:String = 'https://app.ticketmaster.com/discovery/v2/events?'
  apikey="&apikey=" + Secrets.ticketMasterAPIKey
  mainUrl:string = 'https://app.ticketmaster.com'
  ticketMasterEventsInterface:TicketMasterEventsInterface = {} as TicketMasterEventsInterface

  constructor(private http: HttpClient) { }
  completeUrl:string =this.url + ""
  first:boolean = false;
  last:boolean = false;
  getEventsAPI(ticketMasterSearchingCriteriaInterface:TicketMasterSearchingCriteriaInterface):Observable<TicketMasterEventsInterface> {


    //var completeUrl = this.url + ""
    for (var key in ticketMasterSearchingCriteriaInterface) {
      this.completeUrl += "&" + key + "=" + ticketMasterSearchingCriteriaInterface[key  as keyof TicketMasterSearchingCriteriaInterface]
    }
    this.completeUrl += this.apikey
    console.log(this.completeUrl)
    return this.http.get<TicketMasterEventsInterface>(this.completeUrl)
  }
  
  /*getAllEvents() {
    return this.ticketMasterEventsInterface
  }*/

  getAllEvents():Observable<any>{
    return this.http.get<any>(this.completeUrl);
  }
  navigateToPage(argUrl:string):Observable<TicketMasterEventsInterface> {
    
    var navigationUrl:string = this.mainUrl+argUrl+ "&" + this.apikey
    console.log(navigationUrl)
    return this.http.get<TicketMasterEventsInterface>(navigationUrl)
  }
    
   
  
}
