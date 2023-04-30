import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch } from "react-redux";
import { addStep } from "../../../../Features/loginSlice";

function Step3() {
  const dispatch = useDispatch();
  const onSubmits = (e) => {
    e.preventDefault();
    dispatch(addStep(2));
  };
  return (
    <form onSubmit={onSubmits}>
      <h1>step3</h1>
      <StepBtns />
    </form>
  );
}

export default Step3;
