import React, { Component, useState } from "react";
import "./cameraStyles.css";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

export default function WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  const [image, setImage] = useState("");

  return (
    <>
      <div className="webcam-container">
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={220}
          videoConstraints={videoConstraints}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
        >
          Capture
        </button>
      </div>
      <div className="webcam-container">
        <div className="webcam-img">
          {image == "" ? (
            <Webcam
              audio={false}
              height={200}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={220}
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={image} />
          )}
        </div>
      </div>

      <div>
        {image != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="webcam-btn"
          >
            Retake Image
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="webcam-btn"
          >
            Capture
          </button>
        )}
      </div>
    </>
  );
};

// export default WebcamCapture