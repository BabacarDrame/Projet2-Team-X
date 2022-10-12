import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';



@NgModule({
  declarations: [
    UsersComponent
  ],
  exports:[UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  
  ]
})
export class UsersModule { }
