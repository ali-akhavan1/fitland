import Banner from "@/components/templates/Home/Banner";
import HeroSection from "@/components/templates/Home/HeroSection";
import ProductsFeature from "@/components/templates/Home/ProductsFeature";
import ProductSlider from "@/components/templates/Home/ProductSlider";
import ProductsShowCase from "@/components/templates/Home/ProductsShowCase";
import NavButton from "@/components/ui/Button/NavButton";
import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <div className="container">
        <HeroSection />
        <ProductsShowCase
          photo1="blose-1"
          photo2="blose-2"
          title="جدید ترین محصولات"
          href="/products/?sort=newest"
        />
      </div>
      <Banner bannerName="banner-1">
        <div className="lg:w-92.5 absolute right-4 top-9.5 md:top-20 xl:top-40 xl:right-37">
          <p className="font-IRANSansX-Medium lg:font-IRANSansX-Bold text-[10px] sm:text-base lg:text-2xl lg:mb-8 select-none">
            <span className="block font-IRANSansX-Regular">برای حال خوب</span>
            لوازم ایروبیک و تناسب اندام بگیر
          </p>
          <NavButton customClass="hidden lg:flex lg:w-59 bg-secondary" />
        </div>
      </Banner>
      <ProductSlider
        bgSliderName="slider-1"
        title="تخفیفات ویژه"
        href="/products?hasDiscount=true"
      />
      <ProductSlider
        title="جدید ترین کفش های ورزشی"
        titleClass="font-IRANSansX-Bold"
      />
      <Banner bannerName="banner-2">
        <div className="lg:w-92.5 absolute right-4 top-9.5 md:top-20 xl:top-40 xl:right-37">
          <p className="font-IRANSansX-Medium lg:font-IRANSansX-Bold text-[10px] sm:text-base lg:text-2xl lg:mb-8 select-none">
            <span className="block font-IRANSansX-Regular">
              برای لذت بردن از مسیر
            </span>
            دوچرخه، اسکیت و اسکوتر بگیر
          </p>
          <NavButton customClass="hidden lg:flex lg:w-59 bg-secondary" />
        </div>
      </Banner>
      <ProductSlider
        title="تخفیفات ویژه"
        bgSliderName="slider-2"
        titleClass="font-IRANSansX-Bold"
      />
      <div className="container">
        <ProductsShowCase
          photo1="blose-3"
          photo2="blose-4"
          title="پرفروش ترین محصولات"
          href="/products/?sort=bestSelling"
        />
      </div>
      <Banner bannerName="banner-3">
        <Link to="/products" className="block size-full" />
      </Banner>
      <ProductsFeature />
    </>
  );
}

export default HomePage;
