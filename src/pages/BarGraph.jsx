import React, { useState }  from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import "../App.css";
import Chart from "react-apexcharts";
import Navbar from '../components/Navbar';

function BarGraph() {
    const [state, setState] = useState({
        options: {
          colors: ["#491E63", "#AA9800","#119840","#339340","#691E63", "#FF9800"],
          chart: {
            id: "basic-bar",
          },
        //   xaxis: {
        //     categories: ['Easy','Medium',"Difficult"],
        //   },
        },
        series: [
          {
            name: "Linux-easy",
            data: [60, 70, 95, 50, 49, 40, 70, 91],
          },
          {
            name: "Python-easy",
            data: [30, 80, 89, 70, 20,, 60, 35, 81],
          },
          {
            name: "Linux-Medium",
            data: [30, 40, 85, 50, 49, 60, 70, 91],
          },
          {
            name: "Python-Medium",
            data: [40, 60, 49, 70, 20, 35, 80, 81],
          },
          {
            name: "Linux-Difficult",
            data: [30, 40, 45, 50, 50, 80, 70, 91],
          },
          {
            name: "Python-Difficult",
            data: [30, 60, 65, 35, 49, 90, 50, 81],
          },
        ],
      });
    return (
        <>
          <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
          <div className="App">
          <h1>
              Bar Chart <i class="fas fa-user"></i>{" "}
           </h1>
          <div className="row">
          <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="800"
          />
          </div>
          </div>
          </div>
          
          </Box>
          </Box>    
        </>
    );
}
export default BarGraph;

