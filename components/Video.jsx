import React from "react";

const Video = () => {
  return (
    <video
      className="mx-auto my-16"
      autoPlay
      controls
      loop
      style={{ width: "80%", height: "auto", borderRadius: "20px" }}
    >
      <source src="https://cdn.cmsfly.com/6425ab84673ce0001fdd7210/pexels-rodnae-productions-5780428-3840x2160-24fps-online-video-cutter.com-N8zTqR.mp4" />
    </video>
  );
};

export default Video;
