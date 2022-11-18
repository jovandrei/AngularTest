import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TicketMasterEventsInterface } from 'src/app/models/ticket-master-events-interface';
import { TicketMasterSearchingCriteriaInterface } from 'src/app/models/ticket-master-searching-criteria-interface';
import { TicketMasterEventAPIService } from 'src/app/services/ticket-master-event-api.service';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-ticket-master-form',
  templateUrl: './ticket-master-form.component.html',
  styleUrls: ['./ticket-master-form.component.css']
})
export class TicketMasterFormComponent implements OnInit {

  imagesArray: { url: string, name: string }[] = []
  ticketMasterSearchingCriteriaInterface: TicketMasterSearchingCriteriaInterface = {} as TicketMasterSearchingCriteriaInterface
  myMap: L.Map
  newLat = "37"
  newLon = "-100"

  constructor(private ticketMasterEventAPIService: TicketMasterEventAPIService) { }

  ngOnInit(): void {
    this.searchEvent()
    this.updateMap();

  }

  updateMap() {
    if (this.myMap != undefined) {
      this.myMap.off();
      this.myMap.remove();
    }

    this.myMap = L.map('map')

    if (this.myMap != undefined) {
      this.myMap.setView([Number(this.newLat), Number(this.newLon)], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '' }).addTo(this.myMap);

      L.marker([Number(this.newLat), Number(this.newLon)]).addTo(this.myMap)
      L.marker([Number(this.newLat), Number(this.newLon)]).addTo(this.myMap)
      if (this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded != undefined) {
        for (let i = 0; i < this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded.events.length; i++) {

          L.marker([Number(this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded.events[i]._embedded.venues[0].location.latitude),
          Number(this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded.events[i]._embedded.venues[0].location.longitude)])
            .addTo(this.myMap)
        }
      }

    }


  }

  searchEvent() {
    this.ticketMasterEventAPIService.getEventsAPI(this.ticketMasterSearchingCriteriaInterface).subscribe(
      (response: TicketMasterEventsInterface) => {
        this.ticketMasterEventAPIService.ticketMasterEventsInterface = response
        if (this.ticketMasterEventAPIService.ticketMasterEventsInterface != undefined && this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded != undefined)
          this.updateMap()
        this.imagesArray =
          this.ticketMasterEventAPIService.ticketMasterEventsInterface._embedded.events.reduce((acc, val) => {
            return acc.concat({ url: val.images[0].url, name: val.name });
          }, [] as { url: string, name: string }[]);

        this.ticketMasterEventAPIService.emitChange(this.imagesArray)
      },
    )
  }

  resetFromDate() {
    delete this.ticketMasterSearchingCriteriaInterface['startDateTime']
  }

  resetToDate() {
    delete this.ticketMasterSearchingCriteriaInterface['endDateTime']
  }

}
