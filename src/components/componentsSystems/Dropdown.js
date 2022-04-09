import {
  FormGroup,
  Input,
} from "reactstrap";

const DropdownSystem = ({name,label,lists,passData}) => {
  const handleChange = (e)=>{
    const {value} = e.target
     passData({[name]:value})
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
          onChange={handleChange}
          defaultValue={lists?.[0] || ""}
        >
          {lists?.length ?
              lists?.map((item,index)=>{
                return<option className="text-center" >{item}</option>
              }) :<option className="text-center">No item</option>
          }
        </Input>
    </FormGroup>

  );
};

export default DropdownSystem;
