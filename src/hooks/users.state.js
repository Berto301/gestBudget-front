import { useState } from "react";
import { UsersService } from "../services/";
import { useNotification } from "./index";
import { useHistory } from "react-router-dom";

export function useUser() {
  const [usersConnected, setUsersConnected] = useState({});
  const { showError, showSuccess } = useNotification();
  const history = useHistory();

  const register = async (data) => {
    const response = await UsersService.register(data);
    if (response?.data) {
      const { success, message } = response?.data;
      if (!success) return showError(message);
      showSuccess("Account created");
      //redirect to login
      history.push("/auth/login");
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
        localStorage.setItem("users", users);
        localStorage.setItem("userId", users?._id);
        if (users?.groupId) localStorage.setItem("groupId", users?.groupId);
        if (users?.societyId)
          localStorage.setItem("societyId", users?.societyId);
        history.push("/admin/dashboard");
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
          showSuccess("Updated users successful")
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
  };
}
