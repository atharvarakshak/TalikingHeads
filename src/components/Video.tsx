import React from 'react';

const Video = () => {
  return (
    <div>
      <video src="/assets/vid.mp4" loop autoPlay muted playsInline>
        <track src="path/to/captions.vtt" kind="captions" label="English" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
