import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import 56 images nu00.jfif to nu55.jfif
import nu00 from "./imgs/nu00.jfif";
import nu01 from "./imgs/nu01.jfif";
import nu02 from "./imgs/nu02.jfif";
import nu03 from "./imgs/nu03.jfif";
import nu04 from "./imgs/nu04.jfif";
import nu05 from "./imgs/nu05.jfif";
import nu06 from "./imgs/nu06.jfif";
import nu07 from "./imgs/nu07.jfif";
import nu08 from "./imgs/nu08.jfif";
import nu09 from "./imgs/nu09.jfif";
import nu10 from "./imgs/nu10.jfif";
import nu11 from "./imgs/nu11.jfif";
import nu12 from "./imgs/nu12.jfif";
import nu13 from "./imgs/nu13.jfif";
import nu14 from "./imgs/nu14.jfif";
import nu15 from "./imgs/nu15.jfif";
import nu16 from "./imgs/nu16.jfif";
import nu17 from "./imgs/nu17.jfif";
import nu18 from "./imgs/nu18.jfif";
import nu19 from "./imgs/nu19.jfif";
import nu20 from "./imgs/nu20.jfif";
import nu21 from "./imgs/nu21.jfif";
import nu22 from "./imgs/nu22.jfif";
import nu23 from "./imgs/nu23.jfif";
import nu24 from "./imgs/nu24.jfif";
import nu25 from "./imgs/nu25.jfif";
import nu26 from "./imgs/nu26.jfif";
import nu27 from "./imgs/nu27.jfif";
import nu28 from "./imgs/nu28.jfif";
import nu29 from "./imgs/nu29.jfif";
import nu30 from "./imgs/nu30.jfif";
import nu31 from "./imgs/nu31.jfif";
import nu32 from "./imgs/nu32.jfif";
import nu33 from "./imgs/nu33.jfif";
import nu34 from "./imgs/nu34.jfif";
import nu35 from "./imgs/nu35.jfif";
import nu36 from "./imgs/nu36.jfif";
import nu37 from "./imgs/nu37.jfif";
import nu38 from "./imgs/nu38.jfif";
import nu39 from "./imgs/nu39.jfif";
import nu40 from "./imgs/nu40.jfif";
import nu41 from "./imgs/nu41.jfif";
import nu42 from "./imgs/nu42.jfif";
import nu43 from "./imgs/nu43.jfif";
import nu44 from "./imgs/nu44.jfif";
import nu45 from "./imgs/nu45.jfif";
import nu46 from "./imgs/nu46.jfif";
import nu47 from "./imgs/nu47.jfif";
import nu48 from "./imgs/nu48.jfif";
import nu49 from "./imgs/nu49.jfif";
import nu50 from "./imgs/nu50.jfif";
import nu51 from "./imgs/nu51.jfif";
import nu52 from "./imgs/nu52.jfif";
import nu53 from "./imgs/nu53.jfif";
import nu54 from "./imgs/nu54.jfif";
import nu55 from "./imgs/nu55.jfif";

// Add images to array
const images = [
  nu00, nu01, nu02, nu03, nu04, nu05, nu06, nu07, nu08, nu09,
  nu10, nu11, nu12, nu13, nu14, nu15, nu16, nu17, nu18, nu19,
  nu20, nu21, nu22, nu23, nu24, nu25, nu26, nu27, nu28, nu29,
  nu30, nu31, nu32, nu33, nu34, nu35, nu36, nu37, nu38, nu39,
  nu40, nu41, nu42, nu43, nu44, nu45, nu46, nu47, nu48, nu49,
  nu50, nu51, nu52, nu53, nu54, nu55,
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Nile University - 29th May 2025
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
