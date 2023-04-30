import React from "react";
import { useSelector } from "react-redux";
import { selectedFormData } from "../../../Features/loginSlice";
function Home() {
  const formData = useSelector(selectedFormData)[0];

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center font-extrabold">{formData?.Title}</h1>
      <div className="flex items-center">
        <img src={formData?.Url} alt="img" className="w-[300px] h-[300px]" />
        <p className="border-2 border-gray-200 h-8 text-border rounded p-3 flex items-center">
          {formData?.Description}
        </p>
      </div>
    </div>
  );
}

export default Home;
