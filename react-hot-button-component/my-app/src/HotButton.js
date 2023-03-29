import { useState } from 'react';

export default function HeatButton() {
  const [clickIndex, setClickIndex] = useState(0);

  function handleClick() {
    setClickIndex(clickIndex + 1);
    console.log('clicks:', clickIndex + 1);
  }

const fontColor = clickIndex >= 12 ? "black" : "white";
let buttonColor;

  switch(true) {
    case (clickIndex < 3): buttonColor = "black"; break;
    case (clickIndex < 6): buttonColor = "#351c75"; break;
    case (clickIndex < 9): buttonColor = "#674ea7"; break;
    case (clickIndex < 12): buttonColor = "#e06666"; break;
    case (clickIndex < 15): buttonColor = "#f6b26b"; break;
    case (clickIndex < 18): buttonColor = "yellow"; break;
    default: buttonColor = "white"; break;
  }

  return (
    <button onClick={handleClick} style={{backgroundColor: buttonColor, color: fontColor}}>
      Hot Button
    </button>
  );
}
