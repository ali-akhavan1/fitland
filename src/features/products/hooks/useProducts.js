import { useEffect, useState } from "react";

import { getAllProducts } from "../services/products.service";

function useProducts(limit = 12) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([]);
  const [priceRange, setPriceRange] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  // console.log(searchParams)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const response = await getAllProducts({ page, limit });
        // console.log(response);
        if (response.success) {
          setProducts(response.data.products);
          setPagination(response.pagination);
          setFilters(response.facets.filters);
          setPriceRange(response.facets.static.price);
        }
      } catch (error) {
        setError("خطا در دریافت محصولات");

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  return {
    products,
    filters,
    priceRange,
    isLoading,
    error,
    pagination,
    page,
    setPage,
  };
}

export default useProducts;
