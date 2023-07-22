import "./Textarea.css";

type TextareaProps = {
  label: string;
  placeholder: string;
};

function Textarea({ label, placeholder }: TextareaProps) {
  return (
    <textarea
      name={label}
      id={label}
      placeholder={placeholder}
      className="reply-form__textarea"
    />
  );
}

export default Textarea;
