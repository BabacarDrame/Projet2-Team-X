import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 user$:Observable<any> |undefined;
 users:any;
  constructor(private UserServie:UsersService) { }
 
  ngOnInit(): void {
     this.user$=this.UserServie.getUsers();
     // this.users=this.UserServie.getUsers();
     
  }
  //  getUser() {
  //   return this.user$=this.UserServie.getUsers();
  // }

  

}
