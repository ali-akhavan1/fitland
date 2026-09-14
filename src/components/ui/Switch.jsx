import { useEffect, useState } from "react";

function Switch({ type }) {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  useEffect(() => {
    
  }, [isToggle]);

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`flex-ic justify-end w-12 h-7 p-1 rounded-full ${isToggle ? "bg-secondary" : "bg-cbcbcb"} transition-all cursor-pointer`}
    >
      <span
        className={`size-5 ${isToggle ? "translate-x-5" : "translate-x-0"} transition-all rounded-full bg-white`}
      ></span>
    </button>
  );
}

export default Switch;
