<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit Contact</title>
</head>
<body>
<%
String firstName=(String)request.getAttribute("firstName");
String lastName=(String)request.getAttribute("lastName");
long number=(Long)request.getAttribute("number");
%>
<h1>Edit Contact</h1><br>
	<form action="/contact-database-app/EditContact" method="post">
		First Name    : <input type="text" name="firstName" value="<%= firstName %>"><br><br>
		Last Name     : <input type="text" name="lastName" value="<%= lastName %>"><br><br>
		Mobile Number : <input type="text" name="number" value="<%= number %>"><br><br>
		<input type="submit">
	</form>
</body>
</html>