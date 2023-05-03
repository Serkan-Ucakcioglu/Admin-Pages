import React from "react";

function Footer() {
  return (
    <div className="w-full h-[32px] absolute bottom-0 flex justify-center bg-[#373242] text-white items-center">
      Powered by
      <a className="ml-1 underline" href="https://solarvis.co/" target="_blank">
        solarVis
      </a>
    </div>
  );
}

export default Footer;
