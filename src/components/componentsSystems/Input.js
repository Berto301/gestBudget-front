import {useState} from'react'
import {
  FormGroup,
  Input,
} from "reactstrap";

const InputSystem = ({name,label,passData,type}) => {
  const [value,setValue]=useState("")
  const onChange = (e)=>{
    e.preventDefault()
    const {value} = e.target
    setValue(value)
  }
  const onBlur = (e)=>{
    passData({[name]:value})
  }
  return (
    <FormGroup  onMouseLeave={onBlur}>
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
        onBlur={onBlur}
        onChange={onChange}
        value={value}

      />    
    </FormGroup>

  );
};

export default InputSystem;
