import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('value returned by useState:', isClicked)

  function handleClick() {
    console.log('value before calling setter:', isClicked)
    setIsClicked(!isClicked);
    console.log('value after calling setter:', isClicked)
  }

  const buttonStyle = isClicked ? {
    backgroundColor: color,
    fontSize: 20,
    fontWeight: "bold"
  } : {
    backgroundColor: "white" }
  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

function ToggleLamberto() {
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(!isHover);
  }

  return (
    <img onMouseOver={handleHover} onMouseOut={handleHover} src="https://media.licdn.com/dms/image/D5603AQHskoJ15lo5Ww/profile-displayphoto-shrink_400_400/0/1678146443075?e=1685577600&v=beta&t=xAfCn2tlCv7VHsJ-aGWfsa1fjKo511pO-5Wlrc3iXT0" className={isHover ? "App-logo-fast" : "App-logo"} alt="Lamberto" />
  );
}

export { ToggleLamberto };
