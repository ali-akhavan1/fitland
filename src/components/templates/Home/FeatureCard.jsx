function FeatureCard({ text, Icon }) {
  return (
    <div
      id="card"
      className="w-18 lg:w-[167px] h-17.25 lg:h-43 flex-center gap-1 flex-col border bg-white border-secondary-10 rounded-medium"
    >
      {Icon}
      <span className="max-w-10 lg:max-w-full text-[10px] lg:text-lg lg:font-IRANSansX-DemiBold text-center">
        {text}
      </span>
    </div>
  );
}

export default FeatureCard;
