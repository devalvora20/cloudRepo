<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Add Contact</title>
</head>
<body>
	<h1>Add Contact</h1>
	<form action="/contact-database-app/AddContact" method="post">
		First Name    : <input type="text" name="firstName"><br><br>
		Last Name     : <input type="text" name="lastName"><br><br>
		Mobile Number : <input type="text" name="number"><br><br>
		<input type="submit">
	</form>
</body>
</html>