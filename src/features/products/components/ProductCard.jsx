import { Link } from "react-router";

import Star from "@/components/ui/Icon/Star";

import { formatPrice, getDiscountedPrice } from "@/utils/helper";

function ProductCard({
  name,
  slug,
  price,
  discount,
  images,
  averageRating,
  availableSizes,
  availableColors,
}) {
  const finalPrice = getDiscountedPrice(price, discount);

  return (
    <article className="flex gap-6 md:flex-col md:gap-4 rounded-medium bg-f9f9f9 select-none overflow-hidden">
      <Link
        to={`/product/${slug}`}
        className="relative md:min-w-full max-w-34 max-[380px]:max-w-26 md:min-h-70 shrink-0 sm:max-w-42 md:max-w-max"
      >
        {discount > 0 && (
          <div className="absolute top-0 right-0 flex-center text-[10px] md:text-sm text-white bg-primary w-10 h-4.5 md:w-18 md:h-7.25 rounded-bl-medium">
            %{discount}
          </div>
        )}
        <img
          src={`http://localhost:5000${images[0]}`}
          className="h-full object-cover"
          alt={slug}
        />
      </Link>

      <div className="w-full flex flex-col justify-between gap-3 text-secondary-900 py-2 pl-2 pb-4 md:px-3 md:pt-0">
        <div className="flex justify-between items-start md:h-12 gap-3">
          <Link
            to={`/product/${slug}`}
            className="text-xs md:text-base leading-5 md:leading-6 line-clamp-2"
          >
            {name}
          </Link>
          <div className="flex-ic gap-1">
            <span className="text-xs md:text-sm h-3 md:h-[17px]">
              {averageRating}
            </span>
            <Star fill="#FF991F" size={18} />
          </div>
        </div>

        <span className="h-4 text-[10px] md:text-xs">
          {availableSizes.length > 0 &&
            `از سایز ${availableSizes[0]} تا ${availableSizes[availableSizes.length - 1]}`}
        </span>

        <div className="flex-ic gap-1 text-xs md:text-sm">
          <span>
            {discount > 0 ? formatPrice(finalPrice) : formatPrice(price)} تومان
          </span>
          {discount > 0 && (
            <span className="line-through text-868686">
              {formatPrice(price)} تومان
            </span>
          )}
        </div>

        <div id="colors" className="flex-ic h-4.5 relative -space-x-1.25">
          {availableColors.map((color, index) => (
            <span
              key={index}
              className="size-4.5 rounded-full"
              style={{ background: color.hex }}
            ></span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
