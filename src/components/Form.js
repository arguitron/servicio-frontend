import React, { useState } from "react";
import { Input } from "./Input";
import "./form.css";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  const [state, setState] = useState({
    nombre: "",
    aPaterno: "",
    aMaterno: "",
    egreso: "",
    correo: "",
    numOfFiles: "",
    file1: "",
    file2: "",
    file3: "",
    file4: "",
    file5: "",
  });

  const handleShowInputFiles = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.files[0].name,
    });
  };

  const fileInpunts = ["file1", "file2", "file3", "file4", "file5"];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="text-inputs">
          <Input
            title="Nombre"
            state={state}
            setState={setState}
            name="nombre"
          />
          <Input
            title="Apellido Paterno"
            state={state}
            setState={setState}
            name="aPaterno"
          />
          <Input
            title="Apellido Materno"
            state={state}
            setState={setState}
            name="aMaterno"
          />
          <Input
            title="Año de Egreso"
            state={state}
            setState={setState}
            name="egreso"
          />
          <Input
            title="Correo"
            state={state}
            setState={setState}
            name="correo"
          />

          <select
            className="custom-input"
            onChange={handleShowInputFiles}
            name="numOfFiles"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="file-inputs">
          {fileInpunts.slice(0, state.numOfFiles).map((fileName, index) => (
            <input
              className="custom-input"
              key={index}
              type="file"
              name={fileName}
              onChange={handleFiles}
            />
          ))}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
