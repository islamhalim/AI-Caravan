
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import all images
import g1 from "./imgs/g1.jpg";
import g2 from "./imgs/g2.jpg";
import g3 from "./imgs/g3.jpg";
import g4 from "./imgs/g4.jpg";
import g5 from "./imgs/g5.jpg";
import g6 from "./imgs/g6.jpg";
import g7 from "./imgs/g7.jpg";
import g8 from "./imgs/g8.jpg";
import g9 from "./imgs/g9.jpg";
import g10 from "./imgs/g10.jpg";
import g11 from "./imgs/g11.jpg";
import g12 from "./imgs/g12.jpg";
import g13 from "./imgs/g13.jpg";
import g14 from "./imgs/g14.jpg";
import g15 from "./imgs/g15.jpg";
import g16 from "./imgs/g16.jpg";
import g17 from "./imgs/g17.jpg";
import g18 from "./imgs/g18.jpg";
import g19 from "./imgs/g19.jpg";
import g20 from "./imgs/g20.jpg";



// Add images to array
const images = [
   g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
       <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          GUC - 22nd May 2025
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
