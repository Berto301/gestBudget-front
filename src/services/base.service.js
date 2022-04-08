import http from "./http-common";

export default class BaseService {
  constructor(path) {
    this.path = path;
  }

  insert(data) {
    return http.post(`${this.path}/create`, data);
  }

  updateById(item) {
    return http.put(`${this.path}/update/${item._id}`, item);
  }

  deleteById(id, params = {}) {
    return http.delete(`${this.path}/delete/${id}`, { params });
  }

}
