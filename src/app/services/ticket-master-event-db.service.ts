import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TicketMasterEventDBInterface } from '../models/ticket-master-event-db';
import { Secrets } from '../models/secrets';

@Injectable({
  providedIn: 'root'
})
export class TicketMasterEventDBService {
  apiKey = Secrets.dbAPIKey
  url = "https://ticketmasterdb-d9b5.restdb.io/rest/eventsbucketlist"


 constructor(private http: HttpClient) { }

 getDB() {
    return this.http.get<TicketMasterEventDBInterface>(this.url, {headers:{'x-apikey':this.apiKey}})
 }

 postDB(ticketMasterEventDBInterface:TicketMasterEventDBInterface) {
    return this.http.post<TicketMasterEventDBInterface>(this.url, ticketMasterEventDBInterface, {headers:{'x-apikey':this.apiKey}})
 }


}
