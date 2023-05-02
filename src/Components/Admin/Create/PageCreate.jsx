import React from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { useSelector } from "react-redux";
import { selectedStep } from "../../../Features/loginSlice";

function PageCreate() {
  const step = useSelector(selectedStep);
  const steps = {
    0: <Step1 />,
    1: <Step2 />,
    2: <Step3 />,
  };
  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <h1 className="text-center text-3xl font-bold">Create Pages</h1>
      <div className="flex items-center gap-x-4">
        <h1 className={`${step == 0 && "bg-blue-500 text-white p-1 rounded"}`}>
          Page 1
        </h1>
        ---
        <h1 className={`${step == 1 && "bg-blue-500 text-white p-1 rounded"}`}>
          Page 2
        </h1>
        ---
        <h1 className={`${step == 2 && "bg-blue-500 text-white p-1 rounded"}`}>
          OutPut
        </h1>
      </div>
      <>{steps[step]}</>
    </div>
  );
}

export default PageCreate;
