import React from "react";
import ImageGallery from "react-image-gallery";
import c0 from "./imgs/c0.png";
import c1 from "./imgs/c1.png";
import c2 from "./imgs/c2.png";
import c3 from "./imgs/c3.png";
import c4 from "./imgs/c4.png";
import c5 from "./imgs/c5.png";
import c6 from "./imgs/c6.png";
import c7 from "./imgs/c7.png";
import c8 from "./imgs/c8.png";
import c9 from "./imgs/c9.png";
import c10 from "./imgs/c10.png";
import c11 from "./imgs/c11.png";
import c12 from "./imgs/c12.png";
import c13 from "./imgs/c13.png";
import c14 from "./imgs/c14.png";
import c15 from "./imgs/c15.png";
import c16 from "./imgs/c16.png";
import c17 from "./imgs/c17.png";
import c18 from "./imgs/c18.png";
import c19 from "./imgs/c19.png";
import c20 from "./imgs/c20.png";
import c21 from "./imgs/c21.png";
import c22 from "./imgs/c22.png";
import c23 from "./imgs/c23.png";
import c24 from "./imgs/c24.png";
import c25 from "./imgs/c25.png";
import c26 from "./imgs/c26.png";
import c27 from "./imgs/c27.png";
import c28 from "./imgs/c28.png";
import c29 from "./imgs/c29.png";
import c30 from "./imgs/c30.png";
import c31 from "./imgs/c31.png";
import cc1 from "./imgs/cc1.png";
import cc2 from "./imgs/cc2.png";
import cc3 from "./imgs/cc3.png";
import cc4 from "./imgs/cc4.png";

import "react-image-gallery/styles/css/image-gallery.css";

interface ImageItem {
  original: string;
  thumbnail: string;
}

const images: ImageItem[] = [
  {
    original: c0,
    thumbnail: c0,
  },
  {
    original: c1,
    thumbnail: c1,
  },
  {
    original: c2,
    thumbnail: c2,
  },
  {
    original: c3,
    thumbnail: c3,
  },

    {
    original: cc1,
    thumbnail: cc1,
  },

    {
    original: cc2,
    thumbnail: cc2,
  },


  {
    original: c4,
    thumbnail: c4,
  },
  {
    original: c5,
    thumbnail: c5,
  },
  {
    original: c6,
    thumbnail: c6,
  },
  {
    original: c7,
    thumbnail: c7,
  },
  {
    original: c8,
    thumbnail: c8,
  },
      {
    original: cc3,
    thumbnail: cc3,
  },

    {
    original: cc4,
    thumbnail: c4,
  },
  

  {
    original: c10,
    thumbnail: c10,
  },
  {
    original: c11,
    thumbnail: c11,
  },
  {
    original: c12,
    thumbnail: c12,
  },
  {
    original: c13,
    thumbnail: c13,
  },
  {
      original: c9,
    thumbnail: c9,
  },
  {
    original: c14,
    thumbnail: c14,
  },
  {
    original: c15,
    thumbnail: c15,
  },
  {
    original: c16,
    thumbnail: c16,
  },
  {
    original: c17,
    thumbnail: c17,
  },
  {
    original: c18,
    thumbnail: c18,
  },
  {
    original: c19,
    thumbnail: c19,
  },
  {
    original: c20,
    thumbnail: c20,
  },
  {
    original: c21,
    thumbnail: c21,
  },
  {
    original: c22,
    thumbnail: c22,
  },
  {
    original: c23,
    thumbnail: c23,
  },
  {
    original: c24,
    thumbnail: c24,
  },
  {
    original: c25,
    thumbnail: c25,
  },
  {
    original: c26,
    thumbnail: c26,
  },
  {
    original: c27,
    thumbnail: c27,
  },
  {
    original: c28,
    thumbnail: c28,
  },
  {
    original: c29,
    thumbnail: c29,
  },
  {
    original: c30,
    thumbnail: c30,
  },
  {
    original: c31,
    thumbnail: c31,
  },

];


const MyGallery = () => {
  return (
    <section id="CSactivities" className="py-10 bg-white">
  
      <div className="text-center mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">IEEE Computer Society in Egypt</h2>
        <p className="text-lg text-gray-600">
          Collaborating with leading institutions to drive AI innovation
        </p>
        <div className="max-w-4xl mx-auto">
          <ImageGallery
            items={images}
            autoPlay={true}
            slideInterval={3000} // slide every 3 seconds
            showThumbnails={true}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </div>
      </div>
     
</section>


  );
}

export default MyGallery;
