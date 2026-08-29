function Close({ className, size }) {
  return (
    <svg
      className={className}
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6693 4.27301L11.7293 3.33301L8.0026 7.05967L4.27594 3.33301L3.33594 4.27301L7.0626 7.99967L3.33594 11.7263L4.27594 12.6663L8.0026 8.93967L11.7293 12.6663L12.6693 11.7263L8.9426 7.99967L12.6693 4.27301Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Close;
