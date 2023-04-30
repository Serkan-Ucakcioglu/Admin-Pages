import React from "react";

function StepInput({ inp, form, onChanged }) {
  return (
    <>
      <div className="mb-4" key={inp.id}>
        <label
          htmlFor={inp.id}
          className="block text-left text-sm font-semibold text-gray-800"
        >
          {inp.name}
        </label>
        <input
          id={inp.id}
          value={form[inp?.name]}
          placeholder={inp?.placeHolder}
          type={inp.type}
          name={inp.name}
          onChange={onChanged}
          className="block w-full outline-none px-4 py-2 mt-2 bg-white border rounded-md placeholder-gray-500 hover:border-black"
        />
      </div>
    </>
  );
}

export default StepInput;
