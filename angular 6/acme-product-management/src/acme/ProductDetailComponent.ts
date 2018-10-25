import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './ProductDataService';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'ProductDetailComponent.html'
})
export class ProductDetailComponent implements OnInit{
    id:number;
    product:any;
    constructor(private _productDataService: ProductDataService,private route: ActivatedRoute) { }
    ngOnInit(){
        this.id=+this.route.snapshot.paramMap.get('id');
        this.product=this._productDataService.getProduct(this.id);
    }
}