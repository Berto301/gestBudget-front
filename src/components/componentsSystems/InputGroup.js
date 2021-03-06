import {useState} from'react'
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form
} from "reactstrap";

const InputGroupSystem = ({name,label,passData,autoComplete,icon,type , onSubmit , required}) => {
  const [value,setValue]=useState("")
  const onChange = (e)=>{
    e.preventDefault()
    const {value} = e.target
    setValue(value)
    passData({[name]:value}) // It's not the best way : rendering page on changing but for the moment we need that
  }
  // const onBlur = (e)=>{
  //   passData({[name]:value})
  // }
  const testError = ()=>{
    return !value && onSubmit && required
  }
  return (
    <Form autoComplete="off">
    <FormGroup >
      <label
        className={` form-control-label ${testError() ? "error_label":""}`}
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
        className={` form-control-alternative ${testError() ? "field_invalid":""}`}
        id={`input-last-${name}`}
        placeholder={label}
        type={type}
        name={name}
        //onBlur={onBlur}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        //invalid={testError()}
       // onMouseLeave={onBlur} // I'd like to passData onMouseLeave but It doesn't work , it's the best way for performing application 
      />  
      </InputGroup> 
    </FormGroup>
    </Form>
  );
};

export default InputGroupSystem;
