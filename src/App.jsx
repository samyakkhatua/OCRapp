import { useState } from "react";
import Tesseract from "tesseract.js";
// import './App.css'

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [mode, setMode] = useState("upload");

  const handleSubmit = () => {
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        console.log(m);
      },
    })
      .catch((err) => {
        console.log(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
      });
  };

  const handleOnClick = (e) => {
    // setImage(URL.createObjectURL(e.target.files[0]));
    setImage(e);
    handleSubmit();
  };

  const handleMode = () => {
    mode === "upload" ? setMode("capture") : setMode("upload");
  };

  return (
    <>
      {/* container  */}
      <div className="container mx-auto my-10">
        {/* upload capture toggle  */}
        <div className="">
          <label class="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              placeholder=""
              class="sr-only peer"
            />

            <div
              class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              onClick={handleMode}
            ></div>

            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {mode}
            </span>
          </label>
        </div>

        {/* input & output blocks */}
        <div className="flex h-[60vh] mt-4">
          {/* input block */}
          <div className="w-[50%] mr-4">
            {mode === "capture" ? (
              <div className="h-[60vh] border-2 border-gray-300 border-dashed rounded-md p-4 appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                capture
              </div>
            ) : (
              <>
                <div class="">
                  <label class="flex justify-center w-full h-[60vh] px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    <span class="flex items-center space-x-2">
                      <span class="font-medium text-gray-600">
                        Drag & Drop files here, or <br />
                        <div class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            />
                          </svg>
                          Browse Files
                        </div>
                      </span>
                    </span>
                    <input
                      type="file"
                      onChange={
                        (e) => setImage(URL.createObjectURL(e.target.files[0]))
                        // handleOnClick(URL.createObjectURL(e.target.files[0]))
                      }
                      name="file_upload"
                      class="hidden"
                    />
                  </label>
                </div>
              </>
            )}
          </div>

          {/* output block */}

          <div className="p-4 h-[60vh] w-[50%] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            Output
            <div>{text}</div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {/* Capture button */}
          <div className="">
            <button
              onClick=""
              className="bg-black text-white p-2 rounded-md w-20 mx-auto"
            >
              Capture
            </button>
          </div>
          
          {/* convert button */}
          <div className="">
            <button
              onClick={handleSubmit}
              className="bg-black text-white p-2 rounded-md w-20 mx-auto"
            >
              Start
            </button>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default App;
