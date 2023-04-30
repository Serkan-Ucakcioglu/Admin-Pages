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
          value={form[inp?.title]}
          type={inp.type}
          name={inp.name}
          onChange={onChanged}
          className="block w-full outline-none px-4 py-2 mt-2 bg-white border rounded-md hover:border-black"
        />
      </div>
    </>
  );
}

export default StepInput;