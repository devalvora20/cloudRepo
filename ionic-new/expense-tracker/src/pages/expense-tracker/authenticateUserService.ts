export class AuthenticateUserService {
    isLoggedIn(): boolean {
        let isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn != null && isLoggedIn == "true")
            return true;
        else
            return false
    }
    authenticateUser(username, password) {
        if (username == "root" && password == "root") {
            localStorage.setItem("isLoggedIn","true");
            return true;
        }
        return false;
    }
    logOut(){
        localStorage.setItem("isLoggedIn","false");
    }
}