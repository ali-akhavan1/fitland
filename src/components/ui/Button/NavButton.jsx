import { Link } from "react-router";

import { ArrowCircleLeft2 } from "iconsax-reactjs";

function NavButton({
  customClass,
  text = "مشاهده همه محصولات",
  to = "/products",
}) {
  return (
    <Link
      className={`btn h-8 lg:h-12 rounded-small gap-2 xl:font-IRANSansX-Bold text-xs lg:text-base text-white transition-colors ${customClass}`}
      to={to}
    >
      <ArrowCircleLeft2 className="size-5 lg:size-6" />
      {text}
    </Link>
  );
}

export default NavButton;
