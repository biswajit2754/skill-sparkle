import React from 'react';

function VideoPlayer({ videoUrl }) {
  if (!videoUrl) {
    return <p>Error: Missing video URL.</p>; // Handle missing video URL
  }

  return (
    <div>
      <video width={1000} height={250} controls className="rounded-sm">
        <source src={videoUrl} type="video/mp4" />
        {/* Provide alt text for accessibility */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
