package services;

import java.util.List;

import repository.OrderRepository;
import model.CartItem;
import model.User;

public class OrderService {

	OrderRepository repository;

	public OrderService() {
		repository = new OrderRepository();
	}

	public void placeOrder(List<CartItem> cart, User user) {
		repository.placeOrder(cart,user);
	}

	public List getPreviousOrders(String userId) {
		return repository.getPreviousOrders(userId);
	}

}
