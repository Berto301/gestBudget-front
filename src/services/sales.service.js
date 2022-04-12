import BaseService from "./base.service";
import http from "./http-common";

class SalesServices extends BaseService {
  constructor() {
    super("expense");
  }

 
getByGroupId(id){
   return http.get(`${this.path}/group/${id}`).catch((err) => {
      console.error("Failed to fetch sales ", err);
      return err;
    });
 }
}

export default new SalesServices();
