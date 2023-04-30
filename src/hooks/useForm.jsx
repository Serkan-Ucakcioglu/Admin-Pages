import React, { useState } from "react";

function useForm(props) {
  const [form, setForm] = useState({ ...props });

  const onChanged = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { form, setForm, onChanged };
}

export default useForm;
