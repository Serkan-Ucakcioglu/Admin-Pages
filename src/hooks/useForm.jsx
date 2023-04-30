import React, { useState } from "react";

function useForm(props) {
  const [form, setForm] = useState({ ...props });
  const [show, setShow] = useState(false);
  const error = "Formu Doğru şekilde doldurun lütfen.";

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
