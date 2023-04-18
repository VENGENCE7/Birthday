import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image1 from "../../Images/index2.jpeg";
import Image2 from "../../Images/index2.jpeg";
import Image3 from "../../Images/index2.jpeg";
import Image4 from "../../Images/index2.jpeg";

const fadeImages = [Image1, Image2, Image3, Image4];

const ImageSlideShow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="bday" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="bday" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="bday" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ImageSlideShow;