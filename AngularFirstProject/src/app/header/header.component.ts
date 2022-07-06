import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private router: Router
  private auth
  constructor(router: Router, auth: AuthService) { 
    this.router = router
    this.auth = auth
  }

  ngOnInit(): void {
  }

  goToHome(){
    console.log('hi')
    this.router.navigate(['home'])
  }

  logout(){
    this.auth.logout()

  }

}
