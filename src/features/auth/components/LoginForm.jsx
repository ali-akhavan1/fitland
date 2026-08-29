import { Link, useMatches, useOutletContext } from "react-router";

import { ArrowRight } from "iconsax-reactjs";

import useAuth from "../hooks/useAuth";

function LoginForm() {
  const {
    isSentOtp,
    identifier,
    otp,
    handleLogin,
    resendOtp,
    resetLogin,
    changeIdentifier,
    changeOtp,
    getFormattedCounter,
    isExpired,
  } = useOutletContext();

  return (
    <div className="w-89.5 lg:w-114 p-6 lg:p-8 border bg-white border-ededed rounded-small font-IRANSansX-Medium shadow-[0_0_12px_rgba(0,0,0,0.08)]">
      <form action="" className="space-y-8">
        <h2 className="text-[28px]">
          {isSentOtp ? "کد تایید را وارد کنید" : "ورود | ثبت‌نام"}
        </h2>

        <div className="text-sm">
          {!isSentOtp && (
            <label className="text-606060">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </label>
          )}

          {isSentOtp ? (
            <input
              value={otp}
              onChange={changeOtp}
              type="text"
              className="px-3 w-full h-12 rounded-small border border-adadad mt-2"
            />
          ) : (
            <input
              value={identifier}
              onChange={changeIdentifier}
              type="text"
              placeholder="*********09 یا Example@gmail.com"
              className="px-3 w-full h-12 rounded-small border border-adadad mt-2"
            />
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
                <span className="inline-block w-9">
                  {getFormattedCounter()}
                </span>
              </div>
            </div>
          )}
        </div>

        <button type="button" onClick={handleLogin} className="submit-btn">
          {isSentOtp ? "ثبت" : "ادامه"}
        </button>
      </form>

      {isSentOtp && (
        <Link
          onClick={resetLogin}
          to="/auth"
          className="flex-ic gap-2 w-fit mt-8"
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
