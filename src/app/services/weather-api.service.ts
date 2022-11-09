import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeatherInterface } from '../models/weather-interface';
import { Observable } from 'rxjs'
import { CoordinatesPointInterface } from '../models/coordinates-point-interface';
import { OpenWeatherAPIInterface } from '../models/open-weather-api-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  apiUrl = 'https://api.weather.gov/'
  appid='fabefc36eccdd8ae34bbc0209389fb73'
  openWeatherAPIUrl = 'https://api.openweathermap.org/data/2.5/weather?'
  constructor(private http: HttpClient) {}

  getWeather(forecastUrl:string):Observable<WeatherInterface> {
    //var url = this.apiUrl +  url + '/forecast';
    console.log(forecastUrl)
    return this.http.get<WeatherInterface>(forecastUrl);
  }

  getPoints(lat:string, lon:string ):Observable<CoordinatesPointInterface> {
    var url = this.apiUrl + "points/" + lat+ "," + lon;
    console.log(url)
    return this.http.get<CoordinatesPointInterface>(url);
  }

  getOpenWeatherAPI(lat:string, lon:string):Observable<OpenWeatherAPIInterface> {
    var url = this.openWeatherAPIUrl + "lat=" + lat + "&lon=" + lon + "&appid=" + this.appid + "&units=imperial"
    console.log(url)
    return this.http.get<OpenWeatherAPIInterface>(url);
  }
}
