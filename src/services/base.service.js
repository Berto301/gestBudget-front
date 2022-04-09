import http from "./http-common";

export default class BaseService {
  constructor(path) {
    this.path = path;
  }

  insert(data) {
    return http.post(`${this.path}/`, data);
  }

  updateById(item) {
    return http.put(`${this.path}/${item._id}`, item);
  }

  deleteById(id, params = {}) {
    return http.delete(`${this.path}/${id}`, { params });
  }
  getById(id){
    return http.get(`${this.path}/${id}`)
  }

}
