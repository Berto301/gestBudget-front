import BaseService from "./base.service";
import http from "./http-common";

class RecipeService extends BaseService {
  constructor() {
    super("recipe");
  }

 
getByGroupId(id){
   return http.get(`${this.path}/group/${id}`).catch((err) => {
      console.error("Failed to fetch recipes ", err);
      return err;
    });
 }
}

export default new RecipeService();
