import { Link } from "react-router";

import product1 from "@/assets/images/homepage/blose-1.jpg";
import Star from "@/components/ui/Icon/Star";

function ProductCard() {
  return (
    <article className="flex gap-6 md:flex-col md:gap-4 rounded-medium bg-f9f9f9 select-none overflow-hidden">
      <Link
        to={`/product/slug`}
        className="max-[380px]:max-w-26 max-w-34 shrink-0 sm:max-w-42 md:max-w-max"
      >
        <img src={product1} className="h-full object-cover" alt="" />
      </Link>

      <div className="w-full flex flex-col justify-between gap-3 text-secondary-900 py-2 pl-2 pb-4 md:px-3 md:pt-0">
        <div className="flex justify-between items-start md:h-12 gap-3">
          <Link
            to={`/product/slug`}
            className="text-xs md:text-base leading-5 md:leading-6 line-clamp-2"
          >
            تیشرت زنانه NCY
          </Link>
          <div className="flex-ic ">
            <Star />
            <Star />
            <Star fill="#FF991F" />
            <Star fill="#FF991F" />
            <Star fill="#FF991F" />
          </div>
        </div>

        <span className="text-[10px] md:text-xs">از سایز M تا 3XL</span>

        <div className="text-xs md:text-sm">
          <span> 400,000 تومان</span>
        </div>

        <div id="colors" className="flex-ic relative w-min h-4.5 -space-x-1.25">
          <div className="size-4.5 rounded-full bg-green-500"></div>
          <div className="size-4.5 rounded-full bg-orange-500"></div>
          <div className="size-4.5 rounded-full bg-black"></div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
