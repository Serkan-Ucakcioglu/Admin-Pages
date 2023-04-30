import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch } from "react-redux";
import { addStep } from "../../../../Features/loginSlice";

function Step2() {
  const dispatch = useDispatch();
  const onSubmits = (e) => {
    e.preventDefault();
    dispatch(addStep(2));
  };
  return (
    <form onSubmit={onSubmits}>
      <div className="flex">
        <h1>step2</h1>
      </div>
      <StepBtns />
    </form>
  );
}

export default Step2;
