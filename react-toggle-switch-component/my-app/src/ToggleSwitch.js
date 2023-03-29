import { useState } from "react";

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  const text = isClicked ? "ON" : "OFF"

  return (
    <>
      <div className="background" style={{ backgroundColor: isClicked ? "#6aa84f" : "#e2e2e2" }}>
        <button className="circle" onClick={handleClick} style={isClicked ? { right: 0 } : { left: 0 }}></button>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </>
  );
}
