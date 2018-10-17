package services;

import java.util.ArrayList;
import java.util.List;

import repository.ProductRepository;
import model.Product;

public class ProductService {
	private static ProductService service;
	private static ProductRepository repository;
	private List<Product> products;
	int id;
	public ProductService(){
		id=1;
		products=new ArrayList<Product>();
		repository=ProductRepository.getInstance();
	}
	
	public static ProductService getInstance(){
		if(service==null)
			service=new ProductService();
		return service;
	}
	
	public List<Product> getProducts(){
		
		return repository.getProducts();
	}
	
	private void addProductObject( String name, String image,
			String description, int price, String category_id){
		products.add(new Product(String.valueOf(id++), name, image, description, price, category_id));		
	}

	public void addProduct(String name, String description, String category_id,
			String price) {
		addProductObject(name, "xx.jpg", description, Integer.parseInt(price), category_id);
//		CategoryService svc=CategoryService.getInstance();
//		svc.addProductToCategory(category_id);
	}
	
	public Product getProduct(String id){
		return repository.getProduct(id);
	}

	public List<Product> getProducts(String search) {
		// TODO Auto-generated method stub
		return repository.getProducts(search);
	}

}
