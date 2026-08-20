function AccordionWrapper({ children, hasSeparator, customClass }) {
  return (
    <div
      className={`overflow-hidden ${hasSeparator ? "*:border-b *:border-secondary-400" : ""} ${customClass}`}
    >
      {children}
    </div>
  );
}

export default AccordionWrapper;
