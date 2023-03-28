import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('value returned by useState:', isClicked)

  function handleClick() {
    console.log('value before calling setter:', isClicked)
    setIsClicked(!isClicked);
    console.log('value after calling setter:', isClicked)
  }

  return (
    <button onClick={handleClick} style={isClicked ? { backgroundColor: color, fontSize:20, fontWeight: "bold" } : { backgroundColor: "white" }}>
      {text}
    </button>
  );
}

function ToggleLamberto() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <img onClick={handleClick} src="https://media.licdn.com/dms/image/D5603AQHskoJ15lo5Ww/profile-displayphoto-shrink_400_400/0/1678146443075?e=1685577600&v=beta&t=xAfCn2tlCv7VHsJ-aGWfsa1fjKo511pO-5Wlrc3iXT0" className={isClicked ? "App-logo-fast" : "App-logo"} alt="Lamberto" />
  );
}

export { ToggleLamberto };
