import "./Parameter.css";

type ParameterProps = {
  label: string;
  value: number;
};

function Parameter({ label, value }: ParameterProps) {
  return (
    <div className="parameter">
      <input
        type="range"
        name={label}
        id={label}
        min={1}
        max={5}
        step={1}
        value={value}
        className="parameter__range"
      />
      <label htmlFor={label} className="parameter__label">
        {label}
      </label>
    </div>
  );
}

export default Parameter;
