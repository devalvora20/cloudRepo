/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.53
 * Generated at: 2018-10-17 06:58:42 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.ArrayList;
import java.util.List;
import model.Product;
import model.CartItem;
import services.UserService;
import services.CartService;

public final class cart_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("model.Product");
    _jspx_imports_classes.add("java.util.List");
    _jspx_imports_classes.add("services.CartService");
    _jspx_imports_classes.add("model.CartItem");
    _jspx_imports_classes.add("services.UserService");
    _jspx_imports_classes.add("java.util.ArrayList");
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

final java.lang.String _jspx_method = request.getMethod();
if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
return;
}

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=ISO-8859-1");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">\r\n");
      out.write("<title>Cart</title>\r\n");
      out.write("<link rel=\"stylesheet\"\r\n");
      out.write("\thref=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\r\n");
      out.write("\tintegrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\r\n");
      out.write("\tcrossorigin=\"anonymous\">\r\n");
      out.write("\r\n");
      out.write("<!-- Optional theme -->\r\n");
      out.write("<link rel=\"stylesheet\"\r\n");
      out.write("\thref=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\"\r\n");
      out.write("\tintegrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\"\r\n");
      out.write("\tcrossorigin=\"anonymous\">\r\n");
      out.write("\r\n");
      out.write("<link\r\n");
      out.write("\thref=\"//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\"\r\n");
      out.write("\trel=\"stylesheet\">\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<nav class=\"navbar navbar-default\">\r\n");
      out.write("\t<div class=\"container-fluid\">\r\n");
      out.write("\t\t<!-- Brand and toggle get grouped for better mobile display -->\r\n");
      out.write("\t\t<div class=\"navbar-header\">\r\n");
      out.write("\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\"\r\n");
      out.write("\t\t\t\tdata-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n");
      out.write("\t\t\t\taria-expanded=\"false\">\r\n");
      out.write("\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> <span\r\n");
      out.write("\t\t\t\t\tclass=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span\r\n");
      out.write("\t\t\t\t\tclass=\"icon-bar\"></span>\r\n");
      out.write("\t\t\t</button>\r\n");
      out.write("\t\t\t<a class=\"navbar-brand\" href=\"/smartshopper-app/home\">Smart\r\n");
      out.write("\t\t\t\tShopper</a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t<div class=\"col-sm-3 col-md-3 pull-right\">\r\n");
      out.write("\t\t\t<form class=\"navbar-form\" role=\"search\">\r\n");
      out.write("\t\t\t\t<div class=\"input-group\">\r\n");
      out.write("\t\t\t\t\t<!-- ng-model=\"searchBoxInput\" -->\r\n");
      out.write("\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\"\r\n");
      out.write("\t\t\t\t\t\tname=\"srch-term\" id=\"srch-term\">\r\n");
      out.write("\t\t\t\t\t<div class=\"input-group-btn\">\r\n");
      out.write("\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"submit\">\r\n");
      out.write("\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-search\"></i>\r\n");
      out.write("\t\t\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</form>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- Collect the nav links, forms, and other content for toggling -->\r\n");
      out.write("\t\t<div class=\"collapse navbar-collapse\"\r\n");
      out.write("\t\t\tid=\"bs-example-navbar-collapse-1\">\r\n");
      out.write("\t\t\t<ul class=\"nav navbar-nav\">\r\n");
      out.write("\t\t\t\t<!-- <li>\r\n");
      out.write("                  <a href=\"#/link1\">Link1</a></li>\r\n");
      out.write("              <li><a href=\"#/link2\">Link2</a></li> -->\r\n");
      out.write("\r\n");
      out.write("\t\t\t</ul>\r\n");
      out.write("\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n");
      out.write("\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t<!-- https://bootsnipp.com/snippets/Zlaax -->\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t<div class=\"list-inline\">\r\n");
      out.write("\t\t\t\t\t\t<a href=\"/smartshopper-app/cart\"><i\r\n");
      out.write("\t\t\t\t\t\t\tclass=\"fa fa-2x fa-shopping-cart\"></i> <label id=\"cart-badge\"\r\n");
      out.write("\t\t\t\t\t\t\tclass=\"badge badge-danger\" style=\"background-color: red\">\r\n");
      out.write("\t\t\t\t\t\t\t\t");

								CartService service=(CartService)session.getAttribute("cartService");
								if(service!=null)
									out.print(service.getCartCount());
								else
									out.print("0");
								
      out.write("\r\n");
      out.write("\t\t\t\t\t\t</label></a>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t");

				if(session.getAttribute("isLoggedIn")!=null && (Boolean)session.getAttribute("isLoggedIn"))
						out.print("<li><a href='/smartshopper-app/logout'>logout</a></li>");
					else
						out.print("<li><a href='/smartshopper-app/login'>login</a></li>");
				
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t<!-- ng-show=\"user\"  -->\r\n");
      out.write("\t\t\t\t<!-- ng-hide=\"user\" -->\r\n");
      out.write("\t\t\t\t<li><a href=\"/smartshopper-app/register\">Register</a></li>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</ul>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t</nav>\r\n");
      out.write("\r\n");
      out.write("\t<section> ");

	if(session.getAttribute("isLoggedIn")!=null && (Boolean)session.getAttribute("isLoggedIn")){
 		out.println("<h1 class='jumbotron'>Welcome  "+session.getAttribute("name")+" To SmartShopper </h1>");
 	}
 
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t<h1>Shopping Cart !</h1>\r\n");
      out.write("\t<div>\r\n");
      out.write("\t\t<!-- <a class=\"btn btn-primary\" ng-if=\"user\" ng-click=\"saveCartItems()\">Save</a> -->\r\n");
      out.write("\t\t");
 if(service!=null && service.getCartCount()>0){
			List<CartItem> userCart = (List) request.getAttribute("cart");
			System.out.println(userCart.size());
			out.print("<a class='btn btn-primary' href='/smartshopper-app/placeOrder'>Place Order</a> ");	
		}
		
      out.write("\r\n");
      out.write("\t\t<a class='btn btn-primary' href='/smartshopper-app/ViewOrders'>View Previous Orders</a> <br />\r\n");
      out.write("\t\t\r\n");
      out.write("\t\t<!-- <div>{{order}}</div> -->\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<br />\r\n");
      out.write("\t<br />\r\n");
      out.write("\r\n");
      out.write("\t<table class=\"table\">\r\n");
      out.write("\t\t<thead>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<th scope=\"col\">#</th>\r\n");
      out.write("\t\t\t\t<th scope=\"col\">name</th>\r\n");
      out.write("\t\t\t\t<th scope=\"col\">unit price</th>\r\n");
      out.write("\t\t\t\t<th scope=\"col\">quantity</th>\r\n");
      out.write("\t\t\t\t<th scope=\"col\">Item Total</th>\r\n");
      out.write("\t\t\t\t<th scope=\"col\">Action</th>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t</thead>\r\n");
      out.write("\t\t<tbody>\r\n");
      out.write("\t\t\t");

				CartItem item;
				List<CartItem> cart = (List) request.getAttribute("cart");
				for (int i = 0; i < cart.size(); i++) {
					item = cart.get(i);
			
      out.write("\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<th scope=\"row\">");
      out.print(i + 1);
      out.write("</th>\r\n");
      out.write("\t\t\t\t<td>");
      out.print(item.getName());
      out.write("</td>\r\n");
      out.write("\t\t\t\t<td>");
      out.print(item.getUnitPrice());
      out.write("</td>\r\n");
      out.write("\t\t\t\t<td>");
      out.print(item.getQuantity());
      out.write("</td>\r\n");
      out.write("\t\t\t\t<td>");
      out.print(item.getTotalPrice());
      out.write("</td>\r\n");
      out.write("\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t<form action=\"/smartshopper-app/cart?type=delete\" method=\"post\">\r\n");
      out.write("\t\t\t\t<input type=\"hidden\" name=\"idToDelete\" value=\"");
      out.print(i);
      out.write("\">\r\n");
      out.write("\t\t\t\t<input type=\"submit\" value=\"X\" class=\"btn btn-danger\">\r\n");
      out.write("\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t");

				}
			
      out.write("\r\n");
      out.write("\t\t</tbody>\r\n");
      out.write("\t</table>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t</section>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
