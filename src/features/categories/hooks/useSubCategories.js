import { useEffect, useState } from "react";
import { getSubCategories } from "../services/categories.service";

function useSubCategories() {
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubCategories = async () => {
      setIsLoading(true);
      try {
        const response = await getSubCategories();
        if (response.success) {
          setSubCategories(response.data.subcategories);
        }
      } catch (error) {
        setError("خطا در دریافت زیردسته‌بندی ها");

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubCategories();
  }, []);

  return { subCategories, isLoading, error };
}

export default useSubCategories;
