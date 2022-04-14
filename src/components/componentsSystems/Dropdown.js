import {useEffect,useState} from 'react'
import {
  FormGroup,
  Input,
} from "reactstrap";

const DropdownSystem = ({name,label,lists,passData,value:valueProps, onSubmit ,required }) => {
  const [value,setValue] = useState("")
  const handleChange = (e)=>{
    const {value} = e.target
    setValue(value)
     passData({[name]:value})
    // reduxDispatch({
    //   type:"SELECTED_VALUE",
    //   payload:{name:item}
    // })
  }
  useEffect(()=>{
    if(valueProps){
      setValue(valueProps)
    }
  },[valueProps])
  const testError = ()=>{
    return !value && onSubmit && required
  }
  return (
    
    <FormGroup >
        <label for="exampleSelect" className={testError() ? "error_label":""}>
           {label}
        </label>
        <Input
          id="exampleSelect"
          name={name}
          type="select"
          onChange={handleChange}
          defaultValue={lists?.[0] || ""}
          autoComplete="new-text"
          value={value}
          //invalid={testError()}
          className={testError() ? "field_invalid":""}
        >
          {lists?.length ?
              lists?.map((item,index)=>{
                return<option className="text-center" > {item}</option>
              }) :<option className="text-center">No item</option>
          }

        </Input>
    </FormGroup>

  );
};

export default DropdownSystem;
