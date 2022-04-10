import React from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from 'reactstrap'

const ModalBase =({content,isOpen,toggle,className,onSave,isCreated,title})=>{
  return(
    <Modal isOpen={isOpen} toggle={toggle} className={className} centered={true}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
       {content}
      </ModalBody>
      <ModalFooter className="justify-content-center">
        <Button color="dark" className="mr-2" onClick={toggle}>Cancel</Button>
        <Button color={isCreated ? "primary" : "success" } onClick={onSave}>{isCreated ? "Create" : "Update"} </Button>{' '}
      </ModalFooter>
    </Modal>
    )
}
export default ModalBase