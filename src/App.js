import data from './data';
import options from './data/options';
import './App.css';
import BarChart from './components/charts/BarChart'
import LineChart from './components/charts/LineChart'

function App() {
  return (
    <div className="App" style={{
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
  );
}

export default App;
