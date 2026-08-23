import banner1 from "@/assets/images/banner/banner-1.jpg";
import banner2 from "@/assets/images/banner/banner-2.jpg";
import banner3 from "@/assets/images/banner/banner-3.jpg";

function Banner({ children, bannerName, customClass }) {
  const banners = {
    "banner-1": banner1,
    "banner-2": banner2,
    "banner-3": banner3,
  };

  const bannerStyle = {
    backgroundImage: `url(${banners[bannerName]})`,
  };

  return (
    <div
      style={bannerStyle}
      className={`h-53.75 sm:h-66.25 md:h-91.25 lg:h-[445px] xl:h-150 relative bg-no-repeat bg-center bg-cover mt-8 md:mt-15 lg:mt-20 ${customClass}`}
    >
      {children}
    </div>
  );
}

export default Banner;
