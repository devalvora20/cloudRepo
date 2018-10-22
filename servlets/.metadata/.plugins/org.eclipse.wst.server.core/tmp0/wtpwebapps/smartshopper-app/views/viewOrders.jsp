<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="model.Product"%>
<%@ page import="model.CartItem"%>
<%@ page import="services.UserService"%>
<%@ page import="services.CartService"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View Previous Orders</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
	integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
	crossorigin="anonymous">

<link
	href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
	rel="stylesheet">
</head>
<body>
	<nav class="navbar navbar-default">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
				aria-expanded="false">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/smartshopper-app/home">Smart
				Shopper</a>
		</div>

		<div class="col-sm-3 col-md-3 pull-right">
			<form class="navbar-form" role="search">
				<div class="input-group">
					<!-- ng-model="searchBoxInput" -->
					<input type="text" class="form-control" placeholder="Search"
						name="srch-term" id="srch-term">
					<div class="input-group-btn">
						<button class="btn btn-default" type="submit">
							<i class="glyphicon glyphicon-search"></i>
						</button>
					</div>
				</div>
			</form>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse"
			id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<!-- <li>
                  <a href="#/link1">Link1</a></li>
              <li><a href="#/link2">Link2</a></li> -->

			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li>
					<!-- https://bootsnipp.com/snippets/Zlaax -->

					<div class="list-inline">
						<a href="/smartshopper-app/cart"><i
							class="fa fa-2x fa-shopping-cart"></i> <label id="cart-badge"
							class="badge badge-danger" style="background-color: red">
								<%
									CartService service = (CartService) session
																	.getAttribute("cartService");
															if (service != null)
																out.print(service.getCartCount());
															else
																out.print("0");
								%>
						</label></a>
					</div>


				</li>
				<%
					if (session.getAttribute("isLoggedIn") != null
									&& (Boolean) session.getAttribute("isLoggedIn"))
								out.print("<li><a href='/smartshopper-app/logout'>logout</a></li>");
							else
								out.print("<li><a href='/smartshopper-app/login'>login</a></li>");
				%>


				<!-- ng-show="user"  -->
				<!-- ng-hide="user" -->
				<li><a href="/smartshopper-app/register">Register</a></li>

			</ul>


		</div>
	</div>
	</nav>
	<section> <%
 	if (session.getAttribute("isLoggedIn") != null
  			&& (Boolean) session.getAttribute("isLoggedIn")) {
  		out.println("<h1 class='jumbotron'>Welcome  "
  				+ session.getAttribute("name")
  				+ " To SmartShopper </h1>");
  	}
 %> 
 <h1>Order History</h1>
 <table class="table">
	<thead>
		<tr>
			<th scope="col">Order</th>
			<th scope="col">#</th>
			<th scope="col">name</th>
			<th scope="col">unit price</th>
			<th scope="col">quantity</th>
			<th scope="col">Item Total</th>
			
		</tr>
	</thead>
	<tbody>
		<%
			List orders=(List) request.getAttribute("orders");
			if(orders==null){
				out.print("No previous orders");	
			}
			for(int j=0;j<orders.size();j++){
			CartItem item;
			List<CartItem> cart = (List)orders.get(j); 
			for (int i = 0; i < cart.size(); i++) {
				item = cart.get(i);
		%>
		<tr>
			<td><% if(i==0){out.print(j+1);}%></td>
			<td scope="row"><%=i + 1%></td>
			<td><%=item.getName()%></td>
			<td><%=item.getUnitPrice()%></td>
			<td><%=item.getQuantity()%></td>
			<td><%=item.getTotalPrice()%></td>
			
		</tr>
		<%
			}
			if(j+1<orders.size())
			out.print("<tr bgcolor='grey'><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
			}
		%>
	</tbody>
	</table>
</body>
</html>