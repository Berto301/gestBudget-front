import {useState,useEffect} from'react'
import {
  FormGroup,
  Input,
  Form
} from "reactstrap";

const InputSystem = ({name,label,passData,type,value:valueProps ,disabled , required , onSubmit}) => {
  
  const [value,setValue]=useState("")
  const onChange = (e)=>{
    e.preventDefault()
    const {value} = e.target
    setValue(value)
    passData({[name]:value})
  }
  useEffect(()=>{
    if(valueProps){
      setValue(valueProps)
    }
  },[valueProps])
  // const onBlur = (e)=>{
  //   passData({[name]:value})
  // }
  const testError = ()=>{
    return !value && onSubmit && required
  }
  return (
    <Form autoComplete="off">
    <FormGroup>
      <label
        htmlFor={`input-last-${name}`}
        className={` form-control-label ${testError() ? "error_label":""}`}
      >
        {label}
      </label>
      <Input
        id={`input-last-${name}`}
        placeholder={label}
        type={type}
        name={name}
        //onBlur={onBlur}
        onChange={onChange}
        value={value}
        //onMouseLeave={onBlur}
        readOnly={disabled}
       // invalid={testError()}
        className={` form-control-alternative ${testError() ? "field_invalid":""}`}
      />    
    </FormGroup>
    </Form>
  );
};

export default InputSystem;
