import BaseService from "./base.service";
import http from "./http-common";

class SalesBySocietyServices extends BaseService {
  constructor() {
    super("salesBySociety");
  }

 
getByGroupId(id){
   return http.get(`${this.path}/group/${id}`).catch((err) => {
      console.error("Failed to fetch sales ", err);
      return err;
    });
 }
}

export default new SalesBySocietyServices();
