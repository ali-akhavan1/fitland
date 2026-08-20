import { Link } from "react-router";

import { Bag2 } from "iconsax-reactjs";

function CartButton() {
  return (
    <Link
      to="/cart"
      className="relative flex-center size-6.5 lg:size-12 rounded-xl lg:bg-primary"
    >
      <span className="absolute -left-1 -top-0.75 size-4 rounded-full hidden lg:flex-center bg-secondary font-IRANSansX-Bold lg:text-xs text-white">
        1
      </span>
      <Bag2 className=" lg:text-white" />
    </Link>
  );
}

export default CartButton;
