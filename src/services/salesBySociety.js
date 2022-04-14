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
 getBySociety(id){
   return http.get(`${this.path}/society/${id}`).catch((err) => {
      console.error("Failed to fetch sales ", err);
      return err;
    });
 }
 deleteMoreSales(data){
   return http.delete(`${this.path}/delete-sales/${data}`).catch((err) => {
      console.error("Failed to delete sales ", err);
      return err;
    });
 }
}

export default new SalesBySocietyServices();
