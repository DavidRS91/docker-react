import React from 'react'
import data from '../data';
import options from '../data/options';
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'
import Input from './Input'
import forms from '../data/formData'

class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard" style={{
                display: "flex",
                flexWrap: "wrap",
              }}>
                <Input fields={forms.test} />
                <div className="charts" style={{
                display: "flex",
                flexWrap: "wrap",
              }}>
                <BarChart data={data} options={options} />
                <BarChart data={data} options={options} />
                <LineChart data={data} options={options} />
                <BarChart data={data} options={options} />
                <BarChart data={data} options={options} />
                <LineChart data={data} options={options} />
              </div>
              </div>
          
        )
    }
}

export default Dashboard;