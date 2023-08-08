import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey =  '45fa21e080f7f34ae4407e955f17442a';
  constructor( private http:HttpClient) { }

  GetWeatherDatas(cityName: string): Observable<any>
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apikey}`,{});
  }
}
