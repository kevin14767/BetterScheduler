'use client';
import { useState } from 'react';

interface CheckboxProps {
  label?: string;
  onChange?: (isChecked: boolean) => void;
  initialState?: boolean;
  input_className?: string;
}

export default function Checkbox({ label, onChange, initialState = false , input_className = 'rounded'}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div>
      <input
        type="checkbox"
        className={input_className}
        checked={isChecked}
        onChange={handleChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
}