import React from "react";

import v1 from "./videos/Yuhong Liu.mp4";
import v2 from "./videos/Proeller.mp4";
import v3 from "./videos/Islam.mp4";

interface VideoItem {
  title: string;
  file: string;
}

const videos: VideoItem[] = [
  {
    title: "Yuhong Liu - IEEE CS GAC Chair",
    file: v1, // Adjust path based on your public folder
  },

  {
    title: "George J. Proeller - IEEE CS DVP Chair",
    file: v2, // Adjust path based on your public folder
  },

  {
    title: "Islam Tharwat - IEEE CS R8 Coordinator",
    file: v3, // Adjust path based on your public folder
  },

];

const RecordedVideos: React.FC = () => {
  return (
    <section id="recorded-videos" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
           Highlights - AI Caravan
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Watch recorded sessions and highlights from our AI worskhops and events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <video
  className="rounded-lg mb-4"
  style={{ width: "100%", height: "300px", objectFit: "cover" }}
  controls
  preload="metadata"
              >
                <source src={video.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecordedVideos;
