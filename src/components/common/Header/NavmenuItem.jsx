import { useState } from "react";
import { Link } from "react-router";

import { ArrowDown2, Award, Flash, Home2, Shop, Star1 } from "iconsax-reactjs";

function NavmenuItem({ submenus, id, href, label, icon }) {
  const [isNavItemOpen, setIsNavItemOpen] = useState(false);

  const toggleNavItem = () => {
    setIsNavItemOpen((prevState) => !prevState);
  };
  const iconMap = {
    home: Home2,
    shop: Shop,
    star: Star1,
    award: Award,
    flash: Flash,
  };

  const Icon = iconMap[icon];

  return submenus ? (
    <li key={id} onClick={toggleNavItem} className="overflow-hidden group">
      <Link
        to={href}
        className="flex-between gap-2.5 p-2 rounded-small group-hover:text-primary group-hover:bg-primary-50 transition-colors"
      >
        <div className="flex-ic gap-2.5">
          <Icon size={20} />
          {label}
        </div>
        <ArrowDown2
          size={20}
          className={`${isNavItemOpen && "rotate-180"} transition-all`}
        />
      </Link>
      <ul
        className={`space-y-3 pr-7.5 text-sm ${!isNavItemOpen ? "h-0" : "mt-3"} transition-all`}
      >
        {submenus.map((submenu) => (
          <li key={submenu.id}>
            <Link
              to={submenu.href}
              className="hover:text-primary transition-colors"
            >
              {submenu.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <li key={id} className="group">
      <Link
        to={href}
        className="flex-ic gap-2.5 p-2 rounded-small group-hover:hover:text-primary group-hover:bg-primary-50 transition-colors"
      >
        <Icon size={20} />
        {label}
      </Link>
    </li>
  );
}

export default NavmenuItem;
