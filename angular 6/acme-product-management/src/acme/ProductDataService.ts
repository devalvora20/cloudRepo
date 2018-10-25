import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService{
    allProducts:any;
    constructor(private http: HttpClient) {
    }
    loadProducts(){
        let promise = new Promise((resolve, reject) => {    
            this.http.get("./assets/products.json")
              .toPromise()
              .then(
                res => { 
                  this.allProducts=res;
                  resolve(res);
                }
              );
          });
        return promise;
    }
    getProduct(id){
      for(let i=0;i<this.allProducts.length;i++){
        if(this.allProducts[i].productId==id){
          return this.allProducts[i];
        }
      }
    }
}