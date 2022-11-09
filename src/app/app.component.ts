import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherInterface } from './models/weather-interface';
import { WeatherApiService } from './services/weather-api.service';
import { CoordinatesPointInterface } from './models/coordinates-point-interface';
import { OpenWeatherAPIInterface } from './models/open-weather-api-interface';
import * as L from 'leaflet';
import { delay, map, retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab6';
  newLat = "38.8316"
  newLon = "-77.1934"

  forecastUrl = ""
  city = ""
  state = ""
  status = ""

  openWeatherWeatherMain = ""
  openWeatherWeatherDescription = ""
  openWeatherSysCountry = ""
  openWeatherSysCounty = ""
  openWeatherMainTemp = -1
  openWeatherMainTempMin = -1
  openWeatherMainTempMax = -1
  openWeatherWeatherIcon = ""
  myMap: L.Map

  private weatherApiService: WeatherApiService;

  weatherObject!: WeatherInterface;

  constructor(private http: HttpClient) {
    this.weatherApiService = new WeatherApiService(http);
  }
  ngOnInit(): void {
    this.fetchPoints();
    this.updateMap();


  }

  updateMap() {
    if (this.myMap != undefined) {
      this.myMap.off();
      this.myMap.remove();
    }

    this.myMap = L.map('map')

    if (this.myMap != undefined) {
      this.myMap.setView([Number(this.newLat), Number(this.newLon)], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: ''}).addTo(this.myMap);

      L.Icon.Default.imagePath = "./assets/leaflet/"

      let iconOptions = {
        draggable:true
       }

       let marker:L.Marker = L.marker([Number(this.newLat), Number(this.newLon)],  iconOptions).addTo(this.myMap)
       marker.bindPopup(this.newLat + "," + this.newLon).openPopup

       marker.on('dragend', (event)=> {
        this.newLat = marker.getLatLng().lat + ""
        this.newLon = marker.getLatLng().lng + ""
        this.updateWeather()


      })


      this.myMap.on('click', (event)=> {
        if (marker != null) {
          this.myMap.removeLayer(marker)
        }
        this.newLat = event.latlng.lat + "";
        this.newLon = event.latlng.lng + "";
        this.updateWeather()
        marker = L.marker([Number(this.newLat), Number(this.newLon)],  iconOptions).addTo(this.myMap)
        marker.bindPopup(this.newLat + "," + this.newLon).openPopup

        marker.on('dragend', (event)=> {
          this.newLat = marker.getLatLng().lat + ""
          this.newLon = marker.getLatLng().lng + ""
          this.updateWeather()
        })
      })


    }

  }

  onAdressSubmit(form: { value: { adress: any; }; }) {
    console.log(form.value.adress);
  }

  updateWeather() {
    this.weatherApiService.getPoints(this.newLat, this.newLon).subscribe(
      (data: CoordinatesPointInterface) => {
        this.forecastUrl = data.properties.forecast
        this.city = data.properties.relativeLocation.properties.city
        this.state = data.properties.relativeLocation.properties.state
        this.status = "200 (loading...)"
        this.fetchWeather()
      },
      (error) => {
        console.log("Got an error:" + error.status)
        this.city = "Undefined"
        this.state = "Undefined"
        this.status = error.status
        this.weatherObject.properties.periods = []
      }
    );

    this.weatherApiService.getOpenWeatherAPI(this.newLat, this.newLon).subscribe(
      (data: OpenWeatherAPIInterface) => {
        this.openWeatherWeatherMain = data.weather[0].main
        this.openWeatherWeatherDescription = data.weather[0].description
        this.openWeatherSysCountry = data.sys.country
        this.openWeatherSysCounty = data.name
        this.openWeatherMainTemp = data.main.temp
        this.openWeatherMainTempMin = data.main.temp_min
        this.openWeatherMainTempMax = data.main.temp_max
        this.openWeatherWeatherIcon = data.weather[0].icon
      },
      (error) => {
        console.log("Got an error:" + error.status)
        this.openWeatherWeatherMain = "Undefined"
        this.openWeatherWeatherDescription = "Undefined"
        this.openWeatherSysCountry = "Undefined"
        this.openWeatherSysCounty = "Undefined"
        this.openWeatherMainTemp = -1
        this.openWeatherMainTempMin = -1
        this.openWeatherMainTempMax = -1
        this.openWeatherWeatherIcon = ""
      }
    )
  }

  fetchPoints(): void {
    if (this.myMap != undefined) {
      this.updateMap();
    }

    this.updateWeather()

  }

  UpdateLatLon() {
    this.fetchPoints()
  }

  fetchWeather(): void {
    this.weatherApiService.getWeather(this.forecastUrl).pipe(retry(3), delay(1000)).subscribe(
      (data: WeatherInterface) => {
        this.weatherObject = {
          "@context": data['@context'],
          type: data.type,
          geometry: data.geometry,
          properties: data.properties
        }
        this.status = "200 (Done)"
      },
      (error) => {
        this.status = error.status
        this.city = "Undefined"
        this.state = "Undefined"
        this.status = error.status
        this.weatherObject.properties.periods = []
      }
    )
  }
}
