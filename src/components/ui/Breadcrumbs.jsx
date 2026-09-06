import { NavLink } from "react-router";

import { ArrowLeft2 } from "iconsax-reactjs";

import useBreadcrumb from "@/features/products/hooks/useBreadcrumb";

function Breadcrumbs({ customClass }) {
  const breadcrumbItems = useBreadcrumb();

  return (
    breadcrumbItems.length > 1 && (
      <div
        className={`flex-ic w-fit h-8 text-404040 select-none space-x-2 mt-10 ${customClass}`}
      >
        {breadcrumbItems.map((item, index) =>
          item.path ? (
            <div className="flex-ic gap-2" key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "text-adadad" : "")}
                to={item.path}
              >
                {item.label}
              </NavLink>
              <ArrowLeft2 color="#adadad" size={20} />
            </div>
          ) : (
            <span key={index}>{item.label}</span>
          ),
        )}
      </div>
    )
  );
}

export default Breadcrumbs;
