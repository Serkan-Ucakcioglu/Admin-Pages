import React from "react";
import SolarvisLogo from "../../assets/SolarvisLogo";

function Header() {
  return (
    <>
      <header className="w-full flex items-center px-[70px] justify-between h-[90px] shadow-lg">
        <a href="https://solarvis.co" target="_blank">
          <SolarvisLogo />
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
