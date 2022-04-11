import { useState } from "react";
import {SocietyService} from "../services/";
import { useNotification } from "./index";

export function useSociety() {
  const [societyLists, setSocietyList] = useState([]);
  const [_society,setSociety] = useState({})
  const [closeModal,setCloseModal] = useState(false)
  const { showError, showSuccess } = useNotification();

  const getByGroupId = async (id) => {
    if (id) {
      const response = await SocietyService.getByGroupId(id);
      if (response?.data?.object) {
        setSocietyList(response?.data?.object)
      }
    }
  };

  const _getById =async(id)=>{
     if (id) {
        const response = await SocietyService.getById(id);
        if (response) {
          const { object } = response?.data;
          if (object) {
            setSociety(object);
          }
          //
        } 
      }
    };


const _update = async (data) => {
    if (data?._id) {
      const societyUpdated = await SocietyService.updateById(data)
      if(societyUpdated?.data){
        const {success,message="",object={}} = societyUpdated?.data
        if(!success) return showError(message)
        if(object){
          setSociety(object)
          showSuccess("Society updated successful")
          setCloseModal(true)
        }
      }else{
        showError("Ann error occured while updating society");
      }
    }
  };

  const _delete = async (id)=>{
    if(id){
      const societyDeleted = await SocietyService.deleteById(id)
      if(societyDeleted?.data){
        const {success,message,object={}} = societyDeleted?.data
        if(!success) showError(message)
        if(object){
          showSuccess("Society deleted successFul")
          setCloseModal(true)
        }
      }else{
        showError("Ann error occured while deleting society");
      }
    }
  }
  

  return {
    getByGroupId,
    _update,
    _getById,
    societyLists,
    _society,
    closeModal,
    setCloseModal,
    _delete
  };
}

