<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="model.Product"%>
<%@ page import="services.UserService"%>
<%@ page import="services.CartService"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=
     , initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>SmartShopper</title>
<!-- Latest compiled and minified CSS -->
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
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<style>
img {
	max-width: 100%;
}

* {
	transition: all .5s ease;
	-moz-transition: all .5s ease;
	-webkit-transition: all .5s ease
}

.my-list {
	width: 100%;
	padding: 10px;
	border: 1px solid #f5efef;
	float: left;
	margin: 15px 0;
	border-radius: 5px;
	box-shadow: 2px 3px 0px #e4d8d8;
	position: relative;
	overflow: hidden;
}

.my-list h3 {
	text-align: left;
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
	margin-bottom: 5px;
	margin: 0px;
	padding: 0px;
	border-bottom: 1px solid #ccc4c4;
	padding-bottom: 5px;
}

.my-list span {
	float: left;
	font-weight: bold;
}

.my-list span:last-child {
	float: right;
}

.my-list .offer {
	width: 100%;
	float: left;
	margin: 5px 0;
	border-top: 1px solid #ccc4c4;
	margin-top: 5px;
	padding-top: 5px;
	color: #afadad;
}

.detail {
	position: absolute;
	top: -100%;
	left: 0;
	text-align: center;
	background: #fff;
	height: 100%;
	width: 100%;
}

.my-list:hover .detail {
	top: 0;
}
</style>
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
			<form action="/smartshopper-app/home?type=search" class="navbar-form"
				role="search">
				<div class="input-group">
					<!-- ng-model="searchBoxInput" -->
					<input type="text" class="form-control" placeholder="Search"
						name="search" id="srch-term">
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
	<!-- 
	<script src="angular.js"></script>
	<script src="angular-route.js"></script>
	<script src="app.js"></script>
	<script src="controllers/registerCtrl.js"></script>
	<script src="controllers/loginCtrl.js"></script>
	<script src="controllers/logoutCtrl.js"></script>
	<script src="controllers/homeCtrl.js"></script>
	<script src="controllers/cartCtrl.js"></script>
	<script src="services/shoppingCartService.js"></script>
	<script src="services/ProductService.js"></script> -->
	<!-- <h1 ng-if="user" class="jumbotron">Welcome {{user.firstName
		|uppercase}} To SmartShopper</h1>
	<div ng-view></div> -->
	<section> <%
 	if (session.getAttribute("isLoggedIn") != null
 			&& (Boolean) session.getAttribute("isLoggedIn")) {
 		out.println("<h1 class='jumbotron'>Welcome  "
 				+ session.getAttribute("name")
 				+ " To SmartShopper </h1>");
 	}
 %> <article> <!-- ng-repeat="p in products | filter:searchBoxInput" -->
	<div class="row">

		<%
			String picPath = "D:/SmartShopperRepository/smartshopper/server/client/pics/";
			List<Product> products = (List) request.getAttribute("products");

			Product product;
			for (int i = 0; i < products.size(); i++) {
				product = products.get(i);
		%>
		<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
			<div class="my-list" class="box">
				<img src="resources/images/<%=product.getImage()%>"
					style="width: 100%" />
				<h3><%=product.getName()%></h3>
				<span>RS:<%=product.getPrice()%></span> <span class="pull-right"><%=product.getCategoryName()%></span>
				<div class="offer">Extra 5% Off. Cart value Rs 500</div>
				<!-- <a ng-click="addToCart(p)" 
                            class="btn btn-info btn-lg" 
                            class="btn btn-info">Add To Cart</a>  -->
				<div class="detail">
					<p><%=product.getDescription()%></p>
					<img src="resources/images/<%=product.getImage()%>"
						style="width: 100%" />
					<form action="/smartshopper-app/cart" method="post">
						<input type="hidden" name="product_id"
							value="<%=product.getProduct_id()%>"> <input
							type="submit" value="Add to cart" class="btn btn-info"
							>
					</form>
				</div>
			</div>
		</div>
		<%
			}
		%>
		<br />

	</div>

	</article> <!-- Modal -->
	<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Success</h4>
				</div>
				<div class="modal-body">
					<p>Item successfully added to cart !!</p>
				</div>
				<div class="modal-footer">
					<a ng-click="viewCart()" class="btn btn-default"
						data-dismiss="modal">View Cart</a>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>

	</section>

	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
		integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
		crossorigin="anonymous"></script>
</body>
</html>