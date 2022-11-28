import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoContraints = {
  width: 540,
  
  facingMode: "environment",
};

const Capture = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    setUrl(imageSrc);
  }, [webcamRef]);

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
          mirrored={true}
          screenshotQuality={1}
          
        />

        <button className="bg-black text-white p-2 rounded-md w-20 mx-auto" onClick={capturePhoto}>Capture</button>
        <button className="bg-black text-white p-2 rounded-md w-20 mx-auto" onClick={()=>setUrl(null)}>Refresh</button>

        {
            url &&

            <>
            <div>
                <img src={url} alt="Screenshot" />
            </div>
            </>
        }
      </div>
    </>
  );
};

export default Capture;
