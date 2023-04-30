import React from "react";
import StepBtns from "../StepBtns";
import { useDispatch } from "react-redux";
import { addStep } from "../../../../Features/loginSlice";
import SolarvisLogo from "../../../../assets/SolarvisLogo";
import useForm from "../../../../hooks/useForm";

function Step1() {
  const dispatch = useDispatch();
  const { form, onChanged } = useForm({
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
    dispatch(addStep(1));
  };
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
              <div className="mb-4" key={inp.id}>
                <label
                  htmlFor={inp.id}
                  className="block text-left text-sm font-semibold text-gray-800"
                >
                  {inp.name}
                </label>
                <input
                  id={inp.id}
                  value={form[inp?.title]}
                  type={inp.type}
                  name={inp.name}
                  onChange={onChanged}
                  className="block w-full outline-none px-4 py-2 mt-2 bg-white border rounded-md hover:border-black"
                />
              </div>
            );
          })}
        </div>
      </div>
      <StepBtns />
    </form>
  );
}

export default Step1;
