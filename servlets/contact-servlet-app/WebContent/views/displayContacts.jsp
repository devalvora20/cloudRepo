<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.List"%>
<%@ page import="model.Contact"%>
<%@ page import="listener.SessionListener"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Contacts</title>
</head>
<body>
	<h1>CONTACTS:</h1>
	<%
		if (session.getAttribute("isLoggedIn")==null || session.getAttribute("isLoggedIn").equals("false")) {
		}
		else{
			out.print("<button onClick='onLogoutClick()'>Logout</button><br><br>");
		}
	%>
	
	<table border="1 solid">
		<tr>
			<th>Name</th>
			<th>Number</th>
			<th>Options</th>
		</tr>
		<%
			List contacts = (List) request.getAttribute("contacts");
			Contact contact;
			for (int i = 0; i < contacts.size(); i++) {
				contact = (Contact) contacts.get(i);
				out.println("<tr><td> "
						+ contact.getFirstName()
						+ " "
						+ contact.getLastName()
						+ "</td><td> "
						+ contact.getNumber()
						+ "</td><td><a href='/contact-servlet-app/EditContact?id="
						+ contact.getId()
						+ "'><button>Edit</button></a><button onClick='onDeleteClick("
						+ contact.getId() + ")'>Delete</button></td></tr>");
			}
		%>
	</table>
	<p>
	Total Active Users: 
	<% SessionListener l=new SessionListener();
		out.print("<b>"+l.getActiveListeners()+"</b>");
	%>
	</p>
	<br>
	<a href="/contact-servlet-app/AddContact"><button>Add</button></a>
	<script type="text/javascript">
		function onDeleteClick(id) {
			if (confirm("Are you sure you want to delte this contact?"))
				window.location.href = "/contact-servlet-app/DeleteContact?id="
						+ id;
		}
		function onLogoutClick() {
			if (confirm("Are you sure you want to Logout?"))
				window.location.href = "/contact-servlet-app/Logout";
		}
	</script>
</body>
</html>