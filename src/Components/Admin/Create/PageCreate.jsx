import React, { useState } from "react";
import Welcome from "../Welcome";
import StepBtns from "./StepBtns";

function PageCreate() {
  const [step, setStep] = useState(0);

  const steps = {
    0: <Welcome />,
    1: "serkan",
    2: "2 burası",
  };

  return (
    <div className="flex flex-col gap-y-4 items-center mt-4">
      <h1 className="text-center text-3xl font-bold">Create Pages</h1>
      <div className="flex items-center gap-2">
        <h1 className={`${step == 0 && "bg-blue-500 text-white p-1 rounded"}`}>
          step1
        </h1>
        <h1 className={`${step == 1 && "bg-blue-500 text-white p-1 rounded"}`}>
          step2
        </h1>
        <h1 className={`${step == 2 && "bg-blue-500 text-white p-1 rounded"}`}>
          step3
        </h1>
      </div>
      <div>{steps[step]}</div>
      <StepBtns setStep={setStep} step={step} />
    </div>
  );
}

export default PageCreate;
