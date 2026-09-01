import { Link, useMatches, useOutletContext } from "react-router";

import { ArrowRight } from "iconsax-reactjs";

import useAuth from "../hooks/useAuth";
import Close from "@/components/ui/Icon/Close";
import OtpInputs from "./OtpInputs";
import { OTP_LENGTH } from "@/constants/auth";

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
  } = useOutletContext();

  return (
    <div className="auth-form-wrapper">
      <form action="" className="space-y-8">
        <h2 className="font-IRANSansX-DemiBold lg:font-IRANSansX-Medium text-lg lg:text-[28px]">
          {isSentOtp ? "کد تایید را وارد کنید" : "ورود | ثبت‌نام"}
        </h2>

        <div>
          {!isSentOtp && (
            <label className="text-sm text-606060">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </label>
          )}

          {isSentOtp ? (
            <OtpInputs length={OTP_LENGTH} otp={otp} setOtp={setOtp} />
          ) : (
            <div
              className={`${error ? "text-error-3 border-error-3 bg-[#FFEBE9]" : "border-adadad "} font-IRANSansX-Light text-sm text-404040 lg:font-IRANSansX-Medium lg:text-sm flex-between w-full h-12 rounded-small border pl-3 mt-2`}
            >
              <input
                value={identifier}
                onChange={changeIdentifier}
                type="text"
                placeholder="*********09 یا Example@gmail.com"
                className="size-full px-3 placeholder:text-adadad"
              />
              {identifier && (
                <button
                  className={`${error ? "text-error-3" : ""} size-4.5 shrink-0`}
                  onClick={resetIdentifier}
                >
                  <Close />
                </button>
              )}
            </div>
          )}
          {error && (
            <p className="max-[380px]:text-xs text-sm text-error-3 mt-2">
              لطفا شماره همراه خود را به صورت صحیح وارد نمایید
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
                  onClick={(e) => {
                    e.preventDefault();
                    resendOtp();
                  }}
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

        <button type="button" onClick={handleLogin} className="submit-btn">
          {isSentOtp ? "ثبت" : "ادامه"}
        </button>
        {!isSentOtp && (
          <p className="text-[10px] text-606060">
            ورود شما به معنای پذیرش شرایط فیت لند و{" "}
            <Link className="text-secondary-400" to="/privacy">
              قوانین حریم خصوصی
            </Link>{" "}
            ماست
          </p>
        )}
      </form>

      {isSentOtp && (
        <Link
          onClick={resetLogin}
          to="/auth"
          className="hidden lg:flex-ic gap-2 w-fit mt-8"
        >
          <ArrowRight />
          <span className="text-lg font-IRANSansX-DemiBold text-404040">
            صفحه قبلی
          </span>
        </Link>
      )}
    </div>
  );
}

export default LoginForm;
