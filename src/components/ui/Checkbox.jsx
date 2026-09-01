import { useState } from "react";

import Tick from "./Icon/Tick";

function Checkbox({ name, checked = false, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div>
      <label
        className={`${isChecked || checked ? "bg-primary border-primary" : "border-secondary-700"} size-3.75 flex-center border rounded-sm transition-colors cursor-pointer`}
      >
        {isChecked && <Tick className="text-white" />}
        <input
          hidden
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={(e) => onChange?.(e) || handleChange()}
        />
      </label>
    </div>
  );
}

export default Checkbox;
