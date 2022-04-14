// reactstrap components
import {useState,useEffect} from 'react'
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import {useRecipeBySociety} from '../../../../hooks'
import ModalBase from "../../../../components/Modals/Base";
import DeleteComponent from "../../../../components/Modals/Delete";
// import PrintTable from './Print'
// import { print } from 'react-pdf-print'
import EditTable from './EditTable'

const Items = ({recipes}) => {
  const {
    color,
    count,
    name,
    estimation,
    icon,
    realValue:realValueProps
  } = recipes
  const [openDelete,setOpenDelete] = useState(false)
  const [openPrint,setOpenPrint] =useState(false)
  const [openEdit,setOpenEdit] =useState(false)
  const {_deleteMore,closeModal,setCloseModal} = useRecipeBySociety()
  const calculatePercent = ()=>{
    return ((realValueProps/estimation) * 100).toFixed(2)
  }
  const onDeleteMore = ()=>{
    _deleteMore(recipes?.idRecipes)
  }
  const showModalDelete = ()=>{
    setOpenDelete(!openDelete)
    setCloseModal(false)
  }
  const showModalPrint = ()=>{
    setOpenPrint(!openPrint)
    setCloseModal(false)
  }

  const showModalEdit = ()=>{
    setOpenEdit(!openEdit)
    setCloseModal(false)
  }

  //  const handlePrint = ()=>{
  //   print("print")
  // }
  useEffect(()=>{
    if(closeModal){
      setOpenDelete(false)
    }
  },[closeModal])



  return (
    <>
      <div className="d-flex justify-content-between items_sales">
        <div className="d-flex">
          <div className="icones_sales">
            <div
              className="icon icon-shape text-white rounded-circle shadow"
              style={{ backgroundColor: `${color}` }}
            >
              <i className={icon} />
            </div>
          </div>
          <div className="d-flex flex-column content-tile">
            <div className="sales_title">{name}</div>
            <div className="content_value">{calculatePercent()}% - {count} {count > 1 ? "transactions":"transaction"}</div>
          </div>
        </div>
        <div className="sales_value d-flex">
          <div className="mr-2 mt-2">
            
          {realValueProps}Ar
          </div>
          <div>
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
                  <DropdownItem onClick={showModalEdit}>Edit</DropdownItem>
                  <DropdownItem onClick={showModalDelete}>
                    Delete
                  </DropdownItem>
                  <DropdownItem onClick={showModalPrint}>Download</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </div>
        </div>
      </div>

      <hr className="my-3" />

       {/*<ModalBase
        content={
          <PrintTable
            id="print"
          />
        }
        isOpen={openPrint}
        toggle={showModalPrint}
        onSave={handlePrint}
        type="print"
      />*/}

     <ModalBase
        content={
          <DeleteComponent
            object="this recipe"
            others="If you delete this ,you'll delete all. "
          />
        }
        isOpen={openDelete}
        toggle={showModalDelete}
        onSave={onDeleteMore}
        type="delete"
      />
      <ModalBase
        content={
          <EditTable
            id={recipes?.idRecipes}
          />
        }
        isOpen={openEdit}
        toggle={showModalEdit}
       // onSave={onDeleteMore}
        type="update"
      />
    </>
  );
};

export default Items;
