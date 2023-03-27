class TokenService {
    getToken() {
      return sessionStorage.getItem("token");
    }
    setToken(token) {
      sessionStorage.setItem("token", (token));
    }
    removeToken() {
      sessionStorage.removeItem("token");
    }
  }
  export default new TokenService();
  