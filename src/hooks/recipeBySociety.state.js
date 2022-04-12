import { useState } from "react";
import {RecipeService} from "../services/";
import { useNotification } from "./index";

export function useRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [closeModal,setCloseModal] = useState(false)
  const { showError, showSuccess } = useNotification();

  const _getById = async (id) => {
    if (id) {
      const response = await RecipeService.getById(id);
      if (response?.data?.object) {
        setRecipe(response?.data?.object)
        //
      } 
    }
  };

  const _getByGroupId = async (id)=>{
     if (id) {
      const response = await RecipeService.getByGroupId(id);
      if (response?.data?.object) {
        setRecipes(response?.data?.object)
        //
      } 
    }
  }

  const _update = async (data) => {
    if(data?._id){
      const recipeCreated =  await RecipeService.updateById(data)
      if(recipeCreated?.data){
         const {success,message="",object={}} = recipeCreated?.data
          if(!success) showError(message)
          if(object){
            setRecipe(object)
            showSuccess("Recipe updated successful")
            setCloseModal(true)
          }
      }else{
        showError("Ann error occured while updating group");
      }
    }
    
  };

  const _create = async (data) =>{

    const recipeCreated =  await RecipeService.insert(data)
    if(recipeCreated?.data){
       const {success,message="",object={}} = recipeCreated?.data
        if(!success) showError(message)
        if(object){
          setRecipe(object)
          showSuccess("Recipe added successful")
          setCloseModal(true)
        }
    }else{
      showError("Ann error occured while updating group");
      setCloseModal(true)
    }

  }

  const _delete = async (id)=>{
     if(id){
      const recipeDeleted = await RecipeService.deleteById(id)
      if(recipeDeleted?.data){
        const {success,message,object={}} = recipeDeleted?.data
        if(!success) showError(message)
        if(object){
          showSuccess("Recipe deleted successFul")
          setCloseModal(true)
        }
      }else{
        showError("Ann error occured while deleting recipe");
      }
    }
  }

  return {
    _getById,
    _update,
    _create,
    _delete,
    _getByGroupId,
    recipes,
    recipe,
    closeModal,
    setCloseModal
  };
}
