package controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AuthenticationServlet
 */
@WebServlet("/Authentication")
public class AuthenticationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AuthenticationServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("doGet method");
		response.setContentType("text/html");  
		PrintWriter out = response.getWriter();
		 
		String email= request.getParameter("emailId");
        String password=request.getParameter("password");

        if(email.equals("root") && password.equals("root")){
            out.print("welcome "+email);
            out.println("<a href='views/login.html'>Go back</a>");
        }
        else{
            out.println("Authentication failed \n");
            out.println("<a href='views/login.html'>Retry</a>");
        }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");  
		PrintWriter out = response.getWriter();
		 
		String email= request.getParameter("emailId");
        String password=request.getParameter("password");

        if(email.equals("root") && password.equals("root")){
            out.print("welcome "+email);
            out.println("<a href='views/login.html'>Go back</a>");
        }
        else{
            out.println("Authentication failed \n");
            out.println("<a href='views/login.html'>Retry</a>");
        }
	}

}
