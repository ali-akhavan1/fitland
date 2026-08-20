import { SearchNormal } from "iconsax-reactjs";

function ProdcutSearchBox() {
  return (
    <div className="flex-ic w-full lg:w-140 xl:w-159.5 h-10 sm:h-12 mt-4.5 sm:mt-5 lg:mt-0 gap-2 sm:border border-cbcbcb bg-f9f9f9 rounded-2xl sm:rounded-xl px-4">
      <SearchNormal className="shrink-0" color="#FA541C" />
      <input
        type="text"
        placeholder="جستجو"
        className="w-full h-full font-IRANSansX-Light text-xs text-868686"
      />
    </div>
  );
}

export default ProdcutSearchBox;
