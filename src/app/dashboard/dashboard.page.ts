import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {



  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }
   logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
   }
  
}
