import { sortItems } from "../constants";

function ProductSort() {
  return (
    <>
      <ul className="hidden lg:flex-ic gap-4 h-8 text-404040">
        {sortItems.map((item, index) => (
          <li key={index} className="px-2 cursor-pointer">
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="fixed md:hidden bg-white"></div>
    </>
  );
}

export default ProductSort;
