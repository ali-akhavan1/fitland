import { useState } from "react";
import { Link } from "react-router";

import { ArrowDown2 } from "iconsax-reactjs";

function NavmenuItem({ subCategories, _id, slug, title, icon }) {
  const [isNavItemOpen, setIsNavItemOpen] = useState(false);

  const toggleNavItem = () => {
    setIsNavItemOpen((prevState) => !prevState);
  };

  return (
    <li key={_id} onClick={toggleNavItem} className="overflow-hidden">
      <div className="flex-between gap-2.5 p-2 rounded-small cursor-pointer">
        <div className="flex-ic gap-2.5">
          <img src={`http://localhost:5000${icon}`} alt="icon" />
          <span>{title}</span>
        </div>
        <ArrowDown2
          size={20}
          className={`${isNavItemOpen && "rotate-180"} transition-all`}
        />
      </div>
      <ul
        className={`space-y-3 pr-7.5 text-sm ${!isNavItemOpen ? "h-0" : "mt-3"} transition-all`}
      >
        {subCategories.map((subCategory) => (
          <li key={subCategory._id}>
            <Link to={`category/${slug}/${subCategory.slug}`}>{subCategory.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default NavmenuItem;
