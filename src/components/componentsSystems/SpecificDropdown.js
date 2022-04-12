import {useEffect,useState} from 'react'
import {
  FormGroup,
  Input,
} from "reactstrap";
import {
useRecipe,
useSales,
useNotification
} from '../../hooks'

import { socket } from "../../_helpers/socket"; 

const DropdownSystem = ({name,label,passData,value:valueProps ,isRecipe , passEstimation }) => {
  const [value,setValue] = useState("")
  const [objectLists,setObjectsLists] = useState([])
  const {_getByGroupId,recipes , _getById , recipe} = useRecipe()
  const {_getByGroupId:getSalesGroupById , sales , _getById:getById ,sale} = useSales()
  const {showError} = useNotification()

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
  
  const handleChange = async (e)=>{
    /*There is a bug on passing data to his parent :/*/
    const {value} = e.target
    console.log(value)
    if(value){
      if(isRecipe){
        await _getById(value)
        if(recipe){
           passData({
           _idSelected:recipe?._id
         })
         passEstimation(recipe?.estimation)
         setValue(value)
        }
      }else{
        if(sale){
            await getById(value)
         passData({
           _idSelected:sale?._id
         })
         passEstimation(sale?.estimation)
          setValue(value)
        }
      }
      
     // const {estimation , _id} = reci
    }else{
      showError("Please select a value no empty")
    }
     
  }

  

  useEffect(()=>{
    if(recipes?.length)  setObjectsLists(recipes)

    if(sales?.length)  setObjectsLists(sales)
  },[recipes,sales])


  useEffect(()=>{
    if(valueProps){
        if(isRecipe){
            _getById(valueProps)
        }else{
            getById(valueProps)
        }
    }
  },[valueProps,isRecipe])
  const arrangeLists = (data)=>{
    const newLists = [{_id:null , name:"" , estimation : 0}]
    let arrayCombined = []
    if(data?.length) arrayCombined =newLists.concat([...data])
     return arrayCombined
  }
  const objectSelected = sale || recipe || {}
  const newLists = objectLists?.length ? arrangeLists(objectLists) : []
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
          defaultValue={""}
          autoComplete="new-text"
          value={value}
        >
          {newLists?.length ?
              newLists?.map((item,index)=>{
                return<option className="text-center" key={item?._id} value={item?._id} > {item?.name}</option>
              }) :<option className="text-center">No item</option>
          }
        </Input>
    </FormGroup>

  );
};

export default DropdownSystem;
