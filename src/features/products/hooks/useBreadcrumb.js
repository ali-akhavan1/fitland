import { useEffect, useState } from "react";
import { useParams } from "react-router";

import useCategories from "@/features/categories/hooks/useCategories";
import useSubCategories from "@/features/categories/hooks/useSubCategories";

function useBreadcrumb() {
  const { categories } = useCategories();
  const { subCategories } = useSubCategories();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const { categorySlug, subCategorySlug, leafSlug } = useParams();

  const getMainPath = () => {
    const category = categories.find((cat) => cat.slug === categorySlug);
    return {
      label: category?.title ?? "",
      path: `/category/${categorySlug}`,
    };
  };

  const getSecondaryPaths = () => {
    const otherCategories = subCategories
      .filter((subCat) => {
        return subCat.slug === subCategorySlug || subCat.slug === leafSlug;
      })
      .map((subCat) => ({
        label: subCat?.title ?? "",
        path: `/category/${categorySlug}/${subCategorySlug}${subCat.filters.length ? "/" + leafSlug : ""}`,
      }));
    return otherCategories;
  };

  useEffect(() => {
    if (categories.length && subCategories.length) {
      const mainPath = getMainPath();
      const otherPaths = getSecondaryPaths();
      const finalBreadcrumbItems = [mainPath, ...otherPaths].map(
        (item, index, array) => {
          return index === array.length - 1 ? { ...item, path: null } : item;
        },
      );
      setBreadcrumbItems(finalBreadcrumbItems);
    }
  }, [categories, categorySlug, subCategorySlug, leafSlug]);

  
  return breadcrumbItems;
}

export default useBreadcrumb;
