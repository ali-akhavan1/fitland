import api from "@/services";

const getCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

const getSubCategories = async () => {
  const { data } = await api.get("/subcategories");
  return data;
};

export { getCategories, getSubCategories };
