import { Link } from "react-router";

import ProductImage from "@/assets/images/homepage/product-slider-1.jpg";

function ProductSliderCard() {
  return (
    <div className="relative rounded-medium overflow-hidden border border-ededed">
      <Link to="/products/01" className="">
        <img src={ProductImage} alt="" className="" />
      </Link>

      <div className="h-[187px] space-y-3 pt-4 px-4 bg-white">
        <Link to="/products/01" className="inline-block">
          <h3 className="line-clamp-2">کفش نایک مدل S-2000</h3>
        </Link>
        <span className="block text-sm">۲۰۰۰۰۰ تومان</span>
        <span className="block text-xs">از سایز L تا XXL</span>

        <div id="colors" className="flex-ic relative w-min h-4.5 -space-x-1.25">
          <div className="size-4.5 rounded-full bg-green-500"></div>
          <div className="size-4.5 rounded-full bg-orange-500"></div>
          <div className="size-4.5 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="size-8 text-sm md:text-base md:size-10 flex-center absolute top-2 left-2 rounded-full bg-secondary-50">
        %24
      </div>
    </div>
  );
}

export default ProductSliderCard;
