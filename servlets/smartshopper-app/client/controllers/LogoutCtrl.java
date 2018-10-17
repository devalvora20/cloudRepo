package controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import services.CartService;
import services.UserService;

/**
 * Servlet implementation class LogoutCtrl
 */
@WebServlet("/logout")
public class LogoutCtrl extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LogoutCtrl() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		UserService service=UserService.getInstance();
		HttpSession session=request.getSession();
		CartService cartService=(CartService)session.getAttribute("cartService");
		cartService.flushCart();
		session.setAttribute("isLoggedIn", false);
		session.setAttribute("name", "");
		session.setAttribute("user", "");
		service.setIsLoggedIn(false);
		response.sendRedirect("/smartshopper-app/home");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
