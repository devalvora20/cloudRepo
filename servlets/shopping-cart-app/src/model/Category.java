package model;

public class Category {
	private String category_id;
	private String description;
	private int no_of_products;
	
	

	public Category(String category_id, String description, int no_of_products) {
		this.category_id = category_id;
		this.description = description;
		this.no_of_products = no_of_products;
	}

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getNo_of_products() {
		return no_of_products;
	}

	public void setNo_of_products(int no_of_products) {
		this.no_of_products = no_of_products;
	}

}
