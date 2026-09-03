import { Link } from "react-router";

import { ArrowRight } from "iconsax-reactjs";

function BackButton({ onClick, to }) {
  return (
    <Link
      onClick={onClick}
      to={to}
      className="hidden lg:flex-ic gap-2 w-fit mt-8"
    >
      <ArrowRight />
      <span className="text-lg font-IRANSansX-DemiBold text-404040">
        صفحه قبلی
      </span>
    </Link>
  );
}

export default BackButton;
