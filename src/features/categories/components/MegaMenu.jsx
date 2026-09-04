import { Link } from "react-router";

function MegaMenu({ category }) {
  const slug = category.slug;

  return (
    <div className="absolute pt-3 top-15 xl:top-16 left-0 right-0 z-10">
      <div
        className={`relative hidden lg:flex flex-wrap flex-col gap-y-10 gap-x-15 xl:gap-x-30 ${slug.includes("shaker") ? "max-h-67" : "max-h-138"} text-sm text-neutral-black p-10 rounded-medium bg-white font-IRANSansX-Regular shadow-[0_0_50px_10px_rgba(0,0,0,0.08)]`}
      >
        {category &&
          category.subCategories.map((subCategory) => (
            <div key={subCategory._id}>
              <Link
                to={`category/${category.slug}/${subCategory.slug}`}
                className="text-primary text-xs"
              >
                {subCategory.title}
              </Link>
              <ul className="mt-3 space-y-6">
                {subCategory.subCategories.map((leaf) => (
                  <li
                    key={leaf._id}
                    className="w-fit hover:-translate-x-1 transition-all"
                  >
                    <Link to={`category/${category.slug}/${leaf.slug}`}>
                      {leaf.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <img
          src={`http://localhost:5000${category.image}`}
          className="absolute left-3 bottom-0 size-50"
          alt=""
        />
      </div>
    </div>
  );
}

export default MegaMenu;
