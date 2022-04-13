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
  return (
    <FormGroup>
      <label for="exampleSelect">{label}</label>
      <Input
        id="exampleSelect"
        name={name}
        type="input"
        autoComplete="new-text"
        onClick={onClick}
        value={value}
      />
      <Fade in={isOpen} className="mt-2">
        <Card className="content_card">
          <CardBody className="no-padding hidden_with_scroll">
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
