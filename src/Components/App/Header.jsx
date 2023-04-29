import React from "react";

function Header() {
  return (
    <>
      <header className="w-full flex items-center px-[70px] justify-between h-[90px] shadow-lg">
        <a href="https://solarvis.co" target="_blank">
          <img
            className="h-[72px]"
            src="https://solarvisbucket.s3.eu-central-1.amazonaws.com/media/public/logos/electraVis_logo.png"
            alt="solarvis-logo"
          />
        </a>
        <a
          href="https://solarvis.co"
          target="_blank"
          className="bg-blue-500 p-2.5 text-white rounded hover:bg-blue-700"
        >
          Go Solarvis
        </a>
      </header>
    </>
  );
}

export default Header;
