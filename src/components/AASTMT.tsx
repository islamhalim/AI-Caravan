import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import 20 images AAST01.jpg to AAST20.jpg
import AAST01 from "./imgs/AAST01.jpg";
import AAST02 from "./imgs/AAST02.jpg";
import AAST03 from "./imgs/AAST03.jpg";
import AAST04 from "./imgs/AAST04.jpg";
import AAST05 from "./imgs/AAST05.jpg";
import AAST06 from "./imgs/AAST06.jpg";
import AAST07 from "./imgs/AAST07.jpg";
import AAST08 from "./imgs/AAST08.jpg";
import AAST09 from "./imgs/AAST09.jpg";
import AAST10 from "./imgs/AAST10.jpg";
import AAST11 from "./imgs/AAST11.jpg";
import AAST12 from "./imgs/AAST12.jpg";
import AAST13 from "./imgs/AAST13.jpg";
import AAST14 from "./imgs/AAST14.jpg";
import AAST15 from "./imgs/AAST15.jpg";
import AAST16 from "./imgs/AAST16.jpg";
import AAST17 from "./imgs/AAST17.jpg";
import AAST18 from "./imgs/AAST18.jpg";
import AAST19 from "./imgs/AAST19.jpg";
import AAST20 from "./imgs/AAST20.jpg";

// Add images to array
const images = [
  AAST01, AAST02, AAST03, AAST04, AAST05, AAST06, AAST07, AAST08, AAST09, AAST10,
  AAST11, AAST12, AAST13, AAST14, AAST15, AAST16, AAST17, AAST18, AAST19, AAST20,
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          AAST - 17th July 2025
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
