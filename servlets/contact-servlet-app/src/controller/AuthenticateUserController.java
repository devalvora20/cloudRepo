package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import service.AuthenticateService;

/**
 * Servlet implementation class AuthenticateUserController
 */
@WebServlet("/Authenticate")
public class AuthenticateUserController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private int id;
	private String type;
	HttpSession session;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AuthenticateUserController() {
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
		if (request.getParameter("id") != null)
			id = Integer.parseInt(request.getParameter("id"));
		type = request.getParameter("type");
		session = request.getSession();
		RequestDispatcher view = request
				.getRequestDispatcher("views/authenticate.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Boolean isAuthenticated;
		PrintWriter out = response.getWriter();
		AuthenticateService service = new AuthenticateService();
		isAuthenticated = service.authenticateUser(
				request.getParameter("username"), request.getParameter("pass"));
		if (isAuthenticated) {
			session.setAttribute("isLoggedIn", "true");
			if (type.equals("edit")) {
				response.sendRedirect("/contact-servlet-app/EditContact?id="
						+ id);
			} else if(type.equals("delete")){
				response.sendRedirect("/contact-servlet-app/DeleteContact?id="
						+ id);
			}
			else{
				response.sendRedirect("/contact-servlet-app/AddContact");
			}
		} else {
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Incorrect email id or password');");
			out.println("location='/contact-servlet-app/Authenticate?id=" + id
					+ "&type=" + type + "';");
			out.println("</script>");
		}
	}

}
