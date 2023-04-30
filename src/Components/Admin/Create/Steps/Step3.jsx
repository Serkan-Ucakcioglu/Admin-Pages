import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch, useSelector } from "react-redux";
import { addStep, selectedFormData } from "../../../../Features/loginSlice";
import SolarvisLogo from "../../../../assets/SolarvisLogo";
import Success from "../../../../assets/Success";
import { Link } from "react-router-dom";

function Step3() {
  const dispatch = useDispatch();
  const formData = useSelector(selectedFormData);
  const onSubmits = (e) => {
    e.preventDefault();
    dispatch(addStep(2));
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={onSubmits}
    >
      <div className="flex gap-6 flex-col items-center">
        <SolarvisLogo />
        <Success />
      </div>
      <div className="mt-8">
        <Link
          className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
          to="/app"
        >
          Go To App
        </Link>
      </div>
    </form>
  );
}

export default Step3;
