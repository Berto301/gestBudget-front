import {useState} from'react'
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

const InputGroupSystem = ({name,label,passData,autoComplete,icon}) => {
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
    <FormGroup onMouseLeave={onBlur}>
      <label
        className="form-control-label"
        htmlFor={`input-last-${name}`}
      >
        {label}
      </label>
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={icon} />
          </InputGroupText>
        </InputGroupAddon>
      <Input
        className="form-control-alternative"
        id={`input-last-${name}`}
        placeholder={label}
        type="text"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
      />  
      </InputGroup> 
    </FormGroup>
  );
};

export default InputGroupSystem;
