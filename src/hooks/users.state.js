import { useState } from "react";
import { UsersService } from "../services/";
import { useNotification } from "./index";
import { useHistory } from "react-router-dom";
//import { useDispatch } from "react-redux";

export function useUser() {
  let noAuth = false 
  const [usersConnected, setUsersConnected] = useState({});
  const { showError, showSuccess } = useNotification();
  const [closeModal,setCloseModal] = useState(false)
  const history = useHistory();
  //const reduxDispatch = useDispatch()

  const register = async (data) => {
    if(data?.noAuth){
      noAuth = true
      delete data?.noAuth
    }
    const response = await UsersService.register(data);
    if (response?.data) {
      const { success, message } = response?.data;
      if (!success) return showError(message);
      showSuccess("Account created");
      if(!noAuth){
        return history.push("/auth/login");
      }
      setCloseModal(true)
      //redirect to login
      
    } else {
      showError("An error occured");
    }
  };
  const login = async (dataEmail, dataPassword) => {
    const response = await UsersService.login({
      email: dataEmail.email,
      password: dataPassword?.password,
    });
    if (response?.data) {
      const { success, message, token, users } = response.data;
      if (!success && !users) return showError(message);
      if (token && users?._id) {
        delete users.password;
        // localStorage.setItem("users", users);
        localStorage.setItem("userId", users?._id);
        if (users?.groupId) localStorage.setItem("groupId", users?.groupId);
        if (users?.societyId)
          localStorage.setItem("societyId", users?.societyId);
        history.push("/admin/dashboard");
        // return reduxDispatch({
        //   type:"STANDARD_NOTIFICATION",
        //   payload:null
        // })
      }
    } else {
      showError("Connexion failed");
    }
  };
  const _getById = async (id) => {
    if (id) {
      const response = await UsersService.getById(id);
      if (response) {
        const { users } = response?.data?.object;
        if (users) {
          setUsersConnected(users);
        }
        //
      } else {
        history.push("/auth/login");
      }
    }
  };
  const _update = async (data) => {
    if (data?._id) {
      const {_id,name,firstname,email,phone} = data
      const dataTosave ={
        _id,
        name,
        firstname,
        email,
        phone
      }
      const usersUpdated = await UsersService.updateById(dataTosave)
      if(usersUpdated?.data){
        const {success,message="",object={}} = usersUpdated?.data
        if(!success) showError(message)
        if(object){
          setUsersConnected(object)
          showSuccess("Users updated successful")
          setCloseModal(true)
        }
      }else{
        showError("Ann error occured while updating users");
      }
    }
  };

  return {
    register,
    login,
    _getById,
    _update,
    usersConnected,
    closeModal,
    setCloseModal
  };
}
