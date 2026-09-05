import { Setting4, Sort } from "iconsax-reactjs";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductFilter from "@/features/products/components/ProductFilter";
import ProductSort from "@/features/products/components/ProductSort";
import ProductList from "@/features/products/components/ProductList";
import Pagination from "@/components/ui/Pagination/Pagination";


function ProductsPage() {
  return (
    <div className="container">
      <div>
        <Breadcrumbs customClass="hidden lg:flex-ic" />

        <div className="flex-between *:flex-ic *:gap-2 lg:hidden text-sm mt-4">
          <button>
            <Setting4 />
            <span>فیلترها</span>
          </button>

          <button>
            <Sort />
            <span>مرتب سازی بر اساس</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-10 mb-8">
          <ProductFilter />
          <section className="col-span-2 lg:col-span-3">
            <div className="flex-between mb-6">
              <ProductSort />
              <span className="hidden lg:inline-block text-adadad">
                252 کالا
              </span>
            </div>
            <ProductList />
            <Pagination />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
