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
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { restartCountdown, resetCountdown, getFormattedCounter, isExpired } =
    useCountdown(120);

  useEffect(() => {
    const isLoginPath = location.pathname.includes("login");
    const isRegisterPath = location.pathname.includes("register");
    if ((isLoginPath || isRegisterPath) && !isSentOtp) {
      navigate("/auth", { replace: true });
    }
  }, []);

  const sendOtpToUser = async () => {
    setError(false);
    const isIdentifierValid = validateIdentifier(identifier, true);
    if (!isIdentifierValid) {
      return setError(true);
    }

    setIsLoading(true);
    try {
      const { data } = await authService.sendOTP({
        identifier: identifier.trim(),
      });
      console.log(data);
      setIsSentOtp(true);
      restartCountdown();
      setIdentifierType(data.type);
      navigate("/auth/login");
    } catch (err) {
      toast.error(err?.data.message || "مشکلی پیش آمده، دوباره تلاش کنید");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    let finalOTP = otp.join("").trim();
    const isOtpValid = validateSchema(otpSchema, finalOTP, true);
    if (!isOtpValid) return;
    if (isExpired) {
      toast.error("برای شماره موبایل یا ایمیل خود کد تأیید دریافت کنید");
      return;
    }

    setIsLoading(true);
    try {
      const res = await authService.verifyOTP({ identifier, otp: finalOTP });
      resetCountdown();
      toast.success(res.message);
      if (res.data.isNewUser) {
        return navigate("/auth/register", { replace: true });
      }
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err?.data.message || "مشکلی پیش آمده، دوباره تلاش کنید");
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      await authService.sendOTP({ identifier: identifier.trim() });
      setIsSentOtp(true);
      restartCountdown();
    } catch (err) {
      toast.error(err?.data.message || "مشکلی پیش آمده، دوباره تلاش کنید");
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
    isLoading,
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
