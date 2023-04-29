import React, { useState } from "react";
import Welcome from "../Welcome";
import StepBtns from "./StepBtns";

function PageCreate() {
  const [step, setStep] = useState(0);

  const steps = {
    0: <Welcome />,
    1: "serkan",
  };

  return (
    <div className="flex flex-col gap-y-4 items-center mt-4">
      <h1 className="text-center text-3xl font-bold">Create Pages</h1>
      <div className="flex gap-2">
        <h1>step1</h1>
        <h1>step2</h1>
        <h1>step3</h1>
      </div>
      <div>{steps[step]}</div>
      <StepBtns setStep={setStep} />
    </div>
  );
}

export default PageCreate;
