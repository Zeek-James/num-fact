import React, { useState } from "react";

export const Form = ({ getNumber, getType }) => {
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    getNumber(number);
    getType(type);
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form-Controller">
        <input
          className="input-Field"
          type="number"
          placeholder="Input number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <div className="btn_Container">
          <button
            className="btn"
            value={type}
            onClick={(e) => {
              setType("trivia");
            }}
          >
            Trivia
          </button>

          <button
            className="btn"
            value={type}
            onClick={(e) => {
              setType("math");
            }}
          >
            Math
          </button>
          <button
            className="btn"
            value={type}
            onClick={(e) => {
              setType("year");
            }}
          >
            Year
          </button>
        </div>
      </form>
    </div>
  );
};
