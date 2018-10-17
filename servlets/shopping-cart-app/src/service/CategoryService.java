package service;

import java.util.ArrayList;
import java.util.List;



import model.Category;

public class CategoryService {
	private static CategoryService dataService;
	List<Category> categories;
	int id;
	private CategoryService(){
		categories=new ArrayList<Category>();
		id=1;
		addCategoryObject("mobiles",3);
		addCategoryObject("bags",3);
		addCategoryObject("laptops",3);
	}
	
	private void addCategoryObject(String description, int no_of_products) {
		categories.add(new Category(String.valueOf(id++),description,no_of_products));
	}

	public static CategoryService getInstance(){
		if(dataService==null)
			dataService=new CategoryService();
		return dataService;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void addProductToCategory(String category_id) {
		Category category;
		for(int i=0;i<categories.size();i++){
			category=categories.get(i);
			if(category.getCategory_id().equals(category_id)){
				category.setNo_of_products(category.getNo_of_products()+1);
			}
		}
	}
	
}
