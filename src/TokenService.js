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

  setRole(role) {
    sessionStorage.setItem("role", (role));
  }
  getRole() {    
     return sessionStorage.getItem("role");
  }
  removeRole() {
    sessionStorage.removeItem("role");
  }

  setStamp(stamp) {
    sessionStorage.setItem("stamp", (stamp));
  }
  getStamp() {    
     return JSON.parse(JSON.stringify(sessionStorage.getItem("stamp")));
  }
  removeStamp() {
    sessionStorage.removeItem("stamp");
  }

  setCouponId(coupon_id) {
    sessionStorage.setItem("coupon_id", (coupon_id));
  }

  getCouponId() {
    return sessionStorage.getItem("coupon_id");
  }
  removeCouponId() {
    sessionStorage.removeItem("coupon_id");
  }

  setCouponRedeemStatus(coupon_redeem) {
    sessionStorage.setItem("coupon_redeem", (coupon_redeem));
  }

  getCouponRedeemStatus() {
    return sessionStorage.getItem("coupon_redeem");
  }
  removeCouponRedeemStatus() {
    sessionStorage.removeItem("coupon_redeem");
  }

  setLoginTime(time) {
    sessionStorage.setItem("time", (time));
  }
  getLoginTime() {
    return sessionStorage.getItem("time");
  }
  removeLoginTime() {
    sessionStorage.removeItem("time");
  }
}

export default new TokenService();
  