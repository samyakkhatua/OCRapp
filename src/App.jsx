import { useState } from "react";
import Tesseract from "tesseract.js";
// import './App.css'

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [mode, setMode] = useState("capture");

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

  const handleMode = () => {
    setMode("upload");
  };

  return (
    <>
      {/* container  */}
      <div>
        {/* upload capture toggle  */}
        <div>
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
      </div>

      {/* ==================================================================== */}
      <div className="container">
        <p className="text-3xl font-bold text-center mb-20">OCR app</p>
        <input
          type="file"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          className=""
        />
        <input
          type="button"
          onClick={handleSubmit}
          className="bg-black text-white p-2 rounded-md"
          value="Convert"
        />

        <div className="flex border-black border-2 mt-10 items-stretch w-[50%]">
          <textarea
            cols="50"
            rows="10"
            className=""
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default App;
