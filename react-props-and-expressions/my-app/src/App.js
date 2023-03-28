import './App.css';
import {CustomButtonClass, CustomButtonStyle} from './customButton'


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
