import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
 private isLoggedIN : boolean = true;
 user_name : string[] = ['altay','baykal'];

 userinfo : { username:string ,password:string}[] = [
  {username:'altay',password:'12345'},
  {username:'baykal',password:'1234'}
 ];
 userinfos: { username: string, password: string }[] = [];
 
  login(user_name:string,password:string) {
    if (!user_name || !password) {
      alert('Kullanıcı adı veya şifre boş olamaz.');
      return;
    }
    
    const user = this.userinfo.find(info => info.username === user_name && info.password === password);
    

    if(user) {
      this.isLoggedIN = true;
    }
    else {
      return alert('Kullanıcı adı veya şifre yanlış')
    }
  }

    logout() {
      this.isLoggedIN = false;
    }
    register(username: string, password: string) {
      const newUser = { username, password };
      this.userinfo.push(newUser);
     
    }
  
    isLoggedIn() {
      return this.isLoggedIN;
    }
    logined(){
      this.isLoggedIN = true;
      return this.isLoggedIN;
    }
}
