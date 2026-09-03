import { Link, useOutletContext } from "react-router";

import OtpInputs from "./OtpInputs";
import { OTP_LENGTH } from "@/constants/auth";
import { getErrorType } from "../utils";
import Spinner from "@/components/ui/Icon/Spinner";
import BackButton from "./BackButton";
import LoginInput from "./LoginInput";

function LoginForm() {
  const {
    isSentOtp,
    identifier,
    otp,
    setOtp,
    handleLogin,
    resendOtp,
    resetLogin,
    changeIdentifier,
    getFormattedCounter,
    isExpired,
    resetIdentifier,
    error,
    isLoading,
  } = useOutletContext();

  const handleResendOTP = (e) => {
    e.preventDefault();
    resendOtp();
  };

  return (
    <div className="auth-form-wrapper">
      <form action="" className="select-none">
        <h2 className="auth-form-title">
          {isSentOtp ? "کد تایید را وارد کنید" : "ورود | ثبت‌نام"}
        </h2>

        <div className="my-8">
          {!isSentOtp && (
            <label className="text-sm text-606060">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </label>
          )}

          {isSentOtp ? (
            <OtpInputs length={OTP_LENGTH} otp={otp} setOtp={setOtp} />
          ) : (
            <LoginInput
              identifier={identifier}
              onChange={changeIdentifier}
              onReset={resetIdentifier}
              error={error}
            />
          )}
          {error && (
            <p className="max-[380px]:text-xs text-sm text-error-3 mt-2">
              لطفا {getErrorType(identifier)} را به صورت صحیح وارد نمایید
            </p>
          )}

          {isSentOtp && (
            <div className="flex-between font-IRANSansX-Medium text-sm mt-8">
              <span className={isExpired ? "text-cbcbcb" : "text-606060"}>
                کد برای شما ارسال شد
              </span>
              <div className="flex-ic gap-2">
                <button
                  className={isExpired ? "text-primary" : "text-cbcbcb"}
                  disabled={!isExpired}
                  onClick={handleResendOTP}
                >
                  ارسال دوباره
                </button>
                <span
                  className={`inline-block w-9 ${isExpired ? "text-cbcbcb" : "text-606060"}`}
                >
                  {getFormattedCounter()}
                </span>
              </div>
            </div>
          )}
        </div>

        <button
          disabled={isLoading}
          type="button"
          onClick={handleLogin}
          className={`submit-btn ${isLoading && "bg-primary-400"}`}
        >
          {isLoading ? <Spinner size={24} /> : isSentOtp ? "ثبت" : "ادامه"}
        </button>
        {!isSentOtp && (
          <p className="lg:hidden text-[10px] text-606060 mt-8">
            ورود شما به معنای پذیرش شرایط فیت لند و{" "}
            <Link className="text-secondary-400" to="/privacy">
              قوانین حریم خصوصی
            </Link>{" "}
            ماست
          </p>
        )}
      </form>

      {isSentOtp && <BackButton to="/auth" onClick={resetLogin} />}
    </div>
  );
}

export default LoginForm;
