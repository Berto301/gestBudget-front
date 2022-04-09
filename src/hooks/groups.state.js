import { useState } from "react";
import {GroupsService} from "../services/";
import { useNotification } from "./index";
import { useHistory } from "react-router-dom";

export function useGroup() {
  const [groups, setGroups] = useState({});
  const { showError, showSuccess } = useNotification();
  const history = useHistory();

  const _getById = async (id) => {
    if (id) {
      const response = await GroupsService.getById(id);
      if (response?.data?.object) {
        setGroups(response?.data?.object)
        //
      } else {
        history.push("/auth/login");
      }
    }
  };

  const _update = async (data) => {
    if (data?._id) {
      const {_id,name,activityArea,email,phone} = data
      const dataTosave ={
        _id,
        name,
        activityArea,
        email,
        phone
      }
      const groupsUpdated = await GroupsService.updateById(dataTosave)
      if(groupsUpdated?.data){
        const {success,message="",object={}} = groupsUpdated?.data
        if(!success) showError(message)
        if(object){
          setGroups(object)
          showSuccess("Updated group successful")
        }
      }else{
        showError("Ann error occured while updating group");
      }
    }
  };

  return {
    _getById,
    _update,
    groups,
  };
}
