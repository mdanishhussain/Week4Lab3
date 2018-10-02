import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from  '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthServiceService]
})
export class RegisterComponent implements OnInit {
  users = {};

  constructor(private helloService: AuthServiceService) { 


  }

  ngOnInit() {
  }

  functionReg(){
    this.helloService.register(this.users);
  }

}
