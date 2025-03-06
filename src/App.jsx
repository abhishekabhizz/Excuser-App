import axios from "axios";
import { useState } from "react";

function App() {
  const [excuse, setExcuse] = useState("");
  const [reason, setReason] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${reason}/`
    );
    setExcuse(data[0].excuse);
  };

  return (
    <div className=" flex justify-center items-center flex-col h-screen bg-gradient-to-r from-pink-500 to-cyan-400 ">
      <h1 className=" font-serif text-5xl mb-4 underline">Excuser App</h1>
      <div className="flex flex-col items-center justify-center mb-4">
        <button
          onClick={() => {
            setReason("developers");
            fetchData();
          }}
          className="bg-black text-white py-2 px-4 rounded mb-2"
        >
          Developers
        </button>
        <button
          onClick={() => {
            setReason("family");
            fetchData();
          }}
          className="bg-black text-white py-2 px-4 rounded mb-2"
        >
          Family
        </button>
        <button
          onClick={() => {
            setReason("office");
            fetchData();
          }}
          className="bg-black text-white py-2 px-4 rounded"
        >
          Office
        </button>
      </div>
      <div className="bg-white p-4 rounded shadow-md w-1/2 text-center">
        <p className="text-green-700">{excuse}</p>
      </div>
    </div>
  );
}

export default App;
