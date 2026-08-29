import { useState } from "react";
import { useNavigate } from "react-router";

import { toast } from "sonner";

import * as authService from "../services/auth.service";
import { validateSchema } from "@/utils/helper";
import { registerSchema } from "../validators/schema";

function useRegister() {
  const [register, setRegister] = useState({
    fullName: "",
    mobile: "",
    email: "",
    acceptTerms: false,
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const isRegistrationValid = validateSchema(registerSchema, register);
    if (!isRegistrationValid) return;

    try {
      const res = await authService.register(register);
      console.log(res);
      toast.success(res.message);
      navigate("/");
    } catch (err) {
      console.log(err.data);
      toast.error(err.data.message);
    }
  };

  const changeRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "acceptTerms") {
      setRegister((prev) => ({ ...prev, acceptTerms: !prev.acceptTerms }));
    } else {
      setRegister((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    register,
    handleRegister,
    changeRegister,
  };
}

export default useRegister;
