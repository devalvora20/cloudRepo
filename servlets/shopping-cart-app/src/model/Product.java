package model;

public class Product {
	public Product(String product_id, String name, String image,
			String description, int price, String category_id) {
		this.product_id = product_id;
		this.name = name;
		this.image = image;
		this.description = description;
		this.price = price;
		this.category_id = category_id;
	}

	private String product_id;
	private String name;
	private String image;
	private String description;
	private int price;
	private String category_id;

	public String getProduct_id() {
		return product_id;
	}

	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}

}
