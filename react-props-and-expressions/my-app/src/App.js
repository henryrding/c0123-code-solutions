import './App.css';

function CustomButtonClass({ text, color }) {
  return (
    <button className={ color }>
      {text}
    </button>
  )
}

function CustomButtonStyle({ text, color}) {
  return (
    <button style={{"background-color": color}}>
      {text}
    </button>
  )
}

function App() {
  return (
    <>
      <div>
        <CustomButtonClass text="I" color="red" />
        <CustomButtonClass text="know" color="green" />
        <CustomButtonClass text="React!" color="blue" />
      </div>
      <br />
      <div>
        <CustomButtonStyle text="I" color="yellow" />
        <CustomButtonStyle text="know" color="chartreuse" />
        <CustomButtonStyle text="React!" color="pink" />
      </div>
    </>
  )
}

export default App;
