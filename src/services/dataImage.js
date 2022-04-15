import BaseService from "./base.service";
import http from "./http-common";

class DataImage extends BaseService {
  constructor() {
    super("upload");
  }

 
uploadImage(){
   return http.post(`${this.path}/`)

     .then(()=>{
       console.log("image uploaded successFull")
     })
     .catch((err) => {
      console.error("Failed to upload images ", err);
      return err;
    });
 }

 
}

export default new DataImage();
