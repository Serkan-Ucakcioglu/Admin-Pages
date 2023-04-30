import React, { useState } from "react";

function useForm(props, data) {
  const [form, setForm] = useState({ ...props });
  const [show, setShow] = useState(false);

  const error = (
    <span className="text-red-500">
      {show && "Please Fill The Form Correctly!"}
    </span>
  );

  const onChanged = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { form, setForm, onChanged, error, show, setShow };
}

export default useForm;
