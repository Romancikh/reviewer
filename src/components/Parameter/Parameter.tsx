import { ChangeEventHandler } from "react";
import "./Parameter.css";

type ParameterProps = {
  id: string;
  label: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function Parameter({ id, label, value, onChange }: ParameterProps) {
  return (
    <div className="parameter">
      <input
        type="range"
        name={id}
        id={id}
        min={1}
        max={5}
        step={1}
        value={value}
        className="parameter__range"
        onChange={onChange}
      />
      <label htmlFor={id} className="parameter__label">
        {label}
      </label>
    </div>
  );
}

export default Parameter;
