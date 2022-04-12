import BaseService from "./base.service";
import http from "./http-common";

class RecipeBySocietyServices extends BaseService {
  constructor() {
    super("recipeBysociety");
  }

 
getByGroupId(id){
   return http.get(`${this.path}/group/${id}`).catch((err) => {
      console.error("Failed to fetch recipes ", err);
      return err;
    });
 }

 getBySociety(id){
   return http.get(`${this.path}/society/${id}`).catch((err) => {
      console.error("Failed to fetch recipes ", err);
      return err;
    });
 }
}

export default new RecipeBySocietyServices();
