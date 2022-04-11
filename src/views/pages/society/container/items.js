/*eslint react-hooks/exhaustive-deps:off*/
import { useState, useEffect } from "react";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
} from "reactstrap";
import ModalBase from "../../../../components/Modals/Base";
import User from "../subComponents/User";
import Society from "../subComponents/Society";

import { useNotification, useUser, useSociety } from "../../../../hooks";
import DeleteComponent from "../../../../components/Modals/Delete";
const Items = ({ data }) => {
  const {
    turnover: turnOverProps,
    name: nameSocietyProps,
    type: typeProps,
    adminId: adminIdProps,
    lawerForm: lawerFormProps,
    bank: bankProps,
    _id: idSociety,
  } = data;
  const { showError } = useNotification();
  const [isOpenEditUser, setIsOpenEditUser] = useState(false);
  const [isOpenEditSociety, setIsOpenEditSociety] = useState(false);
  const [isOpenDeleteSociety, setIsOpenDeleteSociety] = useState(false);
  const { _update, closeModal, setCloseModal } = useUser();

  const {
    _update: updateSociety,
    closeModal: closeModalSociety,
    setCloseModal: setCloseModalSociety,
    _delete,
  } = useSociety();

  const [dataUser, setDataUser] = useState({
    name: "",
    firstname: "",
    email: "",
    phone: "",
  });

  const [dataSociety, setDataSociety] = useState({
    nameSociety: "",
    type: "",
    phoneSociety: "",
    emailSociety: "",
    creationDate: "",
    lawerForm: "",
    managementStyle: "",
    accountBank: "",
    bank: "",
    immatriculation: "",
    structure: "",
    turnover: "",
    adminId: null,
    groupId: null,
  });

  const toggleEditUser = (id) => {
    setIsOpenEditUser(!isOpenEditUser);
    setCloseModal(false);
    setCloseModalSociety(false);
  };
  const toggleEditSociety = (id) => {
    setIsOpenEditSociety(!isOpenEditSociety);
    setCloseModal(false);
    setCloseModalSociety(false);
  };

  const toggleDeleteSociety = (id) => {
    setIsOpenDeleteSociety(!isOpenDeleteSociety);
    setCloseModal(false);
    setCloseModalSociety(false);
  };

  const getUserData = (updatedAttrs) => {
    setDataUser((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };

  const getSocietyData = (updatedAttrs) => {
    setDataSociety((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };

  useEffect(() => {
    setDataSociety({
      ...data,
      adminId: adminIdProps?._id,
      nameSociety: nameSocietyProps,
      emailSociety: data?.email,
      phoneSociety: data?.phone,
    });
  }, []);
  useEffect(() => {
    setDataUser({
      ...adminIdProps, //Information admin copy
    });
  }, [adminIdProps]);

  useEffect(() => {
    if (closeModal || closeModalSociety) {
      setIsOpenEditUser(false);
      setIsOpenEditSociety(false);
      setIsOpenDeleteSociety(false);
    }
  }, [closeModal, closeModalSociety]);

  const {
    name: nameUser,
    firstname: firstnameUSer,
    _id: idUser,
  } = adminIdProps;

  const onUpdateSociety = () => {
    const {
      nameSociety,
      type,
      phoneSociety,
      emailSociety,
      creationDate,
      lawerForm,
      managementStyle,
      accountBank,
      bank,
      immatriculation,
      structure,
      turnover,
    } = dataSociety;

    if (!nameSociety || !turnover || !immatriculation) {
      return showError("Please, complete all required fields");
    }

    const dataToUpdate = {
      _id: idSociety,
      name: nameSociety,
      type,
      phone: phoneSociety,
      email: emailSociety,
      creationDate: creationDate || null,
      lawerForm,
      managementStyle,
      accountBank,
      bank,
      immatriculation,
      structure,
      turnover,
      adminId: idUser,
      groupId: localStorage.getItem("groupId"),
    };

    updateSociety(dataToUpdate);
  };

  const onUpdateUser = () => {
    const { name, firstname, email, phone } = dataUser;

    if (!name || !firstname || !email) {
      return showError("Please, complete all required fields");
    }

    const dataToUpdate = {
      _id: idUser,
      name,
      firstname,
      email,
      phone,
    };

    _update(dataToUpdate);
  };

  const onDeleteSociety = () => {
    _delete(idSociety);
  };
  return (
    <>
      <tr>
        <th scope="row">
          <Media className="align-items-center">
            <div className="avatar rounded-circle mr-3 avatar_society">
              <img
                alt="..."
                src={
                  require("../../../../assets/img/others/society.png").default
                }
              />
            </div>
            <Media>
              <span className="mb-0 text-sm">{nameSocietyProps}</span>
            </Media>
          </Media>
        </th>
        <td>{turnOverProps} Ar</td>
        <td className="d-flex">
          <div
            className="align-items-center d-flex"
            style={{ marginTop: "17px" }}
          >
            <div className="avatar-group">
              <div
                className="avatar avatar-sm avatar_society"
                id="tooltip996637554"
                onClick={(e) => e.preventDefault()}
              >
                <img
                  alt="..."
                  className="rounded-circle mr-2"
                  src={
                    require("../../../../assets/img/others/profile.jpg").default
                  }
                />
              </div>
              <UncontrolledTooltip delay={0} target="tooltip996637554">
                {nameUser + " " + firstnameUSer}
              </UncontrolledTooltip>
            </div>

            <div className="d-flex align-items-center">
              <span className="mr-2">{nameUser + " " + firstnameUSer}</span>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex flex-column">
            <div className="mb-1">
              <i className="fas fa-chart-pie mr-2 text-dark" />
              {typeProps}
            </div>
            <div className="mb-1">
              <i className="far fa-building mr-3 text-primary" />
              {bankProps}
            </div>
            <div className="mb-1">
              <i className="fas fa-balance-scale mr-2 text-danger" />
              {lawerFormProps}
            </div>
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
              <DropdownItem onClick={toggleEditUser}>Edit Admin</DropdownItem>
              <DropdownItem onClick={toggleEditSociety}>
                Edit Society
              </DropdownItem>
              <DropdownItem onClick={toggleDeleteSociety}>Delete</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>

      <ModalBase
        content={
          <User
            id={idUser}
            passDataToParent={getUserData}
            hidePassword={true}
          />
        }
        isOpen={isOpenEditUser}
        toggle={toggleEditUser}
        onSave={onUpdateUser}
        type="update"
      />

      <ModalBase
        content={<Society id={idSociety} passDataToParent={getSocietyData} />}
        isOpen={isOpenEditSociety}
        toggle={toggleEditSociety}
        onSave={onUpdateSociety}
        type="update"
      />

      <ModalBase
        content={
          <DeleteComponent
            object="this society"
            others="If you delete this, you'll delete all relative informations about it. "
          />
        }
        isOpen={isOpenDeleteSociety}
        toggle={toggleDeleteSociety}
        onSave={onDeleteSociety}
        type="delete"
      />
    </>
  );
};

export default Items;
