package model;

public class Order {
	private String orderId, date;
	private int noOfItems;

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getNoOfItems() {
		return noOfItems;
	}

	public void setNoOfItems(int noOfItems) {
		this.noOfItems = noOfItems;
	}

	public Order(String orderId, String date, int noOfItems) {
		super();
		this.orderId = orderId;
		this.date = date;
		this.noOfItems = noOfItems;
	}

}
