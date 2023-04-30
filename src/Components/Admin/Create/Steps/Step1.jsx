import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch } from "react-redux";
import { addStep } from "../../../../Features/loginSlice";

function Step1() {
  const dispatch = useDispatch();
  const onSubmits = (e) => {
    e.preventDefault();
    dispatch(addStep(1));
  };
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={onSubmits}
    >
      <div className="flex">
        <h1>step1</h1>
      </div>
      <StepBtns />
    </form>
  );
}

export default Step1;
