<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="model.Category"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style>
	td{
		padding:4px;
		text-align: center;
	}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<table border="1 solid">
		<tr>
			<th>Category</th>
			<th>No of products</th>
		</tr>
		<%
			List categories = (List) request.getAttribute("categories");
			Category category;
			for (int i = 0; i < categories.size(); i++) {
				category = (Category) categories.get(i);
				out.print("<tr><td> <a href='/shopping-cart-app/Products?category="+category.getCategory_id()+"'>"+category.getDescription()+"</a></td><td>"+category.getNo_of_products()+"</td></tr>");
			}
		%>
	</table>

</body>
</html>