package controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.UserService;

/**
 * Servlet implementation class RegisterCtrl
 */
@WebServlet("/register")
public class RegisterCtrl extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterCtrl() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		RequestDispatcher view=request.getRequestDispatcher("views/register.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out=response.getWriter();
		UserService service=UserService.getInstance();
		String firstName=(String) request.getParameter("firstName");
		String lastName=(String) request.getParameter("lastName");
		String email=(String) request.getParameter("email");
		String password=(String) request.getParameter("password");
		System.out.println(firstName+lastName+email+password);
		
		if(validate(firstName,lastName,email,password) ){
			if(service.regiserUser(firstName,lastName,email,password)){
				
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Registration Successfull');");
			out.println("location='/smartshopper-app/login';");
			out.println("</script>");
		}
			else{
				out.println("<script type=\"text/javascript\">");
				out.println("alert('Fill correct details');");
				out.println("location='/smartshopper-app/register';");
				out.println("</script>");
			}
			
		}
		else{
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Fill all details');");
			out.println("location='/smartshopper-app/register';");
			out.println("</script>");
		}
		
	}

	private boolean validate(String firstName, String lastName, String email,
			String password) {
		
		if(firstName==null||lastName==null||email==null||password==null || firstName.equals(""))
			return false;
		else
			return true;
	}

}
