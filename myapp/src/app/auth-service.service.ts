import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user=[];

  register(payload){ //payload:
    console.log(payload);
    this.user.push({id:payload.id, email:payload.email, name:payload.name, pass:payload.pass})
    console.log(this.user);
  }

  login(payload){ //payload:
    //this.user.push({id:payload.id, email:payload.email, name:payload.name, pass:payload.pass})
    this.user.forEach(element => {
      if(this.user['email'] == payload.email && this.user['pass'] == payload.pass){
        return true;
      }
      else{
        return false;
      }
    });
  }

  constructor() { }
}
