import React from 'react'
import data from '../data';
import options from '../data/options';
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'
import Input from './Input'
import forms from '../data/formData'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        const state = {};
            for (const field of forms.test) {
                state[field.name] = ""
        }
        state.data = data;
        this.state = state;
    }
    handleSubmit(event) {
        const newData = []
         for (const field of forms.test) {
             newData.push(this.state[field.name])
         }
        const state = this.state
        state.data.datasets[0].data = newData;
        this.setState(state);
        event.preventDefault();
    }

    handleChange(name, value) {
        const state = this.state
        state[name] = value;
        this.setState(state);
    }

    render() {
        return (
            <div className="dashboard" style={{
                display: "flex",
                flexWrap: "wrap",
              }}>
                <Input fields={forms.test} 
                handleSubmit={this.handleSubmit.bind(this)} 
                handleChange={this.handleChange.bind(this)}
                values={this.state} 
                />
                <div className="charts" style={{
                display: "flex",
                flexWrap: "wrap",
              }}>
                <BarChart data={this.state.data} options={options} />
                <BarChart data={this.state.data} options={options} />
                <LineChart data={this.state.data} options={options} />
                <BarChart data={this.state.data} options={options} />
                <BarChart data={this.state.data} options={options} />
                <LineChart data={this.state.data} options={options} />
              </div>
              </div>
          
        )
    }
}

export default Dashboard;