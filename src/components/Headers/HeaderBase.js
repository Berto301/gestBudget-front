
import {memo,useState,useEffect} from 'react'
// reactstrap components
import {  Container } from "reactstrap";
import ModalBase from '../Modals/Base'

const HeaderBase = ({parentClass,title,content,onSave,closeModal,setCloseModal}) => {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
    setCloseModal(false)
  }
  useEffect(()=>{
    if(closeModal) setIsOpen(false)
  },[closeModal])
  return (
    <>
      <div className={`header bg-gradient-info ${parentClass}`}> 
        <Container fluid>
          <div className="header-body">
            <div className="d-flex justify-content-between w-100">
                <div>
                <h3 className="mb-0">{title}</h3>
                </div>
                <div className="d-flex" onClick={toggle}>
                    <span className="text-dark">
                        <i className="fas fa-plus-circle mr-2"></i>
                        
                    </span>
                    <span className="color_white mb-0">
                    Add
                    </span>
                </div>
            </div>
          </div>
        </Container>
      </div>

      <ModalBase 
        content={content}
        isOpen={isOpen}
        toggle={toggle}
        onSave={onSave}
        isCreated={true}
        title=""
      />
    </>
  );
};

export default memo(HeaderBase);
