import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoContraints = {
  width: 540,
  facingMode: "environment",
};

const Capture = (props) => {
    // states
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(second)
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    // const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(webcamRef.current.getScreenshot())
    setUrl(imageSrc);
    console.log("captured URl:", imageSrc);
  }, [webcamRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(url);
    console.log(url);
  };

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="">
        <Webcam
          ref={webcamRef}
          audio={true}
          screenshotFormat="image/jpeg"
          videoConstraints={videoContraints}
          onUserMedia={onUserMedia}
          mirrored={false}
          screenshotQuality={1}
        />

        {/* Capture button */}
        <button
          className="bg-black text-white p-2 rounded-md w-20 mx-auto"
          onClick={capturePhoto}
        >
          Capture
        </button>

        {/* Refresh button */}
        <button
          className="bg-black text-white p-2 rounded-md w-20 mx-auto"
          onClick={() => setUrl(null)}
        >
          Refresh
        </button>

        {/* send button */}
        <button
          className="bg-black text-white p-2 rounded-md w-20 mx-auto"
          onSubmit={handleSubmit}
        >
          Send
        </button>

        {url && (
          <>
            <div>
              {url}
              <img src={url} alt="Screenshot" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Capture;
