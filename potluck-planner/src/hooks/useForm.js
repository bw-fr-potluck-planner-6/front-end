import { useState } from "react";

const useForm = (state) => {
  const [values, setValues] = useState(state);
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return {
    values,
    handleChange,
    setValues,
  };
};

export default useForm;
