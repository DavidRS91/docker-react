import Chart from 'chart.js';
import React from 'react';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
      }
    
      componentDidMount() {
        console.log({props: this.props})
        const { data } = this.props
        this.myChart = new Chart(this.chartRef.current, {
            data,
            type: 'bar'
        });
      }
    
      render() {
        return (
          <canvas ref={this.chartRef} />
        );
      }
  }

  export default BarChart;