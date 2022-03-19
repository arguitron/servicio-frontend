import React, { useState } from "react";

export const Input = ({ state, setState, name, title }) => {
  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [currentInput, setCurrentInput] = useState("");

  return (
    <>
      <input
        className="custom-input"
        onChange={handleInputChange}
        name={name}
        autoComplete="off"
        value={currentInput}
        placeholder={title}
      />
    </>
  );
};
