

// reactstrap components
import {  Container } from "reactstrap";

const HeaderBase = ({parentClass}) => {
  return (
    <>
      <div className={`header bg-gradient-info ${parentClass}`}> 
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            
            <div className="d-flex justify-content-between w-100">
                <div>
                <h3 className="mb-0">Manage society</h3>
                </div>
                <div className="d-flex mr--2">
                    <span className="text-success">
                        <i className="fas fa-plus-circle"></i>
                        
                    </span>
                    <span className="color_white mb-0">
                    Add
                    </span>
                </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderBase;
