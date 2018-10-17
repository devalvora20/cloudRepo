package controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.CartItem;
import services.CartService;

/**
 * Servlet implementation class CartCtrl
 */
@WebServlet("/cart")
public class CartCtrl extends HttpServlet {
	CartService service;
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CartCtrl() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session=request.getSession();
		service=(CartService)session.getAttribute("cartService");
		List<CartItem> cart = null; 
		if(service!=null)
			cart = service.getCart();
		else
			cart=new ArrayList<CartItem>();
		request.setAttribute("cart", cart);
		RequestDispatcher view = request.getRequestDispatcher("views/cart.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// UserService userService = UserService.getInstance();
		HttpSession session=request.getSession();
		service=(CartService)session.getAttribute("cartService");
		if (session.getAttribute("isLoggedIn") != null
				&& (Boolean) session.getAttribute("isLoggedIn")) {
			String type = request.getParameter("type");
	
			if (type != null && type.equals("delete")) {
				System.out.println("id to del: "
						+ request.getParameter("idToDelete"));
				int id = Integer.parseInt((String) request
						.getParameter("idToDelete"));
				service.removeFromCart(id);
				response.sendRedirect("/smartshopper-app/cart");
			} else {
				PrintWriter out = response.getWriter();
				String product_id = request.getParameter("product_id");
				service.addToCart(product_id);
				response.sendRedirect("/smartshopper-app/home");
				out.println("<script type=\"text/javascript\">");
				out.println("alert('Item added to cart');");
				out.println("</script>");
			}
		} else {
			response.sendRedirect("/smartshopper-app/login");
		}
	}

}
