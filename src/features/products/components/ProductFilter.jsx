import Switch from "@/components/ui/Switch";
import Accordion from "@/components/ui/Accordion/Accordion";
import AccordionWrapper from "@/components/ui/Accordion/AccordionWrapper";
import PriceRangeSlider from "./PriceRangeSlider";
import DynamicFilters from "./DynamicFilters";
import ProductFilterSkelton from "@/components/ui/Skelton/ProductFilterSkelton";

function ProductFilter({ priceRange, filters }) {
  // console.log(filters);

  return (
    <>
      {filters.length > 0 ? (
        <aside className="col-span-1 hidden lg:block h-fit sticky top-5 rounded-medium px-3 xl:px-4.5 py-4 mb-12 border border-cbcbcb font-IRANSansX-Medium text-neutral-black select-none">
          <div className="flex-between text-sm">
            <span>فیلترها</span>
            <button className="text-868686">حذف فیلترها</button>
          </div>

          <div className="space-y-2 my-10">
            <div className="flex-between">
              <span>محصولات موجود</span>
              <Switch type="stock" />
            </div>
            <div className="flex-between">
              <span>محصولات تخفیف دار</span>
              <Switch type="discount" />
            </div>
          </div>

          <AccordionWrapper customClass="space-y-4">
            <Accordion
              title="قیمت"
              headerClass="h-10 !text-neutral-black"
              bodyClass="pt-6"
            >
              <PriceRangeSlider min={0} max={priceRange.max} />
            </Accordion>

            {filters.map((filter) => (
              <Accordion
                key={filter.slug}
                title={filter.name}
                headerClass="h-10 !text-neutral-black"
                bodyClass="pt-6"
              >
                <DynamicFilters
                  key={filter.slug}
                  options={filter.options}
                  slug={filter.slug}
                />
              </Accordion>
            ))}
          </AccordionWrapper>
        </aside>
      ) : (
        <ProductFilterSkelton />
      )}

      {/* Mobile */}
      <div className="fixed left-0 right-0 bg-white md:hidden"></div>
    </>
  );
}

export default ProductFilter;
