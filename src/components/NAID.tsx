import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import all images
import n0 from "./imgs/n0.png";
import n1 from "./imgs/n1.png";
import n2 from "./imgs/n2.png";
import n3 from "./imgs/n3.png";
import n4 from "./imgs/n4.png";
import n5 from "./imgs/n5.png";
import n6 from "./imgs/n6.png";
import n7 from "./imgs/n7.png";
import n8 from "./imgs/n8.png";
import n9 from "./imgs/n9.png";
import n10 from "./imgs/n10.png";


// Add images to array
const images = [
  n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, d10].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
       <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          NAID - 8th May 2025
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
