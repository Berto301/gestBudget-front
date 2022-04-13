import BaseService from "./base.service";
import http from "./http-common";
class SocietyService extends BaseService {
  constructor() {
    super("society");
  }

 getByGroupId(id){
   return http.get(`${this.path}/group/${id}`).catch((err) => {
      console.error("Failed to fetch society ", err);
      return err;
    });
 }
 getStatistics(id){
    return http.get(`${this.path}/statistic/${id}`).catch((err) => {
      console.error("Failed to fetch society statistics ", err);
      return err;
    });
 }

}

export default new SocietyService();
