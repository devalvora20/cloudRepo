import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './ProductDataService';

@Component({
    templateUrl: 'ProductListComponent.html'
})
export class ProductListComponent implements OnInit {
    allProducts: any;
    products: any;
    showImg: boolean = false;
    imgBtn: String = "Show Image";
    productFilter: String;
    constructor(private _productDataService: ProductDataService) { }
    ngOnInit() {
        let promise = this._productDataService.loadProducts();
        promise.then(
            (response) => {
                this.allProducts = response;
                this.products = this.allProducts
            },
            () => console.log("Error!"),
        );
    }
    imageButton() {
        if (this.showImg) {
            this.imgBtn = "Show Image";
        }
        else {
            this.imgBtn = "Hide Image";
        }
        this.showImg = !this.showImg;
    }

    filter() {
        let count = 0;
        this.products = [];
        for (let i = 0; i < this.allProducts.length; i++) {
            if (this.allProducts[i].productName.toUpperCase().includes(this.productFilter.toUpperCase())) {
                this.products[count++] = this.allProducts[i];
            }
        }
    }
}