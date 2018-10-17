<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="model.Category"%>
<%@ page import="service.CategoryService"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.ArrayList"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Add Product</title>
</head>
<%
	CategoryService svc = CategoryService.getInstance();
	List<Category> categories = svc.getCategories();
	Category category = null;
%>
<body>
	<h1>ADD PRODUCT:</h1>
	<form action="/shopping-cart-app/AddProduct" method="post"
		id="addProductForm">
		<table>
		<tr><td>Name:</td><td> <input type="text" name="name"></td></tr> 
		<tr><td>Description:</td><td><textarea rows="4" cols="30" name="description" form="addProductForm"></textarea></td><tr>
		<tr><td>Category:</td><td> <select name="category">
			<%
				for (int i = 0; i < categories.size(); i++) {
						category = categories.get(i);
					out.print("<option value='" + category.getCategory_id() + "'>"
							+ category.getDescription() + "</option>");
				}
			%>
		</select> </td></tr>
		<tr><td>Price: </td><td><input type="text" name="price"></td></tr>
		</table>
		<input type="submit">
	</form>

</body>
</html>