import api from "@/services";

const sendOTP = async (identifier) => {
  const { data } = await api.post("/auth/send-otp", identifier);
  return data;
};

const verifyOTP = async (body) => {
  const { data } = await api.post("/auth/verify-otp", body);
  return data;
};

const register = async (info) => {
  const { data } = await api.post("/auth/register", info);
  return data;
};

const getMe = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};



export { sendOTP, verifyOTP, register, getMe };
