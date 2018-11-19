export default class SmartShopperService{
    api;
    cartItems=[];
    _service=null;
    constructor(){
        this.api="http://localhost:9000/api/smartshopper"
    }
    static getService(){
        if(this._service==null){
            this._service=new SmartShopperService();
        }
        return this._service;
    }
    getProducts(){
        return fetch(this.api+'/products');
    }
    getCartSize(){
        return this.cartItems.length;
    }
    authenticate(user){
        
        return fetch(this.api+'/user/loginCheck', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }
    getOrderHistory(userId){
        return fetch(this.api+'/user/'+userId+'/OrderHistory');
    }
    placeOrder(userId){
        let totalCost=0;        
        let lineItems=[];
        for(let i=0;i<this.cartItems.length;i++){
            let item={"quantity":this.cartItems[i].quantity,
            "itemCost": this.cartItems[i].price,
            "product_id": this.cartItems[i].product_id}
            totalCost+=this.cartItems[i].price*this.cartItems[i].quantity;
            lineItems.push(item);
        }
        let order={
            "user_id": userId,
            "lineItems": lineItems,
            "cost": totalCost
          }
        return fetch(this.api+'/user/'+userId+'/placeOrder', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
    }
    register(user){
        return fetch(this.api+'/user/registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }
    flushCart(){
        this.cartItems.length=0;
    }
    getCartItems(){
        return this.cartItems;
    }
    addToCart(item){
        let alreadyThere=false;
        let i;
        for(i=0;i<this.cartItems.length;i++){
            if(this.cartItems[i].product_id===item.product_id){
                alreadyThere=true;
                break;
            }
        }
        if(alreadyThere){
            this.cartItems[i].quantity++;
        }
        else{
        var cartItem={product_id:item.product_id,name:item.name,quantity:1,price:item.price};
        this.cartItems.push(cartItem);
        }        
    }
    deleteItem(itemToDelete){
        this.cartItems.splice(itemToDelete,1);
    }
}