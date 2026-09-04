import api from "@/services";

const getCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

export { getCategories };
