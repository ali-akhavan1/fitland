function RegisterInput({ label, placeholer, value, name, onChange, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="text-606060">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholer}
        type={type}
        className="px-3 w-full h-12 rounded-small border border-adadad mt-2"
      />
    </div>
  );
}

export default RegisterInput;
