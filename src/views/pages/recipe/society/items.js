// reactstrap components

const Items = ({recipes}) => {
  const {
    realValue:realValueProps,
    description:descriptionProps,
    date:dateProps,
    recipeId:{
      color,
      name,
      icon,
      estimation
    }
  } = recipes

  const calculatePercent = ()=>{
    return ((realValueProps/estimation) * 100).toFixed(2)
  }
  return (
    <>
      <div className="d-flex justify-content-between items_sales">
        <div className="d-flex">
          <div className="icones_sales">
            <div
              className="icon icon-shape text-white rounded-circle shadow"
              style={{ backgroundColor: `${color}` }}
            >
              <i className={icon} />
            </div>
          </div>
          <div className="d-flex flex-column content-tile">
            <div className="sales_title">{name}</div>
            <div className="content_value">{calculatePercent()}% - 46 transactions</div>
          </div>
        </div>
        <div className="sales_value">
          {realValueProps}Ar
        </div>
      </div>

      <hr className="my-3" />
    </>
  );
};

export default Items;
