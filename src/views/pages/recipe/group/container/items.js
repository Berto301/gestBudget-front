/*eslint react-hooks/exhaustive-deps:off*/
import { useState, useEffect } from "react";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import ModalBase from "../../../../../components/Modals/Base";
import Content from "../subComponents/Content";

import { useNotification, useRecipe} from "../../../../../hooks";
import DeleteComponent from "../../../../../components/Modals/Delete";
const Items = ({ data }) => {
  const {
    name: nameProps,
    description: descriptionProps,
    color: colorProps,
    estimation: estimationProps,
    icon: iconProps,
    _id: idRecipe,
  } = data;

  const { showError } = useNotification();
  const [isOpenEditRecipe, setIsOpenEditRecipe] = useState(false);
  const [isOpenDeleteRecipe, setIsOpenDeleteRecipe] = useState(false);


  

  const {
    _update,
    closeModal,
    setCloseModal,
    _delete,
  } = useRecipe();


  const [dataRecipe, setDataRecipe] = useState({
    name: "",
    description: "",
    icon: "",
    color: "",
    estimation:""
  });


  const toggleEditRecipe = (id) => {
    setIsOpenEditRecipe(!isOpenEditRecipe);
    setCloseModal(false);
  };
 

  const toggleDeleteRecipe = (id) => {
    setIsOpenDeleteRecipe(!isOpenDeleteRecipe);
    setCloseModal(false);
  };

  const getRecipeData = (updatedAttrs) => {
    setDataRecipe((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };


  useEffect(() => {
    setDataRecipe({
      ...data
    });
  }, [data]);

  useEffect(() => {
    if(closeModal){
      setIsOpenEditRecipe(false)
      setIsOpenDeleteRecipe(false)
    }
  }, [closeModal]);


   const onUpdateRecipe = () => {
    const { name, description, icon, color , estimation } = dataRecipe;

    const REQUIRED_FIELD = [
      name,
      estimation
    ];

    let isFormValid = REQUIRED_FIELD.every((item) => Boolean(item));

    if (!isFormValid) {
      // error message
      showError("Please complete the required fields");
      return;
    }

    const dataToUpdate = {
      _id: idRecipe,
      name,
      estimation,
      description,
      color,
      icon
    };

    _update(dataToUpdate);
   };

  const onDeleteRecipe = () => {
    _delete(idRecipe);
  };
  return (
    <>
      <tr>
        <th scope="row">
           <div className="icon icon-shape text-white rounded-circle shadow mr-2" style={{backgroundColor:`${colorProps || "#e2e2e2"}`}}>
              <i className={iconProps || "fas fa-chart-bar"} />
            </div>

            {nameProps}
        </th>
        <td>{estimationProps || 0} Ar</td>
        <td className="d-flex">
          <div
            className="align-items-center d-flex"
            style={{ marginTop: "17px" }}
          >
             {descriptionProps || "-"}
          </div>
        </td>
        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              role="button"
              size="sm"
              color=""
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem onClick={toggleEditRecipe}>
                Edit 
              </DropdownItem>
              <DropdownItem onClick={toggleDeleteRecipe}>Delete</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>

      <ModalBase
        content={
          <Content
            id={idRecipe}
            passDataToParent={getRecipeData}
          />
        }
        isOpen={isOpenEditRecipe}
        toggle={toggleEditRecipe}
        onSave={onUpdateRecipe}
        type="update"
      />


      <ModalBase
        content={
          <DeleteComponent
            object="this recipe"
            others="You can delete only a recipe unused by a compagny. "
          />
        }
        isOpen={isOpenDeleteRecipe}
        toggle={toggleDeleteRecipe}
        onSave={onDeleteRecipe}
        type="delete"
      />
    </>
  );
};

export default Items;
