import React from "react";

function StepBtns({ setStep, step }) {
  return (
    <>
      <div className="flex gap-4 mt-8">
        <button
          className={`bg-blue-500 p-1 rounded hover:bg-blue-700 text-white ${
            step == 0 ? "opacity-50" : ""
          }`}
          disabled={step == 0}
          onClick={() => setStep((step) => step - 1)}
        >
          Prev
        </button>
        <p>---</p>
        <button
          className={`bg-blue-500 p-1 rounded hover:bg-blue-700 text-white ${
            step == 2 ? "opacity-50" : ""
          }`}
          disabled={step == 2}
          onClick={() => setStep((step) => step + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default StepBtns;
