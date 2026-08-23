import { Link } from "react-router";

import { LinkSquare } from "iconsax-reactjs";

import Shape from "../../../../public/svg/shape.svg";

function ProductCover({ photo, brand = "نایک" }) {
  return (
    <div className="relative min-h-[225px] lg:w-[310px] lg:h-[375px] xl:w-[392px] xl:h-115.5 border border-cbcbcb rounded-medium overflow-hidden group">
      <div className="">
        <img src={photo} className="min-h-[215px] object-cover" alt="" />
      </div>

      <div className="absolute bottom-0">
        <img src={Shape} alt="" />
        <div className="absolute bottom-2 sm:bottom-4 lg:bottom-7 xl:bottom-10.5 right-1.5 sm:right-4 text-white font-IRANSansX-Medium lg:font-IRANSansX-DemiBold text-[10px] sm:text-xs lg:text-base xl:text-lg space-y-1.5 lg:space-y-2">
          <p>جدید ترین تخفیفات فصل برند {brand}</p>
          <p>
            <span className="text-primary-300">۵۰ ٪</span> تخفیف روی تمام
            محصولات
          </p>
        </div>
      </div>

      <div
        id="overlay"
        className="flex items-end justify-center absolute inset-0 text-white backdrop-blur-sm bg-[rgba(0,0,0,0.5)] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all"
      >
        <div className="w-33 lg:w-45 mb-8 lg:mb-20 space-y-6">
          <p className="text-xs lg:text-base lg:font-IRANSansX-Medium">
            فقط با یک کلیک وارد دنیای محصولات جدید شوید
          </p>
          <Link
            to="/products?sort=newest"
            className="btn gap-2 h-8 lg:h-12 border-2 text-[10px] lg:text-sm text-white border-white rounded-small"
          >
            <LinkSquare />
            <span className="font-IRANSansX-Medium">جدید ترین محصولات</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCover;
