import React from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from 'reactstrap'

const actionsModal = {
  "delete": {
    color: "danger",
    title: "Delete",
  },
  "create": {
    color: "primary",
    title: "Create",
  },
  "update": {
    color: "success",
    title: "Update",
  },
  "print": {
    color: "warning",
    title: "Download",
  },
}
const ModalBase =({content,isOpen,toggle,className,onSave,title,type , modalLg})=>{ 
  const { color,title:titleButton } = actionsModal[type] || {};
  return(
    <Modal isOpen={isOpen} toggle={toggle} className={className} centered={true} size={modalLg ? "lg" :"md"} style={{maxWidth: `${modalLg ? "700px" :"500px"}`, width: '100%'}}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
       {content}
      </ModalBody>
      <ModalFooter className="justify-content-center">
        <Button color="dark" className="mr-2" onClick={toggle}>Cancel</Button>
        <Button color={color} onClick={onSave}>{titleButton} </Button>{' '}
      </ModalFooter>
    </Modal>
    )
}
export default ModalBase