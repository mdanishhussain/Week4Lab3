import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from  '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthServiceService]
})
export class LoginComponent implements OnInit {
  loginuser = {};
  constructor(private helloService: AuthServiceService) { 
    
  }

  ngOnInit() {
  }

  login(){
    this.helloService.login(this.loginuser);
  }
}
