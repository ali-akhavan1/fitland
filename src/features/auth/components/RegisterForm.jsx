import { Link } from "react-router";

import { ArrowRight } from "iconsax-reactjs";

import RegisterInput from "./RegisterInput";
import useRegister from "../hooks/useRegister";

function RegisterForm() {
  const { register, handleRegister, changeRegister } = useRegister();

  return (
    <div className="w-89.5 lg:w-114 p-6 lg:p-8 border bg-white border-ededed rounded-small font-IRANSansX-Medium shadow-[0_0_12px_rgba(0,0,0,0.08)]">
      <form action="" className="space-y-8">
        <h2 className="text-[28px]">ثبت‌نام</h2>

        <div className="text-sm space-y-8">
          <RegisterInput
            name="fullName"
            value={register.fullName}
            onChange={changeRegister}
            label="نام و نام خانوادگی *"
            placeholer="نام خود را به فارسی وارد کنید"
          />

          <RegisterInput
            name="mobile"
            value={register.mobile}
            onChange={changeRegister}
            label="شماره تلفن همراه *"
            placeholer="*********09"
          />

          <RegisterInput
            name="email"
            value={register.email}
            onChange={changeRegister}
            label="ایمیل (اختیاری)"
            type="email"
            placeholer="Example@gmail.coms"
          />
        </div>

        <button onClick={handleRegister} type="button" className="submit-btn">
          تایید
        </button>

        <div className="flex-ic gap-2 text-sm font-IRANSansX-Medium">
          <input
            name="acceptTerms"
            type="checkbox"
            checked={register.acceptTerms}
            onChange={changeRegister}
          />
          <span>
            <Link to="/" className="text-secondary-300">
              قوانین و مقررات
            </Link>{" "}
            را خوانده و قبول دارم.
          </span>
        </div>
      </form>

      <Link to="/auth/login" className="flex-ic gap-2 w-fit mt-8">
        <ArrowRight />
        <span className="text-lg font-IRANSansX-DemiBold text-404040">
          صفحه قبلی
        </span>
      </Link>
    </div>
  );
}

export default RegisterForm;
