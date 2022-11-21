import { useState } from "react";
// import './App.css'

function App() {
  // const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <div className="container">
        <p className="text-3xl font-bold text-center mb-20">OCR app</p>
        <input
          type="file"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        <input
          type="button"
          onChange={handleSubmit}
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
