import { useState } from "react";
import {SalesService} from "../services/";
import { useNotification } from "./index";

export function useSales() {
  const [sales, setSales] = useState([]);
  const [sale, setSale] = useState({});
  const [closeModal,setCloseModal] = useState(false)
  const { showError, showSuccess } = useNotification();

  const _getById = async (id) => {
    if (id) {
      const response = await SalesService.getById(id);
      if (response?.data?.object) {
        setSale(response?.data?.object)
        //
      } 
    }
  };

  const _getByGroupId = async (id)=>{
     if (id) {
      const response = await SalesService.getByGroupId(id);
      if (response?.data?.object) {
        setSales(response?.data?.object)
        //
      } 
    }
  }

  const _update = async (data) => {
    if(data?._id){
      const saleUpdated =  await SalesService.updateById(data)
      if(saleUpdated?.data){
         const {success,message="",object={}} = saleUpdated?.data
          if(!success) showError(message)
          if(object){
            setSale(object)
            showSuccess("Sale updated successful")
            setCloseModal(true)
          }
      }else{
        showError("Ann error occured while updating group");
      }
    }
    
  };

  const _create = async (data) =>{

    const saleCreated =  await SalesService.insert(data)
    if(saleCreated?.data){
       const {success,message="",object={}} = saleCreated?.data
        if(!success) showError(message)
        if(object){
          setSale(object)
          showSuccess("Sale added successful")
          setCloseModal(true)
        }
    }else{
      showError("Ann error occured while updating sale");
      setCloseModal(true)
    }

  }

  const _delete = async (id)=>{
     if(id){
      const saleDeleted = await SalesService.deleteById(id)
      if(saleDeleted?.data){
        const {success,message,object={}} = saleDeleted?.data
        if(!success) showError(message)
        if(object){
          showSuccess("Sale deleted successFul")
          setCloseModal(true)
        }
      }else{
        showError("An error occured while deleting sale");
      }
    }
  }

  return {
    _getById,
    _update,
    _create,
    _delete,
    _getByGroupId,
    sales,
    sale,
    closeModal,
    setCloseModal
  };
}
