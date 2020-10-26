import data from './data';
import './App.css';
import BarChart from './components/charts/BarChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BarChart data={data} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
      </header>
    </div>
  );
}

export default App;
