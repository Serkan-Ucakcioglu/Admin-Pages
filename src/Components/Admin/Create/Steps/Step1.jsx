import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  addStep,
  selectedFormData,
} from "../../../../Features/loginSlice";
import SolarvisLogo from "../../../../assets/SolarvisLogo";
import useForm from "../../../../hooks/useForm";
import StepInput from "./StepInput";
import { step1 } from "../../../../Data/data";

function Step1() {
  const dispatch = useDispatch();
  const formData = useSelector(selectedFormData);

  const { form, onChanged, error, setShow } = useForm({
    Title: formData?.Title || "",
    Description: formData?.Description || "",
    Url: formData?.Url || "",
  });

  const onSubmits = (e) => {
    e.preventDefault();
    if (
      form?.Title !== "" &&
      form?.Url !== "" &&
      form?.Description.length > 4
    ) {
      setShow(false);
      dispatch(addStep(1));
      dispatch(addData(form));
    } else {
      setShow(true);
    }
  };
  return (
    <form
      className="flex mt-4 flex-col justify-center items-center"
      onSubmit={onSubmits}
    >
      <div className="flex flex-col items-center">
        <SolarvisLogo />
        <div className="flex flex-col">
          {step1?.map((inp) => {
            return (
              <StepInput
                key={inp.id}
                inp={inp}
                form={form}
                onChanged={onChanged}
              />
            );
          })}
          {error}
        </div>
      </div>
      <StepBtns />
    </form>
  );
}

export default Step1;
