import {useState} from'react'
import {
  FormGroup,
  Input,
} from "reactstrap";

const DropdownSystem = ({name,label,lists,passData}) => {
  const handleChange = (item)=>{
     passData({[name]:item})
     
    // reduxDispatch({
    //   type:"SELECTED_VALUE",
    //   payload:{name:item}
    // })
  }
  
  return (
    
    <FormGroup >
        <label for="exampleSelect">
           {label}
        </label>
        <Input
          id="exampleSelect"
          name={name}
          type="select"
        >
          {lists?.length ?
              lists?.map((item,index)=>{
                return<option className="text-center" onChange={()=>handleChange(item)}>{item}</option>
              }) :<option className="text-center">No item</option>
          }
        </Input>
    </FormGroup>

  );
};

export default DropdownSystem;
