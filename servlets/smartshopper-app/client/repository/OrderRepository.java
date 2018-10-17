package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import model.CartItem;
import model.User;
import model.Order;

public class OrderRepository {
	private final String url = "jdbc:mysql://localhost:3306/swabhav_db";
	private final String id = "root";
	private final String pass = "root";
	Statement stmt = null;
	ResultSet rs = null;
	ResultSet rs2=null;
	Connection conn = null;
	ResultSetMetaData rsmd = null;
	ResultSetMetaData rsmd2=null;

	public void placeOrder(List<CartItem> cart, User user) {
		UUID uuidOrder = UUID.randomUUID();
		String d = java.time.Clock.systemUTC().instant().toString();
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("insert into orders(order_id,user_id,no_of_items,order_date) values (?,?,?,?)");
			ps.setString(1, uuidOrder.toString());
			ps.setString(2, user.getUserId());
			ps.setString(3, String.valueOf(cart.size()));
			ps.setString(4, d);
			ps.executeUpdate();
			// insert in lineitems
			CartItem item;
			for (int i = 0; i < cart.size(); i++) {
				item = cart.get(i);
				UUID uuidLineitem = UUID.randomUUID();
				PreparedStatement ps2 = conn
						.prepareStatement("insert into lineitems(lineItem_id,product_id,order_id,quantity) values (?,?,?,?)");
				ps2.setString(1, uuidLineitem.toString());
				ps2.setString(2, item.getProduct_id());
				ps2.setString(3, uuidOrder.toString());
				ps2.setString(4, String.valueOf(item.getQuantity()));
				ps2.executeUpdate();
			}

			stmt.close();
			conn.close();

		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}
	}

	public List getPreviousOrders(String userId) {
		List orders = new ArrayList<Order>();
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(url, id, pass);
			stmt = conn.createStatement();
			PreparedStatement ps = conn
					.prepareStatement("SELECT * FROM orders where user_id='"
							+ userId+"'");
			rs = ps.executeQuery();
			rsmd = rs.getMetaData();
			while (rs.next()) {
				orders.add(new Order(rs.getString(1), rs.getString(4), Integer
						.parseInt(rs.getString(3))));
			}
			rs.close();
			stmt.close();
			conn.close();
		} catch (Exception ex) {
			System.out.println("SQLException: " + ex.getMessage());
		}
		return getLineItems(orders);
	}

	private List getLineItems(List orders) {
		Order order;
		List totalOrders=new ArrayList();
		for (int i = 0; i < orders.size(); i++) {
			order=(Order) orders.get(i);
			List<CartItem> items=new ArrayList<CartItem>();
			int qty[] = new int[order.getNoOfItems()];
			int j=0;
			try {
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				conn = DriverManager.getConnection(url, id, pass);
				stmt = conn.createStatement();
				PreparedStatement ps2 = conn
						.prepareStatement("SELECT quantity FROM lineitems where order_id='"+order.getOrderId()+"'");
				rs2=ps2.executeQuery();
				rsmd2 = rs2.getMetaData();
				while (rs2.next()) {
					qty[j++]=Integer.parseInt(rs2.getString(1));
				}
				j=0;
				PreparedStatement ps = conn
						.prepareStatement("SELECT * FROM products where product_id in (select product_id from lineitems where order_id='"
								+ order.getOrderId() + "')");
				rs = ps.executeQuery();
				rsmd = rs.getMetaData();
				while (rs.next()) {
					items.add(new CartItem(0, rs.getString(1),
							rs.getString(2),Integer.parseInt(rs.getString(5)),qty[j++]));
				}
				rs2.close();
				rs.close();
				stmt.close();
				conn.close();
			} catch (Exception ex) {
				System.out.println("SQLException: " + ex.getMessage());
			}
			totalOrders.add(items);
		}
		return totalOrders;
	}
}
