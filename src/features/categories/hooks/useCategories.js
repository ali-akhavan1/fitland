import { useEffect, useState } from "react";
import { getCategories } from "../services/categories.service";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await getCategories();
        if (response.success) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        setError("خطا در دریافت دسته‌بندی ها");

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}

export default useCategories;
