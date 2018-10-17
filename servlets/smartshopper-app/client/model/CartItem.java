package model;

public class CartItem {
	private int id, quantity, unitPrice,totalPrice;
	private String name,product_id;
	public String getProduct_id() {
		return product_id;
	}

	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
		totalPrice=this.quantity*this.unitPrice;
	}

	public int getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public int getTotalPrice(){
		return this.totalPrice;
	}

	

	public CartItem(int id, String product_id,String name, int unitPrice, int quantity) {
		this.id = id;
		this.product_id=product_id;
		this.name = name;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
		totalPrice=this.quantity*unitPrice;
	}
}
