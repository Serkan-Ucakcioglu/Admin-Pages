import React from "react";

function App() {
  return (
    <>
      <header className="w-full flex items-center px-[50px] justify-between h-[85px] shadow">
        <img
          className="w-[400] h-[90px]"
          src="https://solarvisbucket.s3.eu-central-1.amazonaws.com/media/public/logos/electraVis_logo.png"
          alt="solarvis-logo"
        />
        <a
          href="https://solarvis.co"
          target="_blank"
          className="bg-blue-500 p-2 text-white rounded hover:bg-blue-700"
        >
          Go Solarvis
        </a>
      </header>
    </>
  );
}

export default App;
