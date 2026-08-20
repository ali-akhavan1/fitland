import { useState } from "react";

function Accordion({ title, Icon, headerClass, bodyClass, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        id="header"
        className={`flex-between text-white border-secondary-400 cursor-pointer ${headerClass}`}
        onClick={toggleAccordion}
      >
        <span className="text-sm font-IRANSansX-Medium select-none">
          {title}
        </span>
        <div className={`${isOpen ? "rotate-180" : ""} transition-all`}>
          {Icon}
        </div>
      </div>

      {isOpen && (
        <div id="body" className={`${bodyClass}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
