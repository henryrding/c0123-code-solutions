import './App.css';
import ToggleButton, {ToggleLamberto} from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleLamberto />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleButton text="COLORIZE ME CAPN!" color="chartreuse" />
        <ToggleButton text="COLORIZE ME CAPN!" color="blueviolet" />
        <ToggleButton text="COLORIZE ME CAPN!" color="crimson" />
      </header>
    </div>
  );
}

export default App;
