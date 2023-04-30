import React, { useState } from "react";

function useForm(props) {
  const [form, setForm] = useState({ ...props });

  return { form, setForm };
}

export default useForm;
