import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    //UsersComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    //routingComponents,

    AppRoutingModule,
     UsersModule,
    ProductsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
