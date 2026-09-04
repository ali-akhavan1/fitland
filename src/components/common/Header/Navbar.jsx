import { useState } from "react";
import { Link } from "react-router";

import { Award, Flash, Star1 } from "iconsax-reactjs";

import useCategories from "@/features/categories/hooks/useCategories";
import MegaMenu from "@/features/categories/components/MegaMenu";

function Navbar() {
  const { categories, isLoading } = useCategories();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const openMegaMenu = (category) => {
    setIsOpen(true);
    setActiveCategory(category);
  };

  const closeMegaMenu = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  return (
    <nav className="hidden relative lg:flex-between rounded-2xl bg-f9f9f9 text-neutral-black px-10 mt-11.5 font-IRANSansX-Bold text-sm xl:text-base">
      <ul className="flex-ic">
        {!isLoading &&
          categories.length > 0 &&
          categories.map((category) => (
            <li
              key={category._id}
              className="pl-6 py-5 xl:pl-10 hover:text-primary transition-colors"
              onMouseEnter={() => openMegaMenu(category)}
              onMouseLeave={closeMegaMenu}
            >
              <Link to={`/category/${category.slug}`}>{category.title}</Link>
              {isOpen && category._id === activeCategory._id && (
                <MegaMenu category={activeCategory} />
              )}
            </li>
          ))}
      </ul>

      <div className="flex-ic gap-6 xl:gap-10 *:flex-ic *:gap-1 py-5">
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
