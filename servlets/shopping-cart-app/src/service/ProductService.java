package service;

import java.util.ArrayList;
import java.util.List;

import model.Product;

public class ProductService {
	private static ProductService productService;
	private List<Product> products;
	int id;
	private ProductService(){
		id=1;
		products=new ArrayList<Product>();
		addProductObject("iphoneX", "ip.jpg", "This is iphones latest version.", 1000, "1");
		addProductObject("samsung s9", "ip.jpg", "This is samsungs latest version.", 2000, "1");
		addProductObject("one plus 6", "ip.jpg", "This is one plus latest version.", 3000, "1");
		addProductObject("Skybag Vault S3", "ip.jpg", "Built-in headphone cord port. Quick-access, front pocket for frequently needed items.", 300, "2");
		addProductObject("Swiss Gear knought5", "ip.jpg", "Padded, Airflow back panel with mesh fabric for back ventilation and support.", 200, "2");
		addProductObject("High Sierra profound", "ip.jpg", "Ergonomically contoured, padded shoulder straps.", 400, "2");
		addProductObject("Alienware 2.0", "ip.jpg", "Highlights a 13 inch-inch LED-illuminated wide screen having a determination of 2560x1600 pixels", 20000, "3");
		addProductObject("Dell inspiron", "ip.jpg", "8 GB LPDDR3 memory coupled with 512 GB storage to keep you hooked.", 32000, "3");
		addProductObject("Mac Book pro", "ip.jpg", "Geared for exceptional performance with MacBook comes with Touch Bar with integrated Touch ID.", 24000, "3");
	}
	
	public static ProductService getInstance(){
		if(productService==null)
			productService=new ProductService();
		return productService;
	}
	
	public List<Product> getProducts(String id){
		List<Product> prods=new ArrayList<Product>();
		Product prod;
		for(int i=0;i<products.size();i++){
			prod=products.get(i);
			if(prod.getCategory_id().equals(id)){
				prods.add(prod);
			}
		}
		return prods;
	}
	
	private void addProductObject( String name, String image,
			String description, int price, String category_id){
		products.add(new Product(String.valueOf(id++), name, image, description, price, category_id));		
	}

	public void addProduct(String name, String description, String category_id,
			String price) {
		addProductObject(name, "xx.jpg", description, Integer.parseInt(price), category_id);
		CategoryService svc=CategoryService.getInstance();
		svc.addProductToCategory(category_id);
	}
}