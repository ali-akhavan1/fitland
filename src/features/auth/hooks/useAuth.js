import { useState } from "react";
import { useNavigate } from "react-router";

import { toast } from "sonner";

import * as authService from "../services/auth.service";
import useCountdown from "./useCountdown";

function useAuth() {
  const [isSentOtp, setIsSentOtp] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { restart, getFormattedCounter, isExpired } = useCountdown(120);


  

  const sendOtpToUser = async () => {
    // validation

    try {
      const res = await authService.sendOTP({ identifier: identifier.trim() });
      console.log(res);
      setIsSentOtp(true);
      restart();
      navigate("/auth/login");

    } catch (err) {
      console.log(err.data);
      toast.error(err.data.message);
    }
  };

  const verifyOtp = async () => {
    const body = { identifier, otp: otp.trim() };

    try {
      const res = await authService.verifyOTP(body);
      console.log(res);
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
      console.log(res);
      setIsSentOtp(true);
      restart();
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

  const changeOtp = (e) => setOtp(e.target.value);

  const resetLogin = () => {
    setIsSentOtp(false);
    setIdentifier("");
    setOtp("");
  };

  return {
    isSentOtp,
    identifier,
    otp,
    handleLogin,
    resendOtp,
    resetLogin,
    changeIdentifier,
    changeOtp,
    getFormattedCounter,
    restart,
    isExpired,
  };
}

export default useAuth;
