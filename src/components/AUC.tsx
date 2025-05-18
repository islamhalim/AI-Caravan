
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import all images
import u0 from "./imgs/u0.jpg";
import u1 from "./imgs/u1.jpg";
import u2 from "./imgs/u2.jpg";
import u3 from "./imgs/u3.jpg";
import u4 from "./imgs/u4.jpg";
import u5 from "./imgs/u5.jpg";
import u6 from "./imgs/u6.jpg";
import u7 from "./imgs/u7.jpg";
import u8 from "./imgs/u8.jpg";
import u9 from "./imgs/u9.jpg";
import u10 from "./imgs/u10.jpg";
import u11 from "./imgs/u11.jpg";


// Add images to array
const images = [
  u0, u1, u2, u3, u4, u5, u6, u7, u8, u9, u10, u11].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
       <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          AUC - 15th May 2025
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
