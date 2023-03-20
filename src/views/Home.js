import { useState } from 'react';
import logo from '../assets/images/logo.png';
import ekwateur from '../assets/images/ekwateur.png'
import redbull from '../assets/images/redbull.png'
import orange from '../assets/images/orange.png'
import logitech from '../assets/images/logitech-white.png'
import michelin from '../assets/images/michelin.png'
import chupachups from '../assets/images/chupa-chups.png'

const partenaires = [
  { name: "orange", src: orange, style: { transform: 'scale(0.9)', marginTop: 4 } },
  { name: "logitech", src: logitech, style: { transform: 'scale(0.9)', marginTop: 6 } },
  { name: "ekWater", src: ekwateur },
  { name: "michelin", src: michelin },
  { name: "Redbull", src: redbull },
  { name: "chupa-chups", src: chupachups },
]

const Carousel = () => {
  const [position, setPosition] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - position);
    // stop event propagation to parent elements
    e.stopPropagation();
  };
  const handleMouseMove = (e) => {
    if (isDragging) {
      const slider = e.currentTarget.querySelector('.slider');
      const maxPosition = -(slider.offsetWidth - e.currentTarget.offsetWidth);
      const newPosition = e.pageX - startX;
      setPosition(
        Math.min(0, Math.max(maxPosition, newPosition))
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="slider" style={{ transform: `translateX(${position}px)` }}>
        {partenaires.map((item, i) => (
          <div className="slider-item" key={i}>
            <img src={item.src} alt={item.name} style={item.style ? item.style : null} />
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeView = () => {
  return (
    <div className="home">
      <section className='main'>
        <div className="bg-img"></div>
        <div className="container">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="name">Karmine Corp</div>
          </div>

        </div>
      </section>
      <section className="partenaires bg-light">
        <div className="container">
          {<Carousel />}
        </div>
      </section>
    </div>
  )
}

export default HomeView