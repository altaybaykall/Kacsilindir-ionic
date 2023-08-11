import { Component } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';
import { AuthService } from '../services/auth.service';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   istanbul:any;
   authed:boolean= false;
   brands:any;
   brandlogo:any;
   BatteryInfo:any;
   logourl ='assets/brandlogos/';
   imgURL = 'https://openweathermap.org/img/wn/'
  constructor(private WeatherApi: WeatherapiService,
    private auth:AuthService,
    private http:HttpClient,
    private router:Router,
    
    ) {
    this.getWeatherByCity();
    this.authcheck();
    this.getbrands();
    this.test();
  
    }

    async test() {
      const info = await Device.getInfo();
      this.BatteryInfo = await (await Device.getBatteryInfo()).batteryLevel
      console.log(info);
      console.log(this.BatteryInfo);

      
     
    }


  getWeatherByCity(){
    this.WeatherApi.getWeatherByCityName('istanbul').subscribe((havadurumu)=> {
      this.istanbul = havadurumu;
    })
  }
    authcheck(){
     this.auth.logined();
      this.authed =this.auth.isLoggedIn();
      
    };
    authroute(){
       this.router.navigate(['/dashboard'])
     };


    getbrands() {
     
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization':'Bearer 2|lt5kmGz1V7VFyNloax4yc8pEO107aPa1UcJB7jHA'
        })
      }; 
     
      this.http.get('https://kacsilindir.com/api/brands',httpOptions).subscribe((brandsresp)=> {
        this.brands = brandsresp;
         this.brands.logoraw;
      })
    }

   




}
