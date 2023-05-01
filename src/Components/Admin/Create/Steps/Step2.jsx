import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  addStep,
  selectedFormData,
} from "../../../../Features/loginSlice";
import SolarvisLogo from "../../../../assets/SolarvisLogo";
import StepInput from "./StepInput";
import useForm from "../../../../hooks/useForm";
import { step2 } from "../../../../Data/data";

function Step2() {
  const dispatch = useDispatch();
  const formData = useSelector(selectedFormData);
  const { form, onChanged, error, setShow } = useForm({
    Phone: formData[1]?.Phone || 0,
    Email: formData[1]?.Email || "",
    Adress: formData[1]?.Adress || "",
  });

  const onSubmits = (e) => {
    e.preventDefault();
    if (form.Phone !== "" && form.Email !== "" && form?.Adress?.length > 5) {
      setShow(false);
      dispatch(addStep(2));
      dispatch(addData(form));
    } else {
      setShow(true);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={onSubmits}
    >
      <div className="flex flex-col items-center">
        <SolarvisLogo />
        <div className="flex flex-col">
          {step2?.map((inp) => {
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

export default Step2;
