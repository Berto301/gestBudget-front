/*eslint react-hooks/exhaustive-deps:off*/
import { useEffect, useState } from "react";
import { FormGroup, Input, Fade, Card, CardBody } from "reactstrap";
import { useRecipe, useSales } from "../../hooks";

import { socket } from "../../_helpers/socket";

const DropdownSystem = ({
  name,
  label,
  passData,
  value: valueProps,
  isRecipe,
  passEstimation,
  onSubmit , 
  required
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [objectLists, setObjectsLists] = useState([]);
  const { _getByGroupId, recipes, _getById } = useRecipe();
  const {
    _getByGroupId: getSalesGroupById,
    sales,
    _getById: getById,
  } = useSales();

  useEffect(() => {
    didMount();
    socket.on("reload_information", async (groupId) => {
      if (localStorage.getItem("groupId") === groupId) {
        didMount();
      }
    });
  }, []);
  const didMount = async () => {
    const groupId = localStorage.getItem("groupId");
    if (groupId) {
      if (isRecipe) {
        await _getByGroupId(groupId);
      } else {
        await getSalesGroupById(groupId);
      }
    }
  };

  useEffect(() => {
    if (recipes?.length) setObjectsLists(recipes);

    if (sales?.length) setObjectsLists(sales);
  }, [recipes, sales]);

  useEffect(() => {
    if (valueProps) {
      if (isRecipe) {
        _getById(valueProps);
      } else {
        getById(valueProps);
      }
    }
  }, [valueProps, isRecipe]);
 
  //const objectSelected = sale || recipe || {};
  
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  const onClickItem = (item) => {
    setValue(item?.name);
    passEstimation(item?.estimation);
    passData({
      _idSelected: item?._id,
    });
    setIsOpen(!isOpen);
  };
  const testError = ()=>{
    return !value && onSubmit && required
  }
  return (
    <FormGroup>
      <label for="exampleSelect" className={` position-relative ${testError() ? "error_label":""}`} >{label}</label>
      <Input
        id="exampleSelect"
        name={name}
        type="input"
        autoComplete="new-text"
        onClick={onClick}
        value={value}
        //invalid={testError()}
        className={testError() ? "field_invalid":""}
      />
      <Fade in={isOpen} className="mt-2 position-absolute w-100">
        <Card className="content_card fade_content ">
          <CardBody className="no-padding hidden_with_scroll ">
            {objectLists?.length ? (
              objectLists?.map((item, index) => {
                return (
                  <div
                    key={item?._id}
                    className="d-flex list position-relative"
                    onClick={() => onClickItem(item)}
                  >
                    <div className="content_custom_radio">
                      <label
                        className={`custom_radio ${
                          value === item?.name ? "active" : ""
                        }`}
                      ></label>
                      {item?.name}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center">No item</div>
            )}
          </CardBody>
        </Card>
      </Fade>
    </FormGroup>
  );
};

export default DropdownSystem;
