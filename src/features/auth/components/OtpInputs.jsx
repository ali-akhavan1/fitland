import { useEffect, useRef } from "react";

function OtpInputs({ length = 5, otp, setOtp }) {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.slice(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  return (
    <div
      className="flex-center gap-2 text-lg font-IRANSansX-Regular text-secondary-850"
      dir="ltr"
    >
      {otp.map((value, index) => (
        <div
          key={index}
          className="relative after:w-7 after:h-px after:bg-868686 after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto"
        >
          <input
            ref={(input) => (inputRefs.current[index] = input)}
            onChange={(e) => handleChange(e, index)}
            onClick={() => handleClick(index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            value={value}
            type="text"
            className={`size-11 rounded-small text-center border transition-all ${value ? "border-868686" : "border-cbcbcb"}`}
          />
        </div>
      ))}
    </div>
  );
}

export default OtpInputs;
