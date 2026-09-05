import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {Array(16)
        .fill("")
        .map((product, index) => (
          <ProductCard key={index} />
        ))}
    </div>
  );
}

export default ProductList;
