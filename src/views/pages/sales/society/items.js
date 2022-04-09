// reactstrap components

const Items = () => {
  return (
    <>
      <div className="d-flex justify-content-between items_sales">
        <div className="d-flex">
          <div className="icones_sales">
            <div
              className="icon icon-shape text-white rounded-circle shadow"
              style={{ backgroundColor: "#F74871" }}
            >
              <i className="fas fa-house-user" />
            </div>
          </div>
          <div className="d-flex flex-column content-tile">
            <div className="sales_title">Logement</div>
            <div className="content_value">16% - 46 transactions</div>
          </div>
        </div>
        <div className="sales_value">
          5 596.09 $
        </div>
      </div>

      <hr className="my-3" />
    </>
  );
};

export default Items;
