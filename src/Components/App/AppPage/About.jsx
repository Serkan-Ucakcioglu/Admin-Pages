import React from "react";
import { useSelector } from "react-redux";
import { selectedFormData } from "../../../Features/loginSlice";

function About() {
  const formData = useSelector(selectedFormData)[1];
  return (
    <>
      <h1 className="text-2xl mt-2 text-center font-extrabold">About Page</h1>
      <div className="flex h-[500px] justify-center flex-col">
        <img
          src="https://cozone.co/wp-content/uploads/cozone-ozel-ofis.jpg"
          alt="ofis"
        />
        <div className="flex flex-col items-center mt-4">
          <p>📞{formData?.Phone}</p>
          <p>📧{formData?.Email}</p>
          <p>📍{formData?.Adress}</p>
        </div>
      </div>
    </>
  );
}

export default About;
