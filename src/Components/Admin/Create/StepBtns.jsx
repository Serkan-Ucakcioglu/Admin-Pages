import React from "react";

function StepBtns({ setStep }) {
  return (
    <>
      <div className="flex gap-4 mt-8">
        <button
          className="bg-blue-500 p-1.5 rounded hover:bg-blue-700 text-white"
          onClick={() => setStep((step) => step - 1)}
        >
          Prev
        </button>
        <p>---</p>
        <button
          className="bg-blue-500 p-1 rounded hover:bg-blue-700 text-white"
          onClick={() => setStep((step) => step + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default StepBtns;
