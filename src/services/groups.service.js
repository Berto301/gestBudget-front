import BaseService from "./base.service";
import http from "./http-common";
class GroupService extends BaseService {
  constructor() {
    super("groups");
  }

 getStatistics(id){
    return http.get(`${this.path}/statistic/${id}`).catch((err) => {
      console.error("Failed to fetch society statistics ", err);
      return err;
    });
 }

}

export default new GroupService();
