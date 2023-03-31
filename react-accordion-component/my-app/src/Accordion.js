import React, { useState } from "react"
import './Accordion.css'

export default function Accordion({ topicsArray }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  function HandleOnClick(index) {
    index === currentIndex ? setCurrentIndex(null) : setCurrentIndex(index);
  }

  return (
    <div className="container">
      <Buttons data={topicsArray} current={currentIndex} onClick={HandleOnClick} />
    </div>
  );
}

function Buttons({ data, current, onClick }) {
  const buttons = data.map((topic, index) => (
    <Button
      key={index}
      text={topic.title}
      onClick={() => onClick(index)}
      isActive={current === index}
      description ={topic.description}
      />
  ));

  return (
    <>
      {buttons}
    </>
  );
}

function Button({ text, onClick, isActive, description }) {
  return (
    <>
      <button className="topic-button" onClick={onClick}>{text}</button>
      {isActive && <p className="topic-description" >{description}</p>}
    </>
  );
}
