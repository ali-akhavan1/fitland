import ProductCardSkelton from "@/components/ui/Skelton/ProductCardSkelton";
import ProductCard from "./ProductCard";

function ProductList({ products, isLoading, error, limit }) {
  // console.log(products);

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 mb-8">
      {isLoading &&
        Array.from({ length: limit }).map((_, index) => (
          <ProductCardSkelton key={index} />
        ))}
        
      {!isLoading && error && <p>{error}</p>}

      {!isLoading &&
        !error &&
        products.length &&
        products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
    </div>
  );
}

export default ProductList;
