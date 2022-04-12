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

import { useNotification, useSales} from "../../../../../hooks";
import DeleteComponent from "../../../../../components/Modals/Delete";
const Items = ({ data }) => {
  const {
    name: nameProps,
    description: descriptionProps,
    color: colorProps,
    estimation: estimationProps,
    icon: iconProps,
    _id: idSales,
  } = data;

  const { showError } = useNotification();
  const [isOpenEditSale, setIsOpenEditSale] = useState(false);
  const [isOpenDeleteSale, setIsOpenDeleteSale] = useState(false);


  

  const {
    _update,
    closeModal,
    setCloseModal,
    _delete,
  } = useSales();


  const [dataSale, setDataSale] = useState({
    name: "",
    description: "",
    icon: "",
    color: "",
    estimation:""
  });


  const toggleEditSales = (id) => {
    setIsOpenEditSale(!isOpenEditSale);
    setCloseModal(false);
  };
 

  const toggleDeleteSales = (id) => {
    setIsOpenDeleteSale(!isOpenDeleteSale);
    setCloseModal(false);
  };

  const getSalesData = (updatedAttrs) => {
    setDataSale((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };


  useEffect(() => {
    setDataSale({
      ...data
    });
  }, [data]);

  useEffect(() => {
    if(closeModal){
      setIsOpenEditSale(false)
      setIsOpenDeleteSale(false)
    }
  }, [closeModal]);


   const onUpdateSale = () => {
    const { name, description, icon, color , estimation } = dataSale;

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
      _id: idSales,
      name,
      estimation,
      description,
      color,
      icon
    };

    _update(dataToUpdate);
   };

  const onDeleteRecipe = () => {
    _delete(idSales);
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
              <DropdownItem onClick={toggleEditSales}>
                Edit 
              </DropdownItem>
              <DropdownItem onClick={toggleDeleteSales}>Delete</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>

      <ModalBase
        content={
          <Content
            id={idSales}
            passDataToParent={getSalesData}
          />
        }
        isOpen={isOpenEditSale}
        toggle={toggleEditSales}
        onSave={onUpdateSale}
        type="update"
      />


      <ModalBase
        content={
          <DeleteComponent
            object="this sale"
            others="You can delete only a recipe unused by a compagny. "
          />
        }
        isOpen={isOpenDeleteSale}
        toggle={toggleDeleteSales}
        onSave={onDeleteRecipe}
        type="delete"
      />
    </>
  );
};

export default Items;
