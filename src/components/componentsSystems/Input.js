import { useState, useEffect } from "react";
import { FormGroup, Input, Form,Label } from "reactstrap";
import { REGEX_IMAGE } from "../../_helpers/_constants";
import { useNotification } from "../../hooks";

const InputSystem = ({
  name,
  label,
  passData,
  type,
  value: valueProps,
  disabled,
  required,
  onSubmit,
  isTypeFile,
  originalName
}) => {
  const { showError } = useNotification();
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    if (isTypeFile) {
      const reader = new FileReader();
      const fileElement = e.target.files[0];
      if (!fileElement?.name?.match(REGEX_IMAGE)) {
        setChecked(false);
        return showError("Please select an object valid");
      }

      //lecture du fichier
      reader.onload = () => {
        if (reader.readyState === 2) {
          setChecked(true);
          setValue(fileElement?.name);
          passData({ [name]: fileElement });
        }
      };
      reader.readAsDataURL(fileElement);
    } else {
      e.preventDefault();
      const { value } = e.target;
      setValue(value);
      passData({ [name]: value });
    }
  };
  useEffect(() => {
    if (valueProps) {
      setValue(valueProps);
    }
  }, [valueProps]);
  useEffect(() => {
    if (originalName) {
      setValue(originalName);
      setChecked(true)
    }
  }, [originalName]);
  // const onBlur = (e)=>{
  //   passData({[name]:value})
  // }
  const testError = () => {
    return !value && onSubmit && required;
  };
  const onSelect = ()=>{
    setValue("")
    setChecked(!checked)
  }
  return (
    <>
      {isTypeFile && checked ? (
        <div className="d-flex flex-column">
          <FormGroup>
          <label
              htmlFor={`input-last-${name}`}
              className="form-control-label"
            >
              File uploaded:
            </label>
            {value}
          </FormGroup>
          
          <FormGroup check>
            <Input type="radio" onChange={onSelect}/>
            <Label check={!checked}>Check it to update photo</Label>
          </FormGroup>
        </div>
      ) : (
        <Form autoComplete="off" encType="multipart/form-data">
          <FormGroup>
            <label
              htmlFor={`input-last-${name}`}
              className={` form-control-label ${
                testError() ? "error_label" : ""
              }`}
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
              className={` form-control-alternative ${
                testError() ? "field_invalid" : ""
              }`}
            />
          </FormGroup>
        </Form>
      )}
    </>
  );
};

export default InputSystem;
