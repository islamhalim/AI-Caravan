import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import 20 images cs01.png to cs20.png
import cs01 from "./imgs/cs01.png";
import cs02 from "./imgs/cs02.png";
import cs03 from "./imgs/cs03.png";
import cs04 from "./imgs/cs04.png";
import cs05 from "./imgs/cs05.png";
import cs06 from "./imgs/cs06.png";
import cs07 from "./imgs/cs07.png";
import cs08 from "./imgs/cs08.png";
import cs09 from "./imgs/cs09.png";
import cs10 from "./imgs/cs10.png";
import cs11 from "./imgs/cs11.png";
import cs12 from "./imgs/cs12.png";
import cs13 from "./imgs/cs13.png";
import cs14 from "./imgs/cs14.png";
import cs15 from "./imgs/cs15.png";
import cs16 from "./imgs/cs16.png";
import cs17 from "./imgs/cs17.png";
import cs18 from "./imgs/cs18.png";
import cs19 from "./imgs/cs19.png";
import cs20 from "./imgs/cs20.png";

// Add images to array
const images = [
  cs01, cs02, cs03, cs04, cs05,
  cs06, cs07, cs08, cs09, cs10,
  cs11, cs12, cs13, cs14, cs15,
  cs16, cs17, cs18, cs19, cs20,
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          IEEE Computer Society R8 - 19th June 2025
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <ImageGallery
          items={images}
          autoPlay={true}
          slideInterval={4000}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
        />
      </div>
    </section>
  );
};

export default Highlights;
