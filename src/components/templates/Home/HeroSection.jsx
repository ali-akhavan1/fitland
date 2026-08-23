import { Calendar, Like1, Shop } from "iconsax-reactjs";

import NavButton from "@/components/ui/Button/NavButton";
import Runner from "@/assets/images/homepage/runner.png";
import HeroInfoCard from "./HeroInfoCard";

function HeroSection() {
  return (
    <div className="flex justify-between mt-4 lg:mt-8 lg:bg-[url(./../src/assets/images/homepage/hero-pattern.png)] bg-no-repeat bg-bottom bg-contain">
      <div className="w-full lg:w-auto flex justify-between lg:gap-3">
        <div className="max-w-61 lg:max-w-109 space-y-4 lg:mr-3.5">
          <span className="inline-block font-IRANSansX-Medium lg:font-IRANSansX-Bold text-[10px] lg:text-base text-606060">
            راحت و مطمئن خرید کنید!
          </span>
          <h1 className="font-IRANSansX-DemiBold text-lg lg:text-[28px] xl:text-[32px] text-secondary">
            همراه تو در مسیر سلامتی
          </h1>
          <h1 className="font-IRANSansX-DemiBold text-lg lg:text-[28px] xl:text-[32px] text-primary">
            سهم بزرگ خودتان را امروز بگیرید!
          </h1>
          <p className=" font-IRANSansX-Medium lg:font-IRANSansX-Bold text-[10px] lg:text-base text-606060">
            بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف
            شگفت انگیز بخر!
          </p>
          <NavButton
            customClass="w-41.5 lg:w-51.75 bg-secondary hover:bg-primary hover:text-white"
            text="مشاهده  محصولات"
          />
        </div>

        <img
          src={Runner}
          alt=""
          className="w-32.5 sm:w-42 lg:w-82 xl:w-105.5 object-contain"
        />
      </div>

      <div className="space-y-6 hidden lg:block pt-10.5">
        <HeroInfoCard
          title={`${300} +`}
          subtitle="محصولات متنوع"
          Icon={<Shop color="#194165" size={40} />}
        />
        <HeroInfoCard
          title={`% ${95}`}
          subtitle="رضایت مشتری"
          Icon={<Like1 color="#194165" size={40} />}
        />
        <HeroInfoCard
          title="4 روز"
          subtitle="از خرید تا دریافت"
          Icon={<Calendar color="#194165" size={40} />}
        />
      </div>
    </div>
  );
}

export default HeroSection;
