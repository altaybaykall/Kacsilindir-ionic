import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
 // https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
 // 84e22cef5c6861b597a46cfa4809cde2
 url:string="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=";
 apiKey = '84e22cef5c6861b597a46cfa4809cde2';

 constructor(private http:HttpClient) { 
      this.url = this.url+this.apiKey;
  }

   getWeatherByCoordinates(lat:number , lon:number) {
    return this.http.get(this.url+"&lat="+lat+"&lon="+lon)
   }
   getWeatherByCityName(cityName:string){
    return this.http.get(this.url+"&q="+cityName)
   }

}
