import { Link } from "react-router";

import { Award, Flash, Star1 } from "iconsax-reactjs";

function Navbar() {
  return (
    <nav className="hidden lg:flex-between rounded-2xl bg-f9f9f9 px-10 py-4 mt-11.5 font-IRANSansX-Bold text-sm xl:text-base *:flex-ic *:gap-6 xl:*:gap-10">
      <ul>
        <Link to="/products/?category=men">مردانه</Link>
        <Link to="/products/?category=women">زنانه</Link>
        <Link to="/products/?category=children">بچگانه</Link>
        <Link to="/products/?category=equipments">لوازم ورزشی</Link>
        <Link to="/products/?category=shaker">شیکر و جاگ</Link>
      </ul>

      <div className="*:flex-ic *:gap-1">
        <Link to="/products/?sort=newest">
          <Star1 className="size-5 xl:size-6" color="#FA541C" />
          <span>جدید ترین محصولات</span>
        </Link>
        <Link to="/products/?hasDiscount=true">
          <Flash className="size-5 xl:size-6" color="#FA541C" />
          <span>تخفیفات ویژه</span>
        </Link>
        <Link to="/products/?sort=bestSelling">
          <Award className="size-5 xl:size-6" color="#FA541C" />
          <span>پرفروش ترین ها</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
