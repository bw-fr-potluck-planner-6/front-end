import { useState } from "react";

const useForm = (state) => {
  const [values, setValues] = useState(state);
  const handleChange = (event) => {
    let newValues = values;
    newValues[`${event.target.name}`] = event.target.value;
    setValues(newValues);
  };
  return {
    values,
    handleChange,
  };
};

export default useForm;
