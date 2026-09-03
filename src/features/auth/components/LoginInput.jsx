import Close from "@/components/ui/Icon/Close";

function LoginInput({ identifier, onChange, onReset, error }) {
  return (
    <div
      className={`${error ? "text-error-3 border-error-3 bg-[#FFEBE9]" : "border-adadad "} font-IRANSansX-Light text-sm text-404040 lg:font-IRANSansX-Medium lg:text-sm flex-between w-full h-12 rounded-small border pl-3 mt-2`}
    >
      <input
        dir="ltr"
        value={identifier}
        onChange={onChange}
        type="text"
        placeholder="09********* یا Example@gmail.com"
        autoComplete="off"
        className="size-full px-3 placeholder:text-adadad text-right"
      />
      {identifier && (
        <button
          className={`${error ? "text-error-3" : ""} size-4.5 shrink-0`}
          onClick={onReset}
        >
          <Close />
        </button>
      )}
    </div>
  );
}

export default LoginInput;
