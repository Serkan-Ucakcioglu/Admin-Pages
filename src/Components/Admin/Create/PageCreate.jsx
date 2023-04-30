import React, { useState } from "react";
import StepBtns from "./StepBtns";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

function PageCreate() {
  const [step, setStep] = useState(0);

  const steps = {
    0: <Step1 />,
    1: <Step2 />,
    2: <Step3 />,
  };

  return (
    <div className="flex flex-col gap-y-4 items-center mt-4">
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
          Page 3
        </h1>
      </div>
      <>{steps[step]}</>
      <StepBtns setStep={setStep} step={step} />
    </div>
  );
}

export default PageCreate;
