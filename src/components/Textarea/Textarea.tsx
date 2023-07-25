import { ChangeEvent } from "react";
import "./Textarea.css";

type TextareaProps = {
  id: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea({ id, value, placeholder, onChange }: TextareaProps) {
  return (
    <textarea
      name={id}
      id={id}
      value={value}
      placeholder={placeholder}
      className="review-form__textarea"
      onChange={onChange}
    />
  );
}

export default Textarea;
