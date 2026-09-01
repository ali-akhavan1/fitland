import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { toast } from "sonner";

import * as authService from "../services/auth.service";
import useCountdown from "./useCountdown";
import validateIdentifier from "../validators";
import { validateSchema } from "@/utils/helper";
import { otpSchema } from "../validators/schema";
import { OTP_LENGTH } from "@/constants/auth";

function useAuth() {
  const [isSentOtp, setIsSentOtp] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [identifierType, setIdentifierType] = useState("");
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { restartCountdown, resetCountdown, getFormattedCounter, isExpired } =
    useCountdown(120);

  useEffect(() => {
    const isLoginRoute = location.pathname.includes("login");
    if (isLoginRoute && !isSentOtp) {
      navigate("/auth");
    }
  }, []);

  const sendOtpToUser = async () => {
    setError(false);
    const isIdentifierValid = validateIdentifier(identifier);
    if (!isIdentifierValid) {
      setError(true);
      return;
    }

    try {
      const res = await authService.sendOTP({ identifier: identifier.trim() });
      console.log(res.data);
      setIsSentOtp(true);
      restartCountdown();
      setIdentifierType(res.data.type);
      navigate("/auth/login");
    } catch (err) {
      console.log(err);
      toast.error(err.data.message);
    }
  };

  const verifyOtp = async () => {
    let finalOTP = otp.join("").trim();
    const isOtpValid = validateSchema(otpSchema, finalOTP, true);
    if (!isOtpValid) return;
    if(isExpired) {
      toast.error("برای شماره موبایل یا ایمیل خود کد تأیید دریافت کنید")
      return;
    }

    try {
      const res = await authService.verifyOTP({ identifier, otp: finalOTP });
      console.log(res);
      resetCountdown();
      toast.success(res.message);
      if (res.data.isNewUser) {
        navigate("/auth/register");
        return;
      }
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err.data);
      toast.error(err.data.message);
    }
  };

  const resendOtp = async () => {
    try {
      const res = await authService.sendOTP({ identifier: identifier.trim() });
      console.log(res.data);
      setIsSentOtp(true);
      restartCountdown();
    } catch (err) {
      toast.error(err.data.message);
    }
  };

  const handleLogin = () => {
    if (isSentOtp) {
      verifyOtp();
    } else {
      sendOtpToUser();
    }
  };

  const changeIdentifier = (e) => setIdentifier(e.target.value);

  const resetLogin = () => {
    setIsSentOtp(false);
    setIdentifier("");
    setOtp(Array(OTP_LENGTH).fill(""));
    setError(null);
    resetCountdown();
  };

  const resetRegister = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    resetCountdown();
  };

  const resetIdentifier = () => {
    setIdentifier("");
  };

  return {
    isSentOtp,
    identifier,
    identifierType,
    otp,
    handleLogin,
    resendOtp,
    resetLogin,
    resetRegister,
    changeIdentifier,
    setOtp,
    getFormattedCounter,
    restartCountdown,
    resetCountdown,
    resetIdentifier,
    isExpired,
    error,
  };
}

export default useAuth;
