import './InfinitySlider.css';
import { motion } from 'framer-motion';
import img1 from '../../assets/Clients/1.png';
import img2 from '../../assets/Clients/2.png';
import img3 from '../../assets/Clients/3.png';
import img4 from '../../assets/Clients/4.png';
import img5 from '../../assets/Clients/5.png';
import img6 from '../../assets/Clients/6.png';
import img7 from '../../assets/Clients/7.png';
import img8 from '../../assets/Clients/8.png';
import img9 from '../../assets/Clients/9.png';
import img10 from '../../assets/Clients/10.png';
import img11 from '../../assets/Clients/11.png';
import img12 from '../../assets/Clients/12.png';
import img13 from '../../assets/Clients/13.png';
import img14 from '../../assets/Clients/14.png';
import img15 from '../../assets/Clients/15.png';
import img16 from '../../assets/Clients/16.png';
import img17 from '../../assets/Clients/17.png';
import img18 from '../../assets/Clients/18.png';
import img19 from '../../assets/Clients/19.png';
import img20 from '../../assets/Clients/20.png';
import img21 from '../../assets/Clients/21.png';
import img22 from '../../assets/Clients/22.png';
import img23 from '../../assets/Clients/23.png';
import img24 from '../../assets/Clients/24.png';
import img25 from '../../assets/Clients/25.png';
import img26 from '../../assets/Clients/26.png';
import img27 from '../../assets/Clients/27.png';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
];

const InfinitySlider = () => {
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="custom-infinity-container">
      <h2 className="infinity-Slider-heading font-medium  text-center">Our Clients</h2>
      <motion.div
        className="custom-infinity-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 40,
        }}
      >
        {repeatedImages.map((img, index) => (
          <div className="custom-infinity-item" key={index}>
            <img
              src={img}
              alt={`Client ${(index % 27) + 1}`}
              className="h-20 w-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfinitySlider;
