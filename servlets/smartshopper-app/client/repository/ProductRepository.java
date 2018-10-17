package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import model.Product;

public class ProductRepository {
	private final String url = "jdbc:mysql://localhost:3306/swabhav_db";
	private final String id = "root";
	private final String pass = "root";
	private static ProductRepository productRepository = null;
	private List<Product> products;
	Statement stmt = null;
	ResultSet rs = null;
	Connection conn = null;
	ResultSetMetaData rsmd = null;

	private ProductRepository() {
		products = new ArrayList<Product>();
	}

	public static ProductRepository getInstance() {
		if (productRepository == null) {
			productRepository = new ProductRepository();
		}
		return productRepository;
	}

	public List<Product> getProducts() {

		products.clear();
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("SELECT * FROM products");
			rs = ps.executeQuery();
			rsmd = rs.getMetaData();
			while (rs.next()) {
				addProductObject(rs.getString(1), rs.getString(2),
						rs.getString(3), rs.getString(4),
						Integer.parseInt(rs.getString(5)), rs.getString(6));
			}
			rs.close();
			stmt.close();
			conn.close();
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}

		return products;
	}

	private void addProductObject(String product_id, String name, String image,
			String description, int price, String category_id) {
		products.add(new Product(product_id, name, image, description, price,
				category_id));
	}

	public Product getProduct(String id) {
		Product product;
		for (int i = 0; i < products.size(); i++) {
			product = products.get(i);
			if (product.getProduct_id().equals(id)) {
				return product;
			}
		}
		return null;
	}

	public List<Product> getProducts(String search) {
		products.clear();
		PreparedStatement ps;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			if (search != null || !search.equals("")) {
				ps = conn
						.prepareStatement("SELECT * FROM products where name like '%"
								+ search + "%'");
			} else {
				ps = conn.prepareStatement("SELECT * FROM products");
			}
			System.out.println("in repository " + search);
			// ps.setString(1, "'" + search + "%'");
			rs = ps.executeQuery();
			rsmd = rs.getMetaData();
			while (rs.next()) {
				addProductObject(rs.getString(1), rs.getString(2),
						rs.getString(3), rs.getString(4),
						Integer.parseInt(rs.getString(5)), rs.getString(6));
			}
			rs.close();
			stmt.close();
			conn.close();
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}

		return products;
	}

}
