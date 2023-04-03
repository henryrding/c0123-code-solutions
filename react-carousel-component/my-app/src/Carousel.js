import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaCircle, FaRegCircle, FaRegWindowClose } from "react-icons/fa";
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { name: currentName, imageURL: currentImage } = images[currentImageIndex];

  function handleClick(index) {
    setCurrentImageIndex(index)
  }

  function handlePrev() {
    setCurrentImageIndex(((currentImageIndex - 1) + images.length) % images.length)
  }

  function handleNext() {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }

  useEffect(() => {
    const timeoutID = setTimeout(handleNext, 3000);
    return () => clearInterval(timeoutID)
  })

  return (
    <>
      <div className="Slideshow">
        <Button icon="FaAngleLeft" onClick={handlePrev} />
        <Image url={currentImage} name={currentName} />
        <Button icon="FaAngleRight" onClick={handleNext} />
      </div>
      <Dots numberOfImages={images.length} currentIndex={currentImageIndex} onClick={handleClick} />
    </>
  )
}

function Button({ icon, onClick }) {
  switch(icon) {
    case 'FaAngleLeft': return (
      <button className="No-style" onClick={onClick}><FaAngleLeft size={70} /></button>
    );
    case 'FaAngleRight': return (
      <button className="No-style" onClick={onClick}><FaAngleRight size={70} /></button>
    );
    case 'FaCircle': return (
      <button className="No-style" onClick={onClick}><FaCircle size={18} /></button>
    );
    case 'FaRegCircle': return (
      <button className="No-style" onClick={onClick}><FaRegCircle size={18} /></button>
    );
    default: return (
      <button className="No-style" onClick={onClick}><FaRegWindowClose /></button>
    )
  }
}

function Image({ url, name }) {
  const imageClasses = name === 'Lamberto' ? 'Carousel-image App-logo' : 'Carousel-image Zoom'

  return (
    <img key={url} src={url} alt={name} className={imageClasses} />
  )
}

function Dots({ numberOfImages, currentIndex, onClick }) {
  const dots = [];
  for (let i = 0; i < numberOfImages; i++) {
    dots.push(
      <Button
        key={i}
        icon={i === currentIndex ? 'FaCircle' : 'FaRegCircle'}
        onClick={() => onClick(i)} />);
  }
  return (
    <div>
      {dots}
    </div>
  );
}
