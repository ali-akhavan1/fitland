import { useRef } from "react";

function RegisterInput({
  label,
  placeholer,
  value,
  name,
  onChange,
  type = "text",
  handleBlur,
}) {
  const inputRef = useRef(null);

  return (
    <div className="space-y-2">
      <label className="text-606060">{label}</label>
      <input
        ref={inputRef}
        onBlur={() => handleBlur(inputRef.current)}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholer}
        type={type}
        className={`px-3 w-full h-12 rounded-small placeholder:text-adadad border border-adadad text-404040 mt-2`}
      />
    </div>
  );
}

export default RegisterInput;
