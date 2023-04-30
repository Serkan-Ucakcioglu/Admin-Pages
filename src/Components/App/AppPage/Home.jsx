import React from "react";
import { useSelector } from "react-redux";
import { selectedFormData } from "../../../Features/loginSlice";
function Home() {
  const formData = useSelector(selectedFormData)[0];

  return (
    <div className="flex flex-col gap-y-5 mt-8">
      <h1 className="text-2xl text-center font-extrabold">{formData?.Title}</h1>
      <div className="flex items-center">
        <img src={formData?.Url} alt="img" className="w-[500px] h-[400px]" />
        <p className="border border-gray-200 ml-4 max-w-[250px] text-border rounded p-3 flex items-center">
          {formData?.Description}
        </p>
      </div>
    </div>
  );
}

export default Home;
