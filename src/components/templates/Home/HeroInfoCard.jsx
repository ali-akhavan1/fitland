
function HeroInfoCard({ title, subtitle, Icon }) {
  return (
    <div className="w-[233px] flex-ic gap-4">
      <div className="flex-center lg:size-16 xl:size-20 bg-secondary-0 rounded-medium">
        {Icon}
      </div>
      <div className="font-IRANSansX-DemiBold text-2xl">
        <span className="block text-2xl text-secondary">{title}</span>
        <span className="text-base text-404040">{subtitle}</span>
      </div>
    </div>
  );
}

export default HeroInfoCard;
