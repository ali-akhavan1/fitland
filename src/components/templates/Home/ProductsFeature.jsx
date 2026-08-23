import { Home, Paypal, TruckTick } from "iconsax-reactjs";

import FeatureCard from "./FeatureCard";

function ProductsFeature() {
  return (
    <div className="flex-center flex-col lg:flex-row gap-6 text-secondary bg-secondary-0 py-8 mt-8 md:mt-15 lg:mt-20 mb-6 lg:mb-8">
      <div className="flex-center gap-6">
        <FeatureCard
          text="ارسال سریع"
          Icon={<TruckTick className="size-6 lg:size-12" color="#2F5F8A" variant="Bold" />}
        />
        <FeatureCard
          text="پرداخت قسطی"
          Icon={<Paypal className="size-6 lg:size-12" color="#2F5F8A" variant="Bold" />}
        />
        <FeatureCard
          text="پرداخت درب منزل"
          Icon={<Home className="size-6 lg:size-12" color="#2F5F8A" variant="Bold" />}
        />
      </div>
      <span className="max-w-65 lg:max-w-89 text-sm text-center lg:text-right font-IRANSansX-Bold lg:text-2xl leading-5.25 lg:leading-9">
        با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی
      </span>
    </div>
  );
}

export default ProductsFeature;
