package services;

import java.util.ArrayList;
import java.util.List;

import model.CartItem;
import model.Product;

public class CartService {
	ProductService productService;
	private static CartService service=null;
	int id;
	List<CartItem> cart;
	public CartService(){
		service=this;
		id=1;
		cart=new ArrayList<CartItem>();
		productService=ProductService.getInstance();
	}
	
	public static CartService getInstance(){
		return service;
	}

	public void addToCart(String product_id) {
		Product product=productService.getProduct(product_id);
		CartItem cartItem;
		for(int i=0;i<cart.size();i++){
			cartItem=cart.get(i);
			if(cartItem.getProduct_id().equals(product_id)){
				cartItem.setQuantity(cartItem.getQuantity()+1);
				return;
			}
		}
		cart.add(new CartItem(id++, product_id, product.getName(), product.getPrice(), 1));
	}
	
	public List<CartItem> getCart(){
		return cart;
	}
	
	public int getCartCount(){
		return cart.size();
	}
	
	public void flushCart(){
		cart.clear();
	}

	public void removeFromCart(int id2) {
		// TODO Auto-generated method stub
		cart.remove(id2);
	}
	
}
