import React from "react";
import { useSelector } from "react-redux";
import { selectedFormData } from "../../../Features/loginSlice";
function Home() {
  const formData = useSelector(selectedFormData)[0];

  return (
    <>
      <h1 className="text-2xl mt-2 text-center font-extrabold">
        {formData?.Title}
      </h1>

      <div className="flex h-[500px] mt-8 justify-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <img
            src={formData?.Url}
            alt="img"
            className="max-w-[600px] min-h-[300px] max-h-[400px]"
          />
          <p className="border border-gray-400 mt-2 ml-4 max-w-[300px] text-slate-600 text-border rounded p-3 flex items-center">
            {formData?.Description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
