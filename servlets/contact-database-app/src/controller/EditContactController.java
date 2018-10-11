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

import model.Contact;
import service.ContactService;

/**
 * Servlet implementation class EditContactController
 */
@WebServlet("/EditContact")
public class EditContactController extends HttpServlet {
	PrintWriter out;
	String oldFirstName;
	String oldLastName;
	long oldNumber;
	int id;
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public EditContactController() {
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
		ContactService service = ContactService.getInstance();
		Contact contact = service.getContact(Integer.parseInt(request
				.getParameter("id")));
		HttpSession session = request.getSession();
		if (session.getAttribute("isLoggedIn") == null
				|| session.getAttribute("isLoggedIn").equals("false")) {

			response.sendRedirect("/contact-database-app/Authenticate?id="+contact.getId()+"&type=edit");

		} else {

			oldFirstName = contact.getFirstName();
			oldLastName = contact.getLastName();
			oldNumber = contact.getNumber();
			id = contact.getId();
			request.setAttribute("firstName", contact.getFirstName());
			request.setAttribute("lastName", contact.getLastName());
			request.setAttribute("number", contact.getNumber());
			RequestDispatcher view = request
					.getRequestDispatcher("views/editContact.jsp");
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

		out = response.getWriter();
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		long number = 0;
		if (!request.getParameter("number").equals("")) {
			try {
				number = Long.parseLong(request.getParameter("number"));
			} catch (NumberFormatException e) {
				showAlert("Enter a valid number");
			}
		}

		if (firstName != null && lastName != null && number != 0
				&& !firstName.equals("") && !lastName.equals("")) {
			if (number != oldNumber || !firstName.equals(oldFirstName)
					|| !lastName.equals(oldLastName)) {
				ContactService service = ContactService.getInstance();
				service.editContact(id, firstName, lastName, number);
				response.sendRedirect("/contact-database-app/Contacts");

			} else {
				showAlert("Contact not updated");
			}
		} else {
			showAlert("No fields can be empty");
		}
	}

	private void showAlert(String msg) {
		out.println("<script type=\"text/javascript\">");
		out.println("alert('" + msg + "');");
		out.println("location='/contact-servlet-app/EditContact?id=" + id
				+ "';");
		out.println("</script>");
	}

}
