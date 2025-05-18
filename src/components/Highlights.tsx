import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import all images
import d0 from "./imgs/d0.png";
import d1 from "./imgs/d1.png";
import d2 from "./imgs/d2.png";
import d3 from "./imgs/d3.png";
import d4 from "./imgs/d4.png";
import d5 from "./imgs/d5.png";
import d6 from "./imgs/d6.png";
import d7 from "./imgs/d7.png";
import d8 from "./imgs/d8.png";
import d9 from "./imgs/d9.png";
import d10 from "./imgs/d10.png";
import d11 from "./imgs/d11.png";
import d12 from "./imgs/d12.png";

// Add images to array
const images = [
  d0, d1, d2, d3, d4, d5, d6, d7, d8, d12, d9, d10, d11,
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
       <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          FDC - 8th May 2025
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
