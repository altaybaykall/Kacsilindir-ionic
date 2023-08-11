import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  user_name : string='';
  password : string='';
  ngOnInit() {
  }

  register() {
    this.authService.register(this.user_name,this.password)
    this.router.navigate(['/login'])
  }

}
