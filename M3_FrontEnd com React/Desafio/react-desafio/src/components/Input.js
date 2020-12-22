import React, { useRef } from 'react';

export default function Input({
  id,
  description,
  type,
  value,
  minimumValue,
  step,
  onChange,
}) {
  const inputRef = useRef(null);
  const handleInputChange = (event) => {
    onChange(event);
  };
  return (
    <div>
      <label htmlFor={id}>{description}</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        min={minimumValue}
        step={step}
        onChange={handleInputChange}
      />
    </div>
  );
}
