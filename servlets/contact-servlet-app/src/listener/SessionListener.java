package listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * Application Lifecycle Listener implementation class SessionListener
 *
 */
@WebListener
public class SessionListener implements HttpSessionListener {

	 private static int totalActiveSessions=0;
    /**
     * Default constructor. 
     */
	 
	public int getActiveListeners(){
		return totalActiveSessions;
	}
	 
    public SessionListener() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see HttpSessionListener#sessionCreated(HttpSessionEvent)
     */
    public void sessionCreated(HttpSessionEvent arg0)  { 
         // TODO Auto-generated method stub
    	totalActiveSessions++;
    	System.out.println("sessionCreated, Total active sessions: "+totalActiveSessions);
    }

	/**
     * @see HttpSessionListener#sessionDestroyed(HttpSessionEvent)
     */
    public void sessionDestroyed(HttpSessionEvent arg0)  { 
         // TODO Auto-generated method stub
    	totalActiveSessions--;
    	System.out.println("sessionDestroyed, Total active sessions: "+totalActiveSessions);
    }
	
}
