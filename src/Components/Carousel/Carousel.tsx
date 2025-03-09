import "./Carousel.css";
import strawberryImage from "../../Assets/Images/fruit_strawberry.png";
import avocadoImage from "../../Assets/Images/fruit_avocado.png";
import orangeImage from "../../Assets/Images/fruit_orange.png";
import { useEffect, useRef, useState } from "react";

function Carousel(): JSX.Element {
  const [active, setActive] = useState(0);
  const [items, setItems] = useState([
    { image: strawberryImage, name: "strawberry" },
    { image: avocadoImage, name: "avocado" },
    { image: orangeImage, name: "orange" },
  ]);
  const [leftMockup, setLeftMockup] = useState(0);
  const [left_each_item,setLeft_each_item] = useState(100 / (items.length - 1))
  const mockup = useRef<HTMLDivElement>()
  const carousel = useRef<HTMLDivElement>()
  const next = useRef<HTMLButtonElement>()

  useEffect(() => {
    if (mockup.current) {
      mockup.current.style.setProperty('--left', `${leftMockup}%`);
    }
  }, [leftMockup]);

  
  const handleNext = () => {
    setActive(prev => (prev + 1) % items.length);
    setLeftMockup(prev => prev + left_each_item);
carousel.current.classList.remove("right")
  
  };

  const handlePrev = () => {
    setActive(prev => (prev - 1 + items.length) % items.length);
    setLeftMockup(prev => prev - left_each_item);
carousel.current.classList.add("right")
  };


  return (
    <div className="Carousel" ref={carousel}>
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            // ref={el => el && (itemRefs.current[index] = el)} 
            className={`item ${item.name} ${active === index ? "active" : "hidden"}`}
          >
            <div className="content">{item.name}</div>
            <img src={item.image} className="fruit" alt={item.name} />
          </div>
        ))}
      </div>

      <div className="leaves"></div>
      <div className="mockup" ref={mockup}></div>
      <div className="shadow"></div>

      <div className="arrow">
        <button id="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button id="next" ref={next} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
