import {useState,useEffect} from'react'
import {
  FormGroup,
  Input,
} from "reactstrap";

const InputSystem = ({name,label,passData,type,value:valueProps}) => {
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


  return (
    <FormGroup>
      <label
        className="form-control-label"
        htmlFor={`input-last-${name}`}
      >
        {label}
      </label>
      <Input
        className="form-control-alternative"
        id={`input-last-${name}`}
        placeholder={label}
        type={type}
        name={name}
        //onBlur={onBlur}
        onChange={onChange}
        value={value}
        //onMouseLeave={onBlur}
        autoComplete="new-text"
      />    
    </FormGroup>

  );
};

export default InputSystem;
