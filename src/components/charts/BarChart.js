import Chart from 'chart.js';
import React from 'react';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
      }
    
      componentDidMount() {
        // dummy request
          fetch("http://localhost:8010/products")
            .then(res => res.json())
            .then(
              (result) => {
               console.log({result});
              },
              (error) => {
                console.log({error});
              }
            )
        
        const { data, options } = this.props
        this.myChart = new Chart(this.chartRef.current, {
            data,
            options,
            type: 'bar'
        });
      }
    
      render() {
        return (
          <div style={defaultBarChartStyle}>
          <canvas ref={this.chartRef} style={{
            backgroundColor:"white",
          }} />
          </div>
        );
      }
  }

  const defaultBarChartStyle = {
    width: "40vh", 
    margin: "1%",
    padding: "0.5%",
    backgroundColor: 'red'
    }

  export default BarChart;