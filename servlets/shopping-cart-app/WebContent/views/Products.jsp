<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="model.Product"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style>
td {
	padding: 4px;
	text-align: center;
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<table border="1 solid">
		<tr>
			<th>Name</th>
			<th>Description</th>
			<th>Price</th>
		</tr>
		<%
			List products = (List) request.getAttribute("products");
			Product product;
			for (int i = 0; i < products.size(); i++) {
				product = (Product) products.get(i);
				out.print("<tr><td>" + product.getName() + "</td><td>"
						+ product.getDescription() + "</td><td>"
						+ product.getPrice() + "</td></tr>");
			}
		%>
	</table>
	<br>
	<a href="/shopping-cart-app/AddProduct"><button>Add</button></a>
</body>
</html>