import {useEffect,useState} from 'react'
import {
  FormGroup,
  Input,
  Fade,
  Card,
  CardBody
} from "reactstrap";

const DropdownSystem = ({name,label,lists,passData,value:valueProps , withIcon , withcolor}) => {
  const [value,setValue] = useState("")
  const [isOpen , setIsOpen] =useState(false)
  
  useEffect(()=>{
    if(valueProps){
      setValue(valueProps)
    }
  },[valueProps])
  const onClick =()=>{
    setIsOpen(!isOpen)
  }
  const onClickItem = (item) =>{
    setValue(item)
    console.log(item)
    passData({[name]:item})
    setIsOpen(!isOpen)
  }
  return (
    
    <FormGroup >
        <label for="exampleSelect">
           {label}
        </label>
        <Input
          id="exampleSelect"
          name={name}
          type="input"
          defaultValue={lists?.[0] || ""}
          autoComplete="new-text"
          onClick={onClick}
          value={value}
          

        />
         <Fade in={isOpen} className="mt-2">
         <Card className="content_card">
          <CardBody>
            {lists?.length ?
              lists?.map((item,index)=>{
                return <div className="d-flex" onClick={()=>onClickItem(item)}> {withIcon && <i className={`mr-2 ${item}`}/>} {withcolor && (<div className="custom_mini_badge mr-2" style={{backgroundColor:`${item}`}}></div>)} {item}</div>
              }) :<div className="text-center">No item</div>
          }
          </CardBody>
         </Card>
            
        </Fade>
       
    </FormGroup>

  );
};

export default DropdownSystem;
