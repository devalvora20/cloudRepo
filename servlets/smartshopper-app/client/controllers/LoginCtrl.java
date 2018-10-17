package controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



import model.User;
import services.CartService;
import services.UserService;

/**
 * Servlet implementation class LoginCtrl
 */
@WebServlet("/login")
public class LoginCtrl extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginCtrl() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		RequestDispatcher view=request.getRequestDispatcher("views/login.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String email=(String) request.getParameter("email");
		String password=(String) request.getParameter("password");
		UserService service=new UserService();
		User user=service.authenticateUser(email,password);
		if(user!=null){
			HttpSession session=request.getSession();
			
			CartService cartService=new CartService();
			session.setAttribute("cartService", cartService);
			session.setAttribute("isLoggedIn", true);
			session.setAttribute("user", user);
			session.setAttribute("name", user.getFirstName());
			response.sendRedirect("/smartshopper-app/home");
		}
		else{
			request.setAttribute("user", "invalid");
			RequestDispatcher view=request.getRequestDispatcher("views/login.jsp");
			view.forward(request, response);
		}
	}

}