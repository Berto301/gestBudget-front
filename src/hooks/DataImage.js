import { useState } from "react";
import {DataImage} from "../services/";
import {useNotification} from '../hooks'
export function useDataImage() {

  const [photo,setDataImage] = useState({})
 const {showError}=useNotification()
const _create = async (data) =>{

    const dataImageCreated =  await DataImage.insert(data)
    if(dataImageCreated?.data){
       const {success,object={}} = dataImageCreated?.data
       if(success){
         setDataImage(object)
       }
    }else{
      showError("Ann error occured while uploading file");
    }

  }

  
  

  return {
    _create,
    photo
  };
}
