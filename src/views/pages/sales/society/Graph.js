import { useState } from "react";

import { Doughnut } from "react-chartjs-2";


const GraphSales = (props) => {
  const dataBySales = {
    labels: ["Real Sales", "Prevision"],
    datasets: [
      {
        data: [400, 600],
        backgroundColor: ["#5e72e4", "#f2f2f2"],
      },
    ],
  };

  

  const options = {
    defaults: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt--3 content-graph">
      <Doughnut
        data={dataBySales}
        options={options}
        getDatasetAtEvent={(e) => console.log(e)}
      />
    </div>
  );
};

export default GraphSales;
