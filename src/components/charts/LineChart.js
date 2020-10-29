import Chart from 'chart.js';
import React from 'react';

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
      }
    
      componentDidMount() {
        const { data, options } = this.props
        this.myChart = new Chart(this.chartRef.current, {
            data,
            options,
            type: 'line'
        });
      }
    
      render() {
        return (
          <div style={defaultLineChartStyle}>
          <canvas ref={this.chartRef} style={{
            backgroundColor:"white",
          }} />
          </div>
        );
      }
  }

  const defaultLineChartStyle = {
    width: "40vh", 
    margin: "1%",
    padding: "0.5%",
    backgroundColor: 'red'
    }

  export default LineChart;