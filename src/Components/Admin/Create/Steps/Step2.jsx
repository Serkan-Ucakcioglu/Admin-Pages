import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch } from "react-redux";
import { addStep } from "../../../../Features/loginSlice";
import SolarvisLogo from "../../../../assets/SolarvisLogo";

function Step2() {
  const dispatch = useDispatch();
  const onSubmits = (e) => {
    e.preventDefault();
    dispatch(addStep(2));
  };
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={onSubmits}
    >
      <div className="flex flex-col items-center">
        <SolarvisLogo />
        <h1>step2</h1>
      </div>
      <StepBtns />
    </form>
  );
}

export default Step2;
