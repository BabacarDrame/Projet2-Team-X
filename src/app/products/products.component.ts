import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:Observable<any>|undefined;
  constructor(private ProductsService:ProductsService) { }
  ngOnInit():void {
     this.product=this.ProductsService.getProducts();
  }
  getProducts(){
    this.ProductsService.getProducts();
  }

}
