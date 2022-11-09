import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WeatherInterface } from "./models/weather-interface";

@Injectable()
export class ApiService {
  apiUrl = 'https://api.weather.gov/gridpoints/DTX/'
  constructor(private http: HttpClient) {}

  getWeather(coords:String) {
    return this.http.get<WeatherInterface>(`${this.apiUrl}/coords`);
  }
}
