package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

public class TestConnection {

	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Statement stmt = null;
		ResultSet rs = null;
		Connection conn=null;
		try {
			conn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/swabhav_db", "root", "root");
			stmt = conn.createStatement();
		    rs = stmt.executeQuery("SELECT * FROM products");
		    ResultSetMetaData rsmd=rs.getMetaData();
		    
		    while(rs.next()){
		    	for(int i=1;i<=rsmd.getColumnCount();i++){
		    		System.out.print(rs.getString(i)+" | ");
		    	}
		    	System.out.println();
		    }
			
		} catch (SQLException ex) {
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		}
	}

}
