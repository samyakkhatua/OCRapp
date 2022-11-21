import { useState } from "react";
import Tesseract from "tesseract.js";
// import './App.css'

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

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

  return (
    <>
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
