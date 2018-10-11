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

import service.ContactService;

/**
 * Servlet implementation class AddContactController
 */
@WebServlet("/AddContact")
public class AddContactController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddContactController() {
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
		HttpSession session = request.getSession();
		if (session.getAttribute("isLoggedIn") == null
				|| session.getAttribute("isLoggedIn").equals("false")) {

			response.sendRedirect("/contact-servlet-app/Authenticate?type=add");

		} else {
			RequestDispatcher view = request
					.getRequestDispatcher("views/addContact.jsp");
			view.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		long number = 0;
		if (!request.getParameter("number").equals("")) {
			try {
				number = Long.parseLong(request.getParameter("number"));
			} catch (NumberFormatException e) {
				out.println("<script type=\"text/javascript\">");
				out.println("alert('Enter a valid number');");
				out.println("location='/contact-servlet-app/AddContact';");
				out.println("</script>");
			}
		}

		if (firstName != null && lastName != null && number != 0
				&& !firstName.equals("") && !lastName.equals("")) {

			ContactService service = ContactService.getInstance();
			service.addContact(firstName, lastName, number);
			response.sendRedirect("/contact-servlet-app/Contacts");
		} else {
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Fill all the details');");
			out.println("location='/contact-servlet-app/AddContact';");
			out.println("</script>");
		}
	}
}
