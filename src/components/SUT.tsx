import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGalleryStyles.css"; // Your custom file

// Import 21 images sut00.jfif to sut20.jfif
import sut00 from "./imgs/sut00.jfif";
import sut01 from "./imgs/sut01.jfif";
import sut02 from "./imgs/sut02.jfif";
import sut03 from "./imgs/sut03.jfif";
import sut04 from "./imgs/sut04.jfif";
import sut05 from "./imgs/sut05.jfif";
import sut06 from "./imgs/sut06.jfif";
import sut07 from "./imgs/sut07.jfif";
import sut08 from "./imgs/sut08.jfif";
import sut09 from "./imgs/sut09.jfif";
import sut10 from "./imgs/sut10.jfif";
import sut11 from "./imgs/sut11.jfif";
import sut12 from "./imgs/sut12.jfif";
import sut13 from "./imgs/sut13.jfif";
import sut14 from "./imgs/sut14.jfif";
import sut15 from "./imgs/sut15.jfif";
import sut16 from "./imgs/sut16.jfif";
import sut17 from "./imgs/sut17.jfif";
import sut18 from "./imgs/sut18.jfif";
import sut19 from "./imgs/sut19.jfif";
import sut20 from "./imgs/sut20.jfif";

// Add images to array
const images = [
  sut00, sut01, sut02, sut03, sut04, sut05, sut06, sut07, sut08, sut09,
  sut10, sut11, sut12, sut13, sut14, sut15, sut16, sut17, sut18, sut19,
  sut20,
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          SUT - 10th July 2025
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
