package controllers;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.CartItem;
import model.User;
import services.CartService;
import services.OrderService;

/**
 * Servlet implementation class PlaceOrderCtrl
 */
@WebServlet("/placeOrder")
public class PlaceOrderCtrl extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PlaceOrderCtrl() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session=request.getSession();
		OrderService orderService=new OrderService();
		CartService cartService=(CartService)session.getAttribute("cartService");
		User user=(User)session.getAttribute("user");
		List<CartItem> cart=cartService.getCart();
		orderService.placeOrder(cart,user);
		System.out.println("order Placed");
		cartService.flushCart();
		response.sendRedirect("/smarthopper-app/cart");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
