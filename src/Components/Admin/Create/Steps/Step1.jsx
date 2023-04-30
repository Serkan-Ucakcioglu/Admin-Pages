import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch } from "react-redux";
import { addData, addStep } from "../../../../Features/loginSlice";
import SolarvisLogo from "../../../../assets/SolarvisLogo";
import useForm from "../../../../hooks/useForm";
import StepInput from "./StepInput";

function Step1() {
  const dispatch = useDispatch();
  const { form, onChanged, error, setShow } = useForm({
    Title: "",
    Description: "",
    Url: "",
  });

  const arr = [
    { name: "Title", type: "name", id: "name" },
    { name: "Description", type: "name", id: "desc" },
    { name: "Url", type: "url", id: "url" },
  ];

  const onSubmits = (e) => {
    e.preventDefault();
    if (form.Title !== "" && form.Url !== "" && form.Description.length < 5) {
      setShow(false);
      dispatch(addData(form));
      dispatch(addStep(1));
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
          {arr.map((inp) => {
            return <StepInput inp={inp} form={form} onChanged={onChanged} />;
          })}
          {error}
        </div>
      </div>
      <StepBtns />
    </form>
  );
}

export default Step1;
