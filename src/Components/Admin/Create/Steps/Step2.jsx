import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch } from "react-redux";
import { addData, addStep } from "../../../../Features/loginSlice";
import SolarvisLogo from "../../../../assets/SolarvisLogo";
import StepInput from "./StepInput";
import useForm from "../../../../hooks/useForm";

function Step2() {
  const dispatch = useDispatch();

  const { form, onChanged, error, setShow } = useForm({
    Phone: "",
    Email: "",
    Adress: "",
  });

  const onSubmits = (e) => {
    e.preventDefault();
    if (form.Phone !== "" && form.Email !== "" && form.Adress.length > 5) {
      setShow(false);
      dispatch(addData(form));
      dispatch(addStep(2));
    } else {
      setShow(true);
    }
  };

  const arr = [
    { name: "Phone", type: "phone", id: "Phone" },
    { name: "Email", type: "email", id: "Email" },
    { name: "Adress", type: "name", id: "Adress" },
  ];
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={onSubmits}
    >
      <div className="flex flex-col items-center">
        <SolarvisLogo />
        <div className="flex flex-col">
          {arr.map((inp) => {
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
