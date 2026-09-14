import api from "@/services";

const getAllProducts = async (params) => {
  const { data } = await api.get(`/products`, { params });

  return data;
};

export { getAllProducts };
