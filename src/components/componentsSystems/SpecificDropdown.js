import {useEffect,useState} from 'react'
import {
  FormGroup,
  Input,
} from "reactstrap";
import {
useRecipe,
useSales
} from '../../hooks'

import { socket } from "../../_helpers/socket"; 

const DropdownSystem = ({name,label,passData,value:valueProps ,isRecipe }) => {
  const [value,setValue] = useState("")
  const {_getByGroupId,recipes , _getById , recipe} = useRecipe()
  const {_getByGroupId:getSalesGroupById , sales , _getById:getById ,sale} = useSales()

  useEffect(()=>{
    didMount()
    socket.on("reload_information", async (groupId) => {
        if (localStorage.getItem("groupId") === groupId) {
          didMount();
        }
      });
  },[])
  const didMount = async ()=>{
    const groupId = localStorage.getItem("groupId");
    if (groupId) {
        if(isRecipe){
            await _getByGroupId(groupId)
        }else{
            await getSalesGroupById(groupId)
        }
    };
  }
  
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
        if(isRecipe){
            _getById(valueProps)
        }else{
            getById(valueProps)
        }
    }
  },[valueProps,isRecipe])
  
  const objectLists = sales || recipes || []
  const objectSelected = sale || recipe || {}
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
          //defaultValue={lists?.[0] || ""}
          autoComplete="new-text"
          value={value}
        >
        
          {objectLists?.length ?
              objectLists?.map((item,index)=>{
                return<option className="text-center" value={item?._id} > {item?.name}</option>
              }) :<option className="text-center">No item</option>
          }
        </Input>
    </FormGroup>

  );
};

export default DropdownSystem;
