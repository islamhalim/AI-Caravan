import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import 10 images TKH00.jpg to TKH09.jpg
import TKH00 from "./imgs/TKH00.jpg";
import TKH01 from "./imgs/TKH01.jpg";
import TKH02 from "./imgs/TKH02.jpg";
import TKH03 from "./imgs/TKH03.jpg";
import TKH04 from "./imgs/TKH04.jpg";
import TKH05 from "./imgs/TKH05.jpg";
import TKH06 from "./imgs/TKH06.jpg";
import TKH07 from "./imgs/TKH07.jpg";
import TKH08 from "./imgs/TKH08.jpg";
import TKH09 from "./imgs/TKH09.jpg";

// Add images to array
const images = [
  TKH00, TKH01, TKH02, TKH03, TKH04,
  TKH05, TKH06, TKH07, TKH08, TKH09,
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          TKH Kickoff - 29th Feb 2025
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
