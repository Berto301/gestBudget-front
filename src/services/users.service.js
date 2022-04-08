import BaseService from "./base.service";
import http from "./http-common";

class UsersService extends BaseService {
  constructor() {
    super("users");
  }

  login({ email, password }) {
    return http.post(`${this.path}/login`, { email, password }).catch((err) => {
      console.error("Failed to login ", err);
      return err;
    });
  }

  register(data) {
    return http.post(`${this.path}/register/`, data);
  }

}

export default new UsersService();
