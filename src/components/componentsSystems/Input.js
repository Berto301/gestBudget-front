import {useState,useEffect} from'react'
import {
  FormGroup,
  Input,
  Form
} from "reactstrap";
import {REGEX_IMAGE} from '../../_helpers/_constants'
import {useNotification} from '../../hooks'

const InputSystem = ({name,label,passData,type,value:valueProps ,disabled , required , onSubmit , isTypeFile}) => {
  const {showError} =useNotification()
  const [value,setValue]=useState("")
  const onChange = (e)=>{
    if(isTypeFile){
        const reader = new FileReader();
        const fileElement = e.target.files[0]
        if (!fileElement?.name?.match(REGEX_IMAGE)) {
            showError("Please select an object valid");
        }
        

        //lecture du fichier
        reader.onload = () => {
          if (reader.readyState === 2) {
            console.log(fileElement?.name)
            //setValue(fileElement?.name)
            passData({profileImg:fileElement})
          }
        };
        reader.readAsDataURL(fileElement);
      }else{
        e.preventDefault()
        const {value} = e.target
        setValue(value)
        passData({[name]:value})
      }
    
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
    <Form autoComplete="off" encType="multipart/form-data">
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
