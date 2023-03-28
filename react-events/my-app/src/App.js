import './App.css';
import CustomButton from './CustomButton'

function App() {
  function handleCustomClick(text) {
    window.alert(text)
  }
  return (
    <>
      <CustomButton text="Three" color="red" onCustomClick={handleCustomClick} />
      <CustomButton text="Little" color="orange" onCustomClick={handleCustomClick} />
      <CustomButton text="Pigs" color="chartreuse" onCustomClick={handleCustomClick} />
    </>
  );
}

export default App;
