export default class ProductDataService {
    product=null;
    getProducts() {
        return fetch('./products.json');
    }
    getProduct(id, callBack) {
        
        fetch('./products.json')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {

                    if (data[i].productId.toString() === id.toString()) {
                        this.product = data[i];
                        break;
                    }
                }
                
                callBack(this.product);
            }
            );

    }
}