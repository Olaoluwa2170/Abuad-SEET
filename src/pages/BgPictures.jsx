import { useState, useEffect } from "react";
import img2 from '../assets/img/IMG-20230327-WA0000.jpg';
import img1 from '../assets/img/Engineering ext.jpg';
import img3 from '../assets/img/IMG_0371.jpg'
// import img3 from '../assets/img/IMG_0371.JPG';

const images = [img1, img2, img3];

const BgPictures = () => {
  const [BgPicture, setBgPicture] = useState(images[0]);
  const [selectedindex, setselectedindex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setselectedindex((selectedindex + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [selectedindex]);

  useEffect(() => {
    setBgPicture(images[selectedindex]);
  }, [selectedindex]);

  return (
    <img src={BgPicture} alt="where" className='bg-picture' />
  );
};

export default BgPictures;
