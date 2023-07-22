import "./Button.css";

type ButtonProps = {
  type: "button" | "reset" | "submit";
  className: string;
  children: React.ReactNode;
};

function Button({ type, className, children }: ButtonProps) {
  return (
    <button type={type} className={`button ${className}`}>
      {children}
    </button>
  );
}

export default Button;
