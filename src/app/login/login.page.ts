import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  user_name : string='';
  password : string='';
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }
   login() {
    this.authService.login(this.user_name,this.password);
    this.router.navigate(['/dashboard'])
   }


}
