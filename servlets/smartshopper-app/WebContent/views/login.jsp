<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="services.UserService"%>
<%@ page import="services.CartService"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
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
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
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
								CartService service=(CartService)session.getAttribute("cartService");
								if(service!=null)
									out.print(service.getCartCount());
								else
									out.print("0");
								%>
						</label></a>
					</div>


				</li>
				<%
				if(session.getAttribute("isLoggedIn")!=null && (Boolean)session.getAttribute("isLoggedIn"))
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

	<section>

	<form action="/smartshopper-app/login" method="post">


		<div class="form-group">
			<label for="email">Email address</label> <input type="email"
				class="form-control" name="email" placeholder="Email">
		</div>
		<div class="form-group">
			<label for="password">Password</label> <input type="password"
				class="form-control" name="password" placeholder="Password">
		</div>


		<button type="submit" class="btn btn-default">Login</button>
		<%
			String isValid = (String) request.getAttribute("user");
			if (isValid != null && isValid.equals("invalid")) {
				out.println("<div style='color: red'>Invalid credentials</div>");
			}
		%>

	</form>


	</section>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
		integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
		crossorigin="anonymous"></script>
</body>
</html>