package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;
import java.sql.PreparedStatement;

public class TestConnection2 {

	public static void main(String[] args) {
		Statement stmt = null;
		ResultSet rs = null;
		Connection conn = null;
		ResultSetMetaData rsmd = null;
		String id = "7013fcdc-cbc2-11e8-9060-001a80497498";
		String id1="1";
//		Scanner sc=new Scanner(System.in);
//		System.out.println("Enter a user ID");
//		id=sc.next();
		
		try {
			conn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/swabhav_db", "root", "root");
			stmt = conn.createStatement();
			PreparedStatement ps = conn.prepareStatement("SELECT * FROM products WHERE product_id=?");
			ps.setString(1,id);
			rs=ps.executeQuery();
			rsmd = rs.getMetaData();

			while (rs.next()) {
				for (int i = 1; i <= rsmd.getColumnCount(); i++) {
					System.out.print(rs.getString(i) + " | ");
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
