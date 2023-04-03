import { useState, useEffect, useCallback } from "react";
import { FaAngleLeft, FaAngleRight, FaCircle, FaRegCircle } from "react-icons/fa";
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { name: currentName, imageURL: currentImage } = images[currentImageIndex];

  const handleClick = index => setCurrentImageIndex(index)
  const handlePrev = () => setCurrentImageIndex(((currentImageIndex - 1) + images.length) % images.length)
  const handleNext = useCallback(() => setCurrentImageIndex((currentImageIndex + 1) % images.length), [currentImageIndex, images])

  useEffect(() => {
    const timeoutID = setTimeout(handleNext, 3000);
    return () => clearInterval(timeoutID)
  },[handleNext])

  return (
    <>
      <div className="Slideshow">
        <Button onClick={handlePrev}><FaAngleLeft size={70} /></Button>
        <Image url={currentImage} name={currentName} />
        <Button onClick={handleNext}><FaAngleRight size={70} /></Button>
      </div>
      <Dots numberOfImages={images.length} currentIndex={currentImageIndex} onClick={handleClick} />
    </>
  )
}

function Button({ onClick, children }) {
  return (
    <button className="No-style" onClick={onClick}>{children}</button>
  );
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
        onClick={() => onClick(i)}>{i === currentIndex ? <FaCircle size={18} /> : <FaRegCircle size={18} />}</Button>);
  }
  return (
    <div>
      {dots}
    </div>
  );
}
