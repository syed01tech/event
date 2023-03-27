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

  setStamp(stamp) {
    sessionStorage.setItem("stamp", (stamp));
  }
  getStamp() {    
     return JSON.parse(JSON.stringify(sessionStorage.getItem("stamp")));
  }
  removeToken() {
    sessionStorage.removeItem("stamp");
  }
}

export default new TokenService();
  