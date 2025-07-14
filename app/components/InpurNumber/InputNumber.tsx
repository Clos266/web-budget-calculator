import React, { useState } from "react";

type InputNumberProps = {
  value: number;
  onChange: (newValue: number) => void;
};

const InputNumber = ({ value, onChange }: InputNumberProps) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(Math.max(0, value - 1));

  return (
    <div className="">
      <div className="">
        <button type="button" onClick={decrement} aria-label="Decrease">
          -
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className=""
        />
        <button type="button" onClick={increment} aria-label="Increase">
          +
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
