import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  login(uname: string, pword: string){
    if (uname == "mahesh" && pword =="mahesh"){
      return 200;
    }
    else{
      return 403;
    }
  }

  logout(){
    this.route.navigate(['login'])
  }
}
